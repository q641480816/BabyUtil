import React, { Component } from 'react';
import { withStyles } from "@material-ui/core";

import { fetchAllData } from './BabyHomeController';
import AccountButton from './AccountButton';
import WorkPlaceSelector from './WorkPlaceSelector';
import './babyHome.css';
import BabyList from '../BabyList/BabyList';
import TeamList from './TeamList/TeamList';

class BabyHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: '',
            babyInfo: {},
            selectedMainTab: 0,
            selectedWorkPlace: 'Milk Station',
            isRunningHarvestAll: false,
            teams: []
        };

        this.styles = this.props.classes;

        this.updateState = this.updateState.bind(this);
        this.updateAccount = this.updateAccount.bind(this);
        this.updateTeams = this.updateTeams.bind(this);
        this.reloadAll = this.reloadAll.bind(this);
        this.updateSelectedWorkplace = this.updateSelectedWorkplace.bind(this);
    }

    componentDidMount() {
        if(document.cookie.trim().length === 0){
            document.cookie = JSON.stringify([]);
        }
        this.setState({
            teams: JSON.parse(document.cookie)
        })
    }

    updateAccount = (acc) => {
        this.setState({
            account: acc
        }, () => {
            if (acc.length === 0) {
                //clear all
            } else {
                fetchAllData(this.state.account)
                    .then(r => this.setState({
                        babyInfo: r
                    }))
                    .catch(err => console.log(err))
                //reload all data
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
            document.cookie = JSON.stringify(this.state.teams);
        })
    }

    reloadAll = () => {
        console.log('Reloading')
        fetchAllData(this.state.account)
            .then(r => this.setState({
                babyInfo: r,
                isRunningHarvestAll: false
            }))
            .catch(err => console.log(err))
    }

    updateSelectedWorkplace = (wp) => {
        this.setState({ selectedWorkPlace: wp });
    }

    render() {
        return (
            <div id={'homeContainer'}>
                <div id={'topbar'} className={'flex-row bar centered'}>
                    <div style={{ color: 'rgb(244, 238, 255)', fontWeight: 'bold', fontSize: '20px' }}>PVE FUCKER</div>
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
                    <BabyList updateTeams={this.updateTeams} teams={this.state.teams} babyInfo={this.state.babyInfo} selectedWorkPlace={this.state.selectedWorkPlace} reloadAll={this.reloadAll}/>
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