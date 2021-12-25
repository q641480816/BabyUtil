import React, { Component } from 'react';
import { withStyles } from "@material-ui/core";
import equal from 'equals';

import WorkplaceMiniTab from './WorkplaceMiniTab';
import './babyHome.css';
import Constants from '../util/Constants';
import Arrow from './arrow';

class WorkPlaceSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            babyInfo: {
                workplaces: {
                    'Milk Station': {
                        ids: [],
                        totalRewords: 0
                    },
                    'Warehouse': {
                        ids: [],
                        totalRewords: 0
                    },
                    'Energy Station': {
                        ids: [],
                        totalRewords: 0
                    },
                    'Gym': {
                        ids: [],
                        totalRewords: 0
                    },
                    'Dark Castle': {
                        ids: [],
                        totalRewords: 0
                    },
                    'Post Office': {
                        ids: [],
                        totalRewords: 0
                    },
                    'Airport': {
                        ids: [],
                        totalRewords: 0
                    },
                    'Home': {
                        ids: [],
                        totalRewords: 0
                    }
                },
            },
            bigSelectorIndex: 0,
            singleSelectorIndex: 0,
            selectedWorkPlace: 'Milk Station',
            isRunningHarvestAll: false
        };

        this.styles = this.props.classes;

        this.renderTabs = this.renderTabs.bind(this);
    }

    componentDidMount() {
        this.setState({isRunningHarvestAll: this.props.isRunningHarvestAll})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!equal(prevProps.babyInfo, this.props.babyInfo)) {
            this.setState({
                babyInfo: this.props.babyInfo,
            })
        }

        if (!equal(prevProps.selectedWorkPlace, this.props.selectedWorkPlace)) {
            this.setState({
                selectedWorkPlace: this.props.selectedWorkPlace,
            })
        }

        if (!equal(prevProps.isRunningHarvestAll, this.props.isRunningHarvestAll)) {
            this.setState({
                isRunningHarvestAll: this.props.isRunningHarvestAll,
            })
        }
    }

    renderTabs = () => {
        const container = [];
        let keys = Object.keys(this.state.babyInfo.workplaces);
        for (let i = 0; i < keys.length; i++) {
            let wp = keys[i];
            container.push(
                <div key={wp} style={(i < 4 && this.state.bigSelectorIndex === 0) || (i >= 4 && this.state.bigSelectorIndex === 1) ? {} : { display: 'none' }} onClick={() => this.props.updateSelectedWorkplace(wp)}>
                    <WorkplaceMiniTab wpInfo={Constants.WorkPlaces[wp]} babyInfo={this.state.babyInfo.workplaces[wp]} selected={this.state.selectedWorkPlace === wp} isRunningHarvestAll={this.state.isRunningHarvestAll} reloadAll={this.props.reloadAll} updateState={this.props.updateState} />
                </div>
            )
        }
        return container;
    }

    render() {
        return (
            <div>
                <div className='flex-row centered'>
                    <div onClick={() => this.setState({ bigSelectorIndex: 0 })}>
                        <Arrow direction={'left'} disabled={this.state.bigSelectorIndex === 0} />
                    </div>
                    {this.renderTabs()}
                    <div onClick={() => this.setState({ bigSelectorIndex: 1 })}>
                        <Arrow direction={'right'} disabled={this.state.bigSelectorIndex === 1} />
                    </div>
                </div>
            </div>
        )
    }
}

const styles = theme => ({

});


export default withStyles(styles)(WorkPlaceSelector);