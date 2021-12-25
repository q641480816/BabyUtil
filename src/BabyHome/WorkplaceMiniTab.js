import React from 'react';
import Constants from '../util/Constants';
import Web3 from "web3";
import Button from '@mui/material/Button';

import './babyHome.css';

function WorkplaceMiniTab(props) {

    const harvestAll = () => {
        props.updateState({ isRunningHarvestAll: true })
        const web3 = new Web3(window.web3.currentProvider);

        const transactionParameters = {
            to: Constants.Contracts[('staking_' + props.wpInfo.name.substring(0, 1).toLowerCase() + props.wpInfo.name.substring(1)).replace(" ", "") + 'Staking'], // Required except during contract publications.
            from: window.ethereum.selectedAddress, // must match user's active address.
            data: web3.eth.abi.encodeFunctionCall({
                name: 'harvestAll',
                type: 'function',
                inputs: []
            }, [])
        };

        window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [transactionParameters],
        }).then((tx) => {
            getTransactionStatus(tx);
        }).catch(r => {
            props.reloadAll();
            console.log(r);
        });
    }

    const getTransactionStatus = (tx) => {
        window.ethereum.send({ method: 'eth_getTransactionReceipt', params: [tx] }, (err, res) => {
            if (err) {
                console.log(err);
                return;
            }
            if (res === null || res.result === null) {
                setTimeout(() => getTransactionStatus(tx), 2000);
            } else {
                props.reloadAll();
            }
        });
    }

    return (
        <div className={props.selected ? 'wpTabContainer selected' : 'wpTabContainer'}>
            <div style={{ fontSize: '16px', fontWeight: 'bold', marginTop: '5px', width: '100%', paddingBottom: '15px', borderBottom: '1px solid rgb(52, 61, 79)' }}>{props.wpInfo ? props.wpInfo.name : 'Home'}</div>
            <div>
                <img style={{ width: '100%', margin: '15px 0 15px 0' }} src={props.wpInfo ? props.wpInfo.img : 'https://crypto-upload.s3.ap-southeast-1.amazonaws.com/%08daily/MilkStation.png'} />
            </div>
            <div style={{ color: 'white', justifyContent: 'space-between' }} className='wpTabContentText flex-row'>
                <span>Baby Count</span>
                <span>{props.babyInfo.ids.length}</span>
            </div>
            <div style={{ color: 'white', justifyContent: 'space-between' }} className='wpTabContentText flex-row'>
                <span>Estimated Daily Milk</span>
                <span>50000.111</span>
            </div>
            <div style={{ color: 'white', justifyContent: 'space-between' }} className='wpTabContentText flex-row'>
                <span>Unclaimed MILK</span>
                <span style={{ color: 'rgb(254, 153, 59)' }}>{props.babyInfo.totalRewords ? props.babyInfo.totalRewords.toFixed(2) : '0.00'}</span>
            </div>
            <Button variant="text" style={props.isRunningHarvestAll ? { background: 'grey', color: 'white' } : { background: 'rgb(254, 153, 59)', color: 'white' }} disabled={props.isRunningHarvestAll} onClick={() => harvestAll()}>Harvest all</Button>
        </div>
    )
}

export default WorkplaceMiniTab;