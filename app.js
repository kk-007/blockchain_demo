const Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

const Config = require('./ABI');
var contract = new web3.eth.Contract(Config.ABI,Config.address);

web3.eth.getAccounts()
    .then(fetchedAccounts=>{
        var acc=fetchedAccounts[0];
        return contract.methods.set('keval').send({from:acc});
    }).then(data=>{
        contract.methods.get().call()
            .then(data=>{
                console.log(data);
            })
            .catch(err=>{
                console.log(err);
            });
    }).catch(err=>{
        console.log("Error  : "+err);
    });