import Web3 from "web3";
import {
    Multicall
} from 'ethereum-multicall';

import Constants from '../util/Constants.js';
import { hexBnToString } from '../util/Utils.js';

const fetchAllData = async (address) => {
    try {


        let result = {
            babies: {},
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
            }
        }

        const web3 = new Web3('https://bsc-dataseed1.binance.org:443');
        const multicall = new Multicall({ web3Instance: web3, tryAggregate: true });

        //get all baby ids in workplace
        let context = Object.values(Constants.WorkPlaces).map(w => {
            return {
                reference: w.name,
                contractAddress: Constants.Contracts[w.stakingContractKey],
                abi: Constants.ABIs.staking_places,
                calls: [{ reference: w.name + ' Call', methodName: 'stakeInfoOfUser', methodParameters: [address] }]
            }
        });

        let res = await multicall.call(context);

        Object.keys(res.results).forEach(wp => {
            result.workplaces[wp] = {
                ids: res.results[wp].callsReturnContext[0].returnValues[0].map(b => hexBnToString(b.hex)),
                totalRewords: hexBnToString(res.results[wp].callsReturnContext[0].returnValues[1].hex) / 1e18.toString()
            }

            result.workplaces[wp].ids.forEach(b => {
                result.babies[b] = {
                    location: wp
                }
            })
        })

        // get all baby ids at home;
        let babiesAtHome;
        babiesAtHome = await fetchAllFreeBaby(multicall, address);


        babiesAtHome.forEach(b => {
            result.babies[b.id] = { location: 'Home' };
            result.workplaces.Home.ids.push(b.id);
        })

        //get all baby details
        context = Object.keys(result.babies).map(id => {
            return {
                reference: id,
                contractAddress: Constants.Contracts.nftProxy,
                abi: Constants.ABIs.nftProxyAbi,
                calls: [{ reference: id, methodName: 'info', methodParameters: [id] }]
            }
        })

        let res2 = await multicall.call(context);
        Object.keys(res2.results).forEach(k => {
            const b = res2.results[k].callsReturnContext[0].returnValues;
            result.babies[k] = {
                address: b[0],
                dna: hexBnToString(b[2].hex),
                exp: b[4],
                level: b[5],
                attr: b[6],
                location: result.babies[k].location
            }
        })

        //get pve chances
        context = Object.keys(result.babies).map(id => {
            return {
                reference: id,
                contractAddress: Constants.Contracts.pveCounter,
                abi: Constants.ABIs.pveCounterAbi,
                calls: [{ reference: id, methodName: 'remainingNum', methodParameters: [id, result.babies[id].level] }]
            }
        });
        let res4 = await multicall.call(context);
        Object.keys(res4.results).forEach(k => {
            result.babies[k].pve = res4.results[k].callsReturnContext[0].returnValues[0];
        });

        //get working salary;
        context = [];
        Object.keys(result.babies).forEach(id => {
            if (result.babies[id].location !== 'Home') {
                context.push({
                    reference: id,
                    contractAddress: Constants.Contracts[Constants.WorkPlaces[result.babies[id].location].stakingContractKey],
                    abi: Constants.ABIs.staking_places,
                    calls: [{ reference: id + ' Call', methodName: "pendingRewardOfNFT", methodParameters: [id] }]
                })
            }
        })

        let res3 = await multicall.call(context);
        Object.values(res3.results).forEach(r => {
            result.babies[r.callsReturnContext[0].methodParameters[0]].pendingReward = (hexBnToString(r.callsReturnContext[0].returnValues[0].hex) / 1e18.toString()).toFixed(4);
        });

        return Promise.resolve(result);
    } catch (err) {
        return Promise.reject(err);
    }
}

const fetchAllFreeBaby = async (multicall, address) => {
    try {
        //get all baby balance
        let context = Object.values(Constants.Charactors).map(b => {
            return {
                reference: b.name,
                contractAddress: Constants.Contracts['role_' + (b.name.charAt(0) + "").toLowerCase() + b.name.substring(1).replace(" ", "")],
                abi: Constants.ABIs.roleAbi,
                calls: [{ reference: b.name, methodName: 'balanceOf', methodParameters: [address] }]
            }
        });

        let res = await multicall.call(context);

        context = [];
        Object.values(res.results).forEach(ca => {
            if (parseInt(hexBnToString(ca.callsReturnContext[0].returnValues[0].hex)) > 0) {
                let count = parseInt(hexBnToString(ca.callsReturnContext[0].returnValues[0].hex));
                for (let i = 0; i < count; i++) {
                    context.push({
                        reference: ca.originalContractCallContext.reference + i,
                        contractAddress: ca.originalContractCallContext.contractAddress,
                        abi: Constants.ABIs.roleAbi,
                        calls: [{ reference: ca.originalContractCallContext.reference + i, methodName: 'tokenOfOwnerByIndex', methodParameters: [address, i] }]
                    })
                }
            }
        })

        let res2 = await multicall.call(context);
        let result = [];
        Object.values(res2.results).forEach(b => {
            result.push({
                id: hexBnToString(b.callsReturnContext[0].returnValues[0].hex),
                location: 'Home'
            })
        })

        return Promise.resolve(result);
        //get all baby ids
    } catch (err) {
        return Promise.reject(err);
    }
}

export { fetchAllData };