import React, { Component } from 'react';
import { withStyles } from "@material-ui/core";

import { fetchAllData } from './BabyHomeController';
import AccountButton from './AccountButton';
import WorkPlaceSelector from './WorkPlaceSelector';
import './babyHome.css';
import BabyList from '../BabyList/BabyList';
import TeamList from '../TeamList/TeamList';

class BabyHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: '',
            babyInfo: {},
            selectedMainTab: 0,
            selectedWorkPlace: 'Milk Station',
            isRunningHarvestAll: false,
            teams: [],
            price: {
                baby: 0,
                milk: 0
            }
        };

        this.styles = this.props.classes;

        this.updateState = this.updateState.bind(this);
        this.updatePrice = this.updatePrice.bind(this);
        this.updateAccount = this.updateAccount.bind(this);
        this.updateTeams = this.updateTeams.bind(this);
        this.reloadAll = this.reloadAll.bind(this);
        this.updateSelectedWorkplace = this.updateSelectedWorkplace.bind(this);
    }

    componentDidMount() {
        this.updatePrice();
        setInterval(this.updatePrice, 60000);
    }

    updatePrice = () => {
        fetch('https://www.callmegrandpa.com/price')
            .then(res => res.json())
            .then(data => this.setState({ price: data }))
            .catch(err => this.updatePrice())
    }

    updateAccount = (acc) => {
        this.setState({
            account: acc
        }, () => {
            if (acc.length === 0) {
                //clear all
            } else {
                //reload all data
                this.reloadAll();
            }
        });
    }

    updateState = (state) => {
        this.setState(state);
    }

    updateTeams = (teams) => {
        this.setState({
            teams: teams
        }, () => {
            document.cookie = this.state.account + '=' + JSON.stringify(this.state.teams) + ";max-age=31536000";
        })
    }

    reloadAll = () => {
        console.log('Reloading');
        fetchAllData(this.state.account)
            .then(r => this.setState({
                babyInfo: r,
                isRunningHarvestAll: false
            }, () => {
                //update teams
                if (document.cookie.includes(this.state.account)) {
                    this.setState({
                        teams: JSON.parse(document.cookie.split('; ').find(r => (r.trim()).startsWith(this.state.account)).split('=')[1])
                    })
                } else {
                    this.setState({ teams: [] })
                }
            }))
            .catch(err => this.reloadAll())
    }

    updateSelectedWorkplace = (wp) => {
        this.setState({ selectedWorkPlace: wp });
    }

    render() {
        return (
            <div id={'homeContainer'}>
                <div id={'topbar'} className={'flex-row bar'}>
                    <div style={{ color: 'rgb(244, 238, 255)', fontWeight: 'bold', fontSize: '20px' }} className='showOnPc'>PVE FUCKER</div>
                    <div className='flex-row priceText'>
                        <div style={{ marginRight: '20px', marginLeft: '10px' }} >Baby ≈ {this.state.price.baby.toFixed(3)}</div>
                        <div style={{ marginRight: '20px' }} >Milk ≈ {this.state.price.milk.toFixed(6)}</div>
                        <div>Ratio ≈ {(this.state.price.milk / this.state.price.baby).toFixed(5)}</div>
                    </div>

                    <AccountButton updateAccount={this.updateAccount} account={this.state.account} />

                </div>
                <div style={{ marginTop: '120px' }} className={'centered flex-row'}>
                    <div id={'topNav'} className={'flex-row bar centered'}>
                        <div className={this.state.selectedMainTab === 0 ? 'button selected' : 'button'} style={{ width: '48%' }} onClick={() => this.setState({ selectedMainTab: 0 })}>Baby Info</div>
                        <div className={this.state.selectedMainTab === 1 ? 'button selected' : 'button'} style={{ width: '48%' }} onClick={() => this.setState({ selectedMainTab: 1 })}>Teams</div>
                    </div>
                </div>
                <div className={'flex-column centered'} style={this.state.selectedMainTab === 0 ? {} : { display: 'none' }}>
                    <WorkPlaceSelector updateState={this.updateState} babyInfo={this.state.babyInfo} selectedWorkPlace={this.state.selectedWorkPlace} updateSelectedWorkplace={this.updateSelectedWorkplace} isRunningHarvestAll={this.state.isRunningHarvestAll} reloadAll={this.reloadAll} />
                    <BabyList updateTeams={this.updateTeams} teams={this.state.teams} babyInfo={this.state.babyInfo} selectedWorkPlace={this.state.selectedWorkPlace} reloadAll={this.reloadAll} />
                </div>
                <div className='flex-column centered' style={this.state.selectedMainTab === 1 ? {} : { display: 'none' }}>
                    <TeamList reloadAll={this.reloadAll} updateTeams={this.updateTeams} teams={this.state.teams} babyInfo={this.state.babyInfo} />
                </div>
            </div>
        )
    }
}

const styles = theme => ({

});


export default withStyles(styles)(BabyHome);