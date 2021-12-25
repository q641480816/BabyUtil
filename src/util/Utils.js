import Web3 from "web3";

const hexBnToString = (hex) => {
    return Web3.utils.toBN(hex).toString();
}

const getTransactionStatus = (tx, func) => {
    window.ethereum.send({ method: 'eth_getTransactionReceipt', params: [tx] }, (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        if (res === null || res.result === null) {
            setTimeout(() => getTransactionStatus(tx, func), 2000);
        } else {
            func();
        }
    });
}

export { hexBnToString, getTransactionStatus };