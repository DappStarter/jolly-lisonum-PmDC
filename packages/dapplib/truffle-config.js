require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture strategy cruise soap universe install hat army giant'; 
let testAccounts = [
"0xd335eab7ec02bea06750d42f8e8265cd01e691cda11cf13685d41251c998360c",
"0x3f5f16815363e2fdc92472b76dd3108a2d7f60c38f34e53c1054081683a0c664",
"0x7364e5c7bbe5d0dd2fdee9196d726e3109492604708a24de598f3c498dbbdd1a",
"0xecb1d750ef3da5e48ea5d8a77cace68090b19340de6b50c8dd5e3b53e5761788",
"0xb4dc1983d8825bba5550740dd65adb0bcfc0dbc4c3e75ec2f530153177cc2a12",
"0x05b8c97a928531a4429aecf66404d97c73332f0a12e2b836650e087561b0b12d",
"0x8c52178047fbb6718c369759c41a747cba2da14ca1deea27e07fc018fc17456f",
"0x1b36a3de18485c8506eeb6eced38a26c65884f1dbe5e82fa3c981adc50bfe10c",
"0xa65a2bc80ba32f9ac3345005f7e6d642b36bd23dff90c6b29516cf8135625519",
"0x197a2086a8381c504ee7e46eec4d09e94e7a76efc113a6ee1c960cd5f7ec91ed"
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

