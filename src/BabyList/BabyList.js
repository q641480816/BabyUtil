import React, { Component } from 'react';
import { withStyles } from "@material-ui/core";
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import Web3 from "web3";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import './BabyList.css';
import '../BabyHome/babyHome.css';
import Constants from '../util/Constants';
import { getTransactionStatus } from '../util/Utils';
import equal from 'equals';
import Arrow from '../BabyHome/arrow';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: 'rgb(9, 13, 19)',
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: 'rgb(255, 183, 81)',
    },
}));

class BabyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            babyInfo: {},
            selectedWorkPlace: 'Milk Station',
            babies: [],
            currentPage: 1,
            maxPage: 1,
            selectedBaby: null,
            totalReward: 0,
            qulifiedreward: 0,
            quitJobButtonEnable: [],
            teams: [],
            babyTeamDialogConfig: null,
            babyTeamDialogSelectedTeam: 0
        };

        this.styles = this.props.classes;

        this.processBabyInfo = this.processBabyInfo.bind(this);
        this.renderDialog = this.renderDialog.bind(this);
        this.withdrawBaby = this.withdrawBaby.bind(this);
        this.renderBabyTeamDialog = this.renderBabyTeamDialog.bind(this);
        this.removeBabyFromTeam = this.removeBabyFromTeam.bind(this);
        this.addBabyToTeam = this.addBabyToTeam.bind(this);
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (Object.keys(this.props.babyInfo).length > 0 && !equal(prevProps, this.props)) {
            let babies = this.processBabyInfo(this.props.babyInfo, this.props.selectedWorkPlace);
            let totalReward = (Object.values(this.props.babyInfo.workplaces).map(wp => wp.totalRewords)).reduce((a, b) => a + b, 0);
            let qulifiedreward = totalReward - this.props.babyInfo.workplaces['Milk Station'].totalRewords;
            this.setState({
                babies: babies,
                selectedWorkPlace: this.props.selectedWorkPlace,
                currentPage: 1,
                maxPage: Math.ceil(babies.length / 10),
                babyInfo: this.props.babyInfo,
                totalReward: totalReward,
                qulifiedreward: qulifiedreward,
                quitJobButtonEnable: Array(10).fill(true),
                teams: this.props.teams
            })
        }
    }

    processBabyInfo = (babyInfo, wp) => {
        return babyInfo.workplaces[wp].ids.map(id => {
            let b = babyInfo.babies[id];
            return {
                id: id,
                name: Constants.Charactors[b.address.toLowerCase()].name,
                level: b.level,
                totalScore: b.attr.reduce((a, b) => a + b, 0),
                advantage: b.attr[Constants.attributes.indexOf(Constants.Charactors[b.address.toLowerCase()].attr1)],
                sub: b.attr[Constants.attributes.indexOf(Constants.Charactors[b.address.toLowerCase()].attr2)],
                salary: b.pendingReward,
                attr: b.attr,
                address: b.address
            }
        })
    }

    addBabyToTeam = (i, b) => {
        if (i === undefined) return;

        let teams = this.state.teams;
        for (let a = 0; a < 3; a++) {
            if (teams[i].babies[a] === '') {
                teams[i].babies[a] = b.id;
                break;
            }
        }

        this.props.updateTeams(teams);
    }

    removeBabyFromTeam = (ti) => {
        let teams = this.state.teams;
        teams[ti].babies[teams[ti].babies.indexOf(this.state.babyTeamDialogConfig.id)] = '';
        this.props.updateTeams(teams);
    }

    renderDialog = () => {
        if (this.state.selectedBaby !== null) {
            let chara = Constants.Charactors[this.state.selectedBaby.address.toLowerCase()];
            console.log(this.state.selectedBaby);
            return (
                <div id={'babyInfoDialog'} className='dialog' >
                    <span style={{ color: 'rgb(255, 183, 81)', fontSize: '20px', fontWeight: '600', marginTop: '10px' }} className='showOnMobile'>{chara.name}</span>
                    <div className='babyInfoDialogImgWrapper'><img id={'dialogImg'} src={chara.listImgUrl} alt={this.state.selectedBaby.id} /></div>
                    <div className='flex-column'>
                        <div className='flex-row' style={{ color: 'rgb(255, 183, 81)', fontSize: '15px', fontWeight: '600', justifyContent: 'space-between', marginBottom: '25px', marginLeft: '20px', marginRight: '20px'}}>
                            <span style={{ textAlign: ' center' }} className='showOnPc'>{chara.name}</span>
                            <span style={{  textAlign: ' center' }}>{'Lv.' + this.state.selectedBaby.level}</span>
                            <span style={{ textAlign: ' center' }}>{this.state.selectedBaby.totalScore}</span>
                            <span style={{ textAlign: ' center' }}>{chara.role}</span>
                            <span style={{ textAlign: ' center' }}>{chara.dpmType}</span>
                            <span style={{ textAlign: ' center' }}>{chara.rarityName}</span>
                        </div>
                        {
                            Constants.attributes.map(attr => {
                                return (
                                    <div key={attr} className='prograssBarWraper'>
                                        <span style={attr === chara.attr1 || attr === chara.attr2 ? { color: 'rgb(255, 183, 81)', fontSize: '14px', width: ' 80px', fontWeight: '600' } : { color: 'white', fontSize: '14px', width: ' 80px', fontWeight: '600' }}>{attr}</span>
                                        <div className='attrBarWrapper'>
                                            <BorderLinearProgress variant="determinate" value={this.state.selectedBaby.attr[Constants.attributes.indexOf(attr)]} />
                                        </div>
                                        <span style={{ color: 'rgb(255, 183, 81)', fontSize: '16px', fontWeight: 'bold', margin: '0 20px 0 20px' }}>{this.state.selectedBaby.attr[Constants.attributes.indexOf(attr)]}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )
        } else {
            return <div />
        }
    }

    renderBabyTeamDialog = () => {
        if (this.state.babyTeamDialogConfig === null) {
            return (<div />)
        } else {
            let avaliableTeams = [];
            this.state.teams.forEach((t, i) => {
                if (t.babies.includes('') && !t.babies.includes(this.state.babyTeamDialogConfig.id)) {
                    avaliableTeams.push(i);
                }
            })

            return (
                <div className='flex-column dialog' style={{ color: 'white', padding: '30px', fontWeight: 'bold', minWidth: '300px', width: '40vw', maxWidth: '500px' }}>
                    <div style={{ fontSize: '24px', marginBottom: '20px' }}>Team List</div>
                    {this.state.teams.map((t, ti) => {
                        if (t.babies.includes(this.state.babyTeamDialogConfig.id)) {
                            return (
                                <div key={ti} className='flex-row' style={{ marginBotoom: '10px', width: '100%', justifyContent: 'space-between' }}>
                                    <span style={{ fontSize: '18px' }}>{t.name}</span>
                                    <div onClick={() => this.removeBabyFromTeam(ti)} style={{ cursor: 'pointer' }}>
                                        <DeleteForeverIcon style={{ fontSize: '30px', fill: '#FFC85D' }} />
                                    </div>
                                </div>
                            )
                        }

                    })}
                    <div className='flex-row' style={{ marginTop: '20px' }}>
                        <div style={{ width: '100%' }}>
                            <FormControl fullWidth>
                                <InputLabel>Avaliable Teams</InputLabel>
                                <Select
                                    value={this.state.babyTeamDialogSelectedTeam}
                                    label="Avaliable Teams"
                                    onChange={(e) =>
                                        this.setState({ babyTeamDialogSelectedTeam: e.target.value })}
                                >
                                    {avaliableTeams.map((ti, i) => {
                                        return (
                                            <MenuItem key={i} value={i}>{this.state.teams[ti].name}</MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                        </div>
                        <div style={{ width: '30%', color: '#FFC85D', justifyContent: 'flex-end', cursor: ' pointer' }} className='flex-row centered' onClick={() => this.addBabyToTeam(avaliableTeams[this.state.babyTeamDialogSelectedTeam], this.state.babyTeamDialogConfig)}>Add</div>
                    </div>
                </div>
            )
        }
    }

    withdrawBaby = (b, index) => {
        if (!this.state.quitJobButtonEnable[index % 10]) return;

        let quitList = this.state.quitJobButtonEnable;
        quitList[index % 10] = false;
        this.setState({
            quitJobButtonEnable: quitList
        })

        const web3 = new Web3(window.web3.currentProvider);

        const transactionParameters = {
            to: Constants.Contracts[('staking_' + this.props.selectedWorkPlace.substring(0, 1).toLowerCase() + this.props.selectedWorkPlace.substring(1)).replace(" ", "") + 'Staking'], // Required except during contract publications.
            from: window.ethereum.selectedAddress, // must match user's active address.
            data: web3.eth.abi.encodeFunctionCall({
                name: 'withdraw',
                type: 'function',
                inputs: [{
                    type: 'uint256',
                    name: '_nftId'
                }]
            }, [web3.utils.toBN(b.id)])
        };

        window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [transactionParameters],
        }).then((tx) => {
            getTransactionStatus(tx, () => this.props.reloadAll());
        }).catch(r => {
            this.props.reloadAll();
            console.log(r);
        });
    }

    render() {
        let allTeamedBabies = this.state.teams.map(t => t.babies).reduce((a, b) => a.concat(b), []);

        return (
            <div id='babyListContainer'>
                <div id='babySubInfo'>
                    <span style={{ marginRight: '25px', marginTop: '3px' }}>Working / Free baby: <span style={{ color: 'rgb(255, 183, 81)' }}>{Object.keys(this.props.babyInfo).length === 0 ? 0 : Object.values(this.props.babyInfo.workplaces).map(wp => wp.ids.length).reduce((a, b) => a + b, 0) - this.props.babyInfo.workplaces['Home'].ids.length + "/" + this.props.babyInfo.workplaces['Home'].ids.length}</span></span>
                    <span style={{ marginRight: '25px', marginTop: '3px' }}>Qualified rewards: <span style={{ color: 'rgb(255, 183, 81)' }}>{this.state.qulifiedreward.toFixed(2)}</span></span>
                    <span style={{ marginRight: '25px', marginTop: '3px' }}>Total rewards: <span style={{ color: 'rgb(255, 183, 81)' }}>{this.state.totalReward.toFixed(2)}</span></span>
                </div>
                <div id={'babyListWraper'}>
                    <div style={{ width: '100%', overflowX: 'auto' }}>
                        <div className='flex-row centered' style={{ width: '100%', minWidth: '800px', justifyContent: 'space-evenly', borderBottom: '1px solid grey' }}>
                            <span className='singleInfoBoxTitle'>Name</span>
                            <span className='singleInfoBoxTitle'>Level</span>
                            <span className='singleInfoBoxTitle'>Total Score</span>
                            <span className='singleInfoBoxTitle'>Advantage</span>
                            <span className='singleInfoBoxTitle'>Sub</span>
                            <span className='singleInfoBoxTitle'>Salary</span>
                            <span className='singleInfoBoxTitle'>Teamed</span>
                            <span className='singleInfoBoxTitle'></span>
                        </div>
                        {
                            this.state.babies.slice((this.state.currentPage - 1) * 10, this.state.babies.length <= this.state.currentPage * 10 ? this.state.babies.length : this.state.currentPage * 10).map((b, index) => {
                                return (
                                    <div key={b.id} className='flex-row centered' style={{ width: '100%', minWidth: '800px', justifyContent: 'space-evenly', marginTop: '10px' }}>
                                        <span className='singleInfoBox' style={{ cursor: 'pointer' }} onClick={() => this.setState({ selectedBaby: b })}>{b.name}</span>
                                        <span className='singleInfoBox'>{b.level}</span>
                                        <span className='singleInfoBox'>{b.totalScore}</span>
                                        <span className='singleInfoBox'>{b.advantage}</span>
                                        <span className='singleInfoBox'>{b.sub}</span>
                                        <span className='singleInfoBox'>{b.salary ? b.salary : '--'}</span>
                                        <span className='singleInfoBox' style={allTeamedBabies.includes(b.id) ? { color: 'rgb(254, 153, 59)', cursor: 'pointer' } : { cursor: 'pointer' }} onClick={() => this.setState({ babyTeamDialogConfig: b })}>{allTeamedBabies.includes(b.id) ? 'Yes' : 'No'}</span>
                                        {this.state.selectedWorkPlace === 'Home' ? <span className='singleInfoBox'></span> : <span className={this.state.quitJobButtonEnable[index % 10] ? 'singleInfoBox enabled' : 'singleInfoBox disabled'} onClick={() => this.withdrawBaby(b, index)} >Quit</span>}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='flex-row centered' style={this.state.babies.length === 0 ? { display: 'none' } : { marginTop: '20px' }}>
                        <div onClick={() => this.setState({ currentPage: this.state.currentPage === 1 ? this.state.currentPage : this.state.currentPage - 1 })}>
                            <Arrow direction={'left'} disabled={this.state.currentPage === 1} />
                        </div>
                        <span className={this.styles.paginationIndicator}>{this.state.currentPage + " / " + this.state.maxPage}</span>
                        <div onClick={() => this.setState({ currentPage: this.state.currentPage === this.state.maxPage ? this.state.currentPage : this.state.currentPage + 1 })}>
                            <Arrow direction={'right'} disabled={this.state.currentPage === this.state.maxPage} />
                        </div>
                    </div>
                </div>
                <div>
                    <Dialog
                        open={this.state.selectedBaby !== null}
                        onClose={() => this.setState({ selectedBaby: null })}
                        aria-labelledby="babydetail"
                        aria-describedby="babydetail"
                        maxWidth={'xl'}
                        PaperProps={{
                            style: {
                                backgroundColor: 'transparent'
                            }
                        }}
                    >
                        {this.renderDialog()}
                    </Dialog>
                </div>
                <div>
                    <Dialog
                        open={this.state.babyTeamDialogConfig !== null}
                        onClose={() => this.setState({ babyTeamDialogConfig: null, babyTeamDialogSelectedTeam: 0 })}
                        aria-labelledby="babyTeam"
                        aria-describedby="babyTeam"
                        maxWidth={'xl'}
                        PaperProps={{
                            style: {
                                backgroundColor: 'transparent'
                            }
                        }}
                    >
                        {this.renderBabyTeamDialog()}
                    </Dialog>
                </div>
            </div>
        )
    }
}

const styles = theme => ({
    paginationIndicator: {
        marginLeft: '20px',
        marginRight: '20px',
        color: 'rgb(255, 200, 93)',
        fontSize: '20px',
        fontWeight: 'bold'
    }
});


export default withStyles(styles)(BabyList);