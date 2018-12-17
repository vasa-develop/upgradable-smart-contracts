var DispatcherStorage = artifacts.require("./DispatcherStorage.sol");

module.exports = function(deployer) {
   deployDispatcherStorage(deployer);
};

function deployDispatcherStorage(deployer) {

   const accounts = web3.eth.accounts;

   const wallet = accounts[9];


   return deployer.deploy(DispatcherStorage ,wallet);

}
