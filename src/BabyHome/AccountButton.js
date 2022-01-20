import React, { Component } from 'react';
import { withStyles } from "@material-ui/core";

class AccountButton extends Component {
    constructor(props) {
        super(props);

        this.styles = this.props.classes;

        this.handleAccountChange = this.handleAccountChange.bind(this);
        this.connect = this.connect.bind(this);
    }

    componentDidMount() {
        this.connect();
        window.ethereum.on('accountsChanged', this.handleAccountChange);
    }

    componentWillUnmount() {
        window.ethereum.removeListener('accountsChanged', this.handleAccountChange);
    }

    connect = () => {
        if (typeof window.ethereum !== 'undefined' && window.ethereum.isMetaMask && this.props.account.length === 0) {
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(acc => this.props.updateAccount(acc[0]))
                .catch(err => console.log(err));
        }
    }

    handleAccountChange = (accounts) => {
        this.props.updateAccount(accounts.length === 0 ? '' : accounts[0]);
    }

    render() {
        return (
            <div className={this.styles.connectButton} onClick={() => this.connect()}>
                {this.props.account.length === 0 ? 'Connect Wallet' : this.props.account.substring(0, 2) + "...." + this.props.account.substring(this.props.account.length - 5)}
            </div>
        );
    }
}

const styles = theme => ({
    connectButton: {
        backgroundColor: 'rgb(53, 53, 71)',
        padding: '5px 15px 5px 15px',
        borderRadius: '16px',
        color: 'rgb(244, 238, 255)',
        fontWeight: 600,
        cursor: 'default',
        border: '2px solid rgb(255, 200, 93)',
        marginRight: '10px',
        [theme.breakpoints.up('md')]: {
            position:'absolute',
            right: '50px',
        }
    }
});

export default withStyles(styles)(AccountButton);