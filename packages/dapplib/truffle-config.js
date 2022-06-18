require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh spot toy note payment column gesture indoor equal gauge'; 
let testAccounts = [
"0x9ba1b5756079e18a7c8caebe30f13833a533fe5049b8639c3cf3f6b9fd331f0a",
"0xfbe6399a4d5a31d3739e84b159897f1bfd501ced5f5c0f371f502d5949d4313b",
"0x34565387daf9d4917aafd2bc52ce2808b2d0e1c5422cfbc50b2da8b778394fa2",
"0x4330def5ba70829aa77445a39c8e14f9142859f4ac01bdb363669c2ffce34a60",
"0x3421d0269f4b9ac69c0e0db927edb4d05f3d8a2abb44d961b8492e4deb2cbe4b",
"0xda4e391f252847ccebe430dd95c3d63aa4fc1e9416deb9fbd21825c56bcb0fe0",
"0x07fedf1b10be24bad7882e361bdb8651eeb6a9cd798764a9feb13fbae82f7747",
"0x0660582d2786e87cdec6d0b6fa8a31673711d8f10be83f62b2c1dbf319969445",
"0xaa31846a60da3f148a1163be3754b7e0ad0869ba1785bcb6b2ba1bce91c7fa7c",
"0x2ea0ee3744ea0e49b7cce249ef8e6c7d1a5ad0ed4d83607eb6a2c1c23941b1d1"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

