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
            displayCount: 4,
            selectedWorkPlace: 'Milk Station',
            isRunningHarvestAll: false
        };

        this.styles = this.props.classes;

        this.renderTabs = this.renderTabs.bind(this);
        this.updateBigSelector = this.updateBigSelector.bind(this);
        this.updateResize = this.updateResize.bind(this);
    }

    componentDidMount() {
        this.setState({ isRunningHarvestAll: this.props.isRunningHarvestAll })

        window.onresize = this.updateResize;
        this.updateResize();
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

    updateResize = () => {
        let dc = 4;
        if (document.documentElement.clientWidth < 825) {
            dc = 1;
        } else if (document.documentElement.clientWidth < 1500) {
            dc = 2;
        }

        let index = Object.keys(this.state.babyInfo.workplaces).indexOf(this.state.selectedWorkPlace);
        this.setState({ displayCount: dc, bigSelectorIndex: Math.floor(index / dc) }, () => {
            if (index < this.state.bigSelectorIndex * this.state.displayCount || index >= (this.state.bigSelectorIndex + 1) * this.state.displayCount) {
                this.props.updateSelectedWorkplace(Object.keys(this.state.babyInfo.workplaces)[this.state.bigSelectorIndex * this.state.displayCount]);
            }
        });
    }

    updateBigSelector = (leftOrRight) => {
        // true to left false to right
        let index = 0;
        if (leftOrRight) {
            index = this.state.bigSelectorIndex === 0 ? this.state.bigSelectorIndex : this.state.bigSelectorIndex - 1
        } else {
            index = this.state.bigSelectorIndex === 8 / this.state.displayCount - 1 ? this.state.bigSelectorIndex : this.state.bigSelectorIndex + 1
        }

        this.setState({ bigSelectorIndex: index }, () => {
            // console.log(Object.keys(this.state.babyInfo.workplaces)[index * this.state.displayCount]);
            this.props.updateSelectedWorkplace(Object.keys(this.state.babyInfo.workplaces)[index * this.state.displayCount]);
        });
    }

    renderTabs = () => {
        const container = [];
        let keys = Object.keys(this.state.babyInfo.workplaces);
        for (let i = 0; i < keys.length; i++) {
            let wp = keys[i];
            container.push(
                <div key={wp} style={i >= this.state.bigSelectorIndex * this.state.displayCount && i < (this.state.bigSelectorIndex + 1) * this.state.displayCount ? {} : { display: 'none' }} onClick={() => this.props.updateSelectedWorkplace(wp)}>
                    <WorkplaceMiniTab wpInfo={Constants.WorkPlaces[wp]} babyInfo={this.state.babyInfo.workplaces[wp]} selected={this.state.selectedWorkPlace === wp} isRunningHarvestAll={this.state.isRunningHarvestAll} reloadAll={this.props.reloadAll} updateState={this.props.updateState} />
                </div>
            )
        }
        return container;
    }

    render() {
        return (
            <div>
                <div className={this.state.displayCount !== 1 ? 'flex-row centered' : 'flex-column centered'}>
                    <div onClick={() => this.updateBigSelector(true)} style={this.state.displayCount === 1 ? { display: 'none' } : {}}>
                        <Arrow direction={'left'} disabled={this.state.bigSelectorIndex === 0} />
                    </div>
                    {this.renderTabs()}
                    <div onClick={() => this.updateBigSelector(false)} style={this.state.displayCount === 1 ? { display: 'none' } : {}}>
                        <Arrow direction={'right'} disabled={this.state.bigSelectorIndex === 8 / this.state.displayCount - 1} />
                    </div>
                    <div style={this.state.displayCount !== 1 ? { display: 'none' } : { justifyContent: 'space-evenly', width: '100%', color: 'rgb(255, 183, 81)', fontWeight: 'bold', fontSize: '24px', marginBottom: '20px'}} className='flex-row centered'>
                        <div onClick={() => this.updateBigSelector(true)}>
                            <Arrow direction={'left'} disabled={this.state.bigSelectorIndex === 0} />
                        </div>
                        <div>
                            {(this.state.bigSelectorIndex + 1) + " / 8"}
                        </div>
                        <div onClick={() => this.updateBigSelector(false)}>
                            <Arrow direction={'right'} disabled={this.state.bigSelectorIndex === 8 / this.state.displayCount - 1} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = theme => ({

});


export default withStyles(styles)(WorkPlaceSelector);