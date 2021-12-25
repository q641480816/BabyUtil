import React, { Component } from 'react';
import Button from '@mui/material/Button';
import equal from 'equals';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import { withStyles } from "@material-ui/core";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Web3 from "web3";

import './TeamList.css';
import '../babyHome.css';
import Constants from '../../util/Constants';
import { getTransactionStatus } from '../../util/Utils';

class TeamList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            babyInfo: {},
            teams: [],
            newTeamDialog: false,
            newTeamTempName: ''
        };

        this.styles = this.props.classes;

        this.renderTeamList = this.renderTeamList.bind(this);
        this.newTeam = this.newTeam.bind(this);
        this.removeTeam = this.removeTeam.bind(this);
        this.removeTeamBaby = this.removeTeamBaby.bind(this);
        this.withdrawBaby = this.withdrawBaby.bind(this);
        this.startWorkBaby = this.startWorkBaby.bind(this);
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (Object.keys(this.props.babyInfo).length > 0) {
            if (!equal(prevProps, this.props)) {
                this.setState({
                    babyInfo: this.props.babyInfo,
                    teams: this.props.teams
                })
            }
        }
    }

    newTeam = (name) => {
        let teams = this.state.teams;
        teams.push({
            babies: ['', '', ''],
            name: name === undefined || name.trim().length === 0 ? 'Team ' + (teams.length + 1) : name,
            index: 1
        })
        this.props.updateTeams(teams);
    }

    removeTeam = (i) => {
        let newTeams = this.state.teams.slice(0, i).concat(this.state.teams.slice(i + 1));
        this.props.updateTeams(newTeams);
    }

    removeTeamBaby = (ti, bi) => {
        let teams = this.state.teams;
        teams[ti]['babies'][bi] = '';
        this.props.updateTeams(teams);
    }

    withdrawBaby = (b, id) => {
        const web3 = new Web3(window.web3.currentProvider);

        const transactionParameters = {
            to: Constants.Contracts[('staking_' + b.location.substring(0, 1).toLowerCase() + b.location.substring(1)).replace(" ", "") + 'Staking'], // Required except during contract publications.
            from: window.ethereum.selectedAddress, // must match user's active address.
            data: web3.eth.abi.encodeFunctionCall({
                name: 'withdraw',
                type: 'function',
                inputs: [{
                    type: 'uint256',
                    name: '_nftId'
                }]
            }, [web3.utils.toBN(id)])
        };

        window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [transactionParameters],
        }).then((tx) => {
            getTransactionStatus(tx, () => this.props.reloadAll());
        }).catch(r => console.log(r));
    }

    startWorkBaby = (b, id) => {
        if (b.location !== 'Home') return;

        let chara = Constants.Charactors[b.address.toLowerCase()];
        let contract = Constants.Contracts[Constants.WorkPlaces['Milk Station'].stakingContractKey];
        if (!(b.attr[Constants.attributes.indexOf(chara.attr1)] < 86 || b.attr[Constants.attributes.indexOf(chara.attr2)] < 61 || b.level === 1)) {
            contract = Constants.Contracts[Constants.WorkPlaces[chara.workLocation].stakingContractKey];
        }

        const web3 = new Web3(window.web3.currentProvider);

        const transactionParameters = {
            to: contract, // Required except during contract publications.
            from: window.ethereum.selectedAddress, // must match user's active address.
            data: web3.eth.abi.encodeFunctionCall({
                name: 'deposit',
                type: 'function',
                inputs: [{
                    type: 'uint256',
                    name: '_nftId'
                }]
            }, [web3.utils.toBN(id)])
        };

        window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [transactionParameters],
        }).then((tx) => {
            getTransactionStatus(tx, () => this.props.reloadAll());
        }).catch(r => console.log(r));
    }

    renderTeamList = () => {
        if (Object.keys(this.state.babyInfo).length === 0) return;

        return this.state.teams.map((team, i) => {
            return (
                <div key={i} className='teamListTab'>
                    <div style={{ position: 'absolute', top: '30px', right: '30px', cursor: 'pointer' }} onClick={() => this.removeTeam(i)}>
                        <DeleteForeverIcon style={{ fontSize: '40px', fill: '#FFC85D' }} />
                    </div>
                    <div className='flex-row' style={{ margin: '10px 0 20px 0', color: 'white', fontSize: '24px', fontWeight: 'bold' }}>
                        <span style={{ marginRight: '50px', color: 'rgb(255, 183, 81)' }}>{team.name}</span>
                        <span>Avaliable PVE chances: <span style={{ color: 'rgb(255, 183, 81)' }}>0</span></span>
                    </div>
                    {team.babies.map((id, bi) => {
                        if (id !== '') {
                            let baby = this.state.babyInfo.babies[id];
                            let char = Constants.Charactors[baby.address.toLowerCase()];
                            return (
                                <div key={id} className='flex-row' style={{ alignItems: 'center', height: '100px', marginBottom: '12px', marginTop: '12px', color: 'white', fontSize: '14px', fontWeight: '500' }}>
                                    <div>
                                        <img alt={char.name} style={{ height: '100px', width: '100px' }} src={char.listImgUrl} />
                                    </div>
                                    <div className='flex-column' style={{ height: '100%', justifyContent: 'space-around', marginLeft: '10px', borderRight: '1px solid rgb(255, 183, 81)', width: '12%', minWidth: '100px' }}>
                                        <span >{char.name}</span>
                                        <span style={{ color: 'rgb(255, 183, 81)' }}>Level: {baby.level}</span>
                                        <span >{baby.location}</span>
                                    </div>
                                    <div className='flex-column' style={{ width: '45%', borderRight: '1px solid rgb(255, 183, 81)' }}>
                                        <div className='flex-row' style={{ width: '100%' }}>
                                            <div className='flex-column centered' style={{ width: '25%' }}>
                                                <span>Total scores</span>
                                                <span style={{ marginTop: '1px', fontSize: '16px', color: 'rgb(255, 183, 81)' }}>{baby.attr.reduce((a, b) => a + b, 0)}</span>
                                            </div>
                                            {baby.attr.slice(0, 3).map((a, i) => {
                                                return (
                                                    <div key={i} className='flex-column centered' style={{ width: '25%' }}>
                                                        <span style={char.attr1 === Constants.attributes[i] || char.attr2 === Constants.attributes[i] ? { color: 'rgb(255, 183, 81)' } : {}}>{Constants.attributes[i]}</span>
                                                        <span style={{ marginTop: '1px', color: 'rgb(255, 183, 81)', fontSize: '16px' }}>{a}</span>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className='flex-row' style={{ width: '100%', marginTop: '15px' }}>
                                            <div className='flex-column centered' style={{ width: '25%' }}>
                                                <span>Rarity</span>
                                                <span style={{ marginTop: '1px', fontSize: '16px', color: 'rgb(255, 183, 81)' }}>{char.rarityName}</span>
                                            </div>
                                            {baby.attr.slice(3).map((a, i) => {
                                                return (
                                                    <div key={i} className='flex-column centered' style={{ width: '25%' }}>
                                                        <span style={char.attr1 === Constants.attributes[i + 3] || char.attr2 === Constants.attributes[i + 3] ? { color: 'rgb(255, 183, 81)' } : {}}>{Constants.attributes[i]}</span>
                                                        <span style={{ marginTop: '1px', color: 'rgb(255, 183, 81)', fontSize: '16px' }}>{a}</span>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div className='flex-row' style={{ width: 'calc(43%  - 100px)', height: '100%' }}>
                                        <div className='flex-column' style={{ width: '40%', alignItems: ' center' }}>
                                            <span>PVE Chances</span>
                                            <span style={{ color: 'rgb(255, 183, 81)', fontSize: '64px', lineHeight: '1' }}>-</span>
                                        </div>
                                        <div className='flex-column' style={{ width: '60%', alignItems: ' center', justifyContent: 'space-around' }}>
                                            <Button variant="text" style={{ background: 'rgb(254, 153, 59)', color: 'white', borderRadius: '10px', fontWeight: 'bold', width: '70%', height: '32px' }} onClick={() => this.removeTeamBaby(i, bi)}>Remove</Button>
                                            {/* <Button variant="text" style={{ background: 'rgb(254, 153, 59)', color: 'white', borderRadius: '10px', fontWeight: 'bold', width: '70%', height: '32px' }} onClick={() => this.startWorkBaby(baby, id)}>Start Work</Button> */}
                                            {
                                                baby.location !== 'Home' ?
                                                    <Button variant="text" style={{ background: 'rgb(254, 153, 59)', color: 'white', borderRadius: '10px', fontWeight: 'bold', width: '70%', height: '32px' }} onClick={() => this.withdrawBaby(baby, id)}>Quit Work</Button> :
                                                    <Button variant="text" style={{ background: 'rgb(254, 153, 59)', color: 'white', borderRadius: '10px', fontWeight: 'bold', width: '70%', height: '32px' }} onClick={() => this.startWorkBaby(baby, id)}>Start Work</Button>
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div key={Math.random()} style={{ height: '100px', fontSize: '18px', fontWeight: 'bold', justifyContent: 'center', color: 'white' }} className='flex-column'>
                                    <span style={{ marginLeft: '5px' }}> Baby Missing, please add baby to complete team formation...</span>
                                </div>
                            )
                        }
                    })}
                </div>
            )
        })
    }

    render() {
        return (
            <div id={'teamListContainer'} className='flex-column centered'>
                <div className='teamListTab' style={{ marginTop: '40px' }}>
                    <div className='flex-row' style={{ color: 'white', fontSize: '22px', fontWeight: '500' }}>
                        <span style={{ marginRight: '40px' }}><span style={{ color: 'rgb(255, 183, 81)' }}>{this.state.teams.length}</span> Teams</span>
                        <span><span style={{ color: 'rgb(255, 183, 81)' }}>X</span> Teams Ready</span>
                    </div>
                    <Button variant="text" style={{ background: 'rgb(254, 153, 59)', color: 'white', paddingLeft: '30px', paddingRight: '30px', borderRadius: '17px', marginTop: '22px', fontWeight: 'bold' }} onClick={() => this.setState({ newTeamDialog: true, newTeamTempName: '' })}>Add Team</Button>
                </div>
                {this.renderTeamList()}
                <Dialog
                    open={this.state.newTeamDialog}
                    maxWidth={'xl'}
                    PaperProps={{
                        style: {
                            backgroundColor: 'transparent'
                        }
                    }}>
                    <div className='teamListDialogOutline flex-column centered'>
                        <TextField autoFocus margin="dense" id="name" label="Team Name" type="text" fullWidth variant="standard" value={this.state.newTeamTempName} onChange={(e) => this.setState({ newTeamTempName: e.target.value })} />
                        <Button variant="text" style={{ background: 'rgb(254, 153, 59)', color: 'white', borderRadius: '10px', fontWeight: 'bold', width: '70%', height: '32px', marginTop: '20px' }} onClick={() => { this.newTeam(this.state.newTeamTempName); this.setState({ newTeamDialog: false }) }}>Create team</Button>
                    </div>
                </Dialog>
            </div>
        )
    }

}

const styles = theme => ({
    textFieldColor: {
        color: 'red'
    }
});

export default withStyles(styles)(TeamList);