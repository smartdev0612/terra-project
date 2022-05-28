const { LCDClient, MnemonicKey } = require("@terra-money/terra.js");
require("dotenv").config();

const main = async () => {
    const terra = new LCDClient({
        URL: process.env.TERRA_NODE_URL,
        chainID: process.env.TERRA_CHAIN_ID,
    });
    
    const mk = new MnemonicKey({
        mnemonic: process.env.MNEMONIC,
    });

    // console.log(mk);

    // const blockInfo = await terra.tendermint.blockInfo();
    // console.log("Block Info: ", blockInfo);

    // const nodeInfo = await terra.tendermint.nodeInfo();
    // console.log("Node Info: ", nodeInfo);

    // const validatorSet = await terra.tendermint.validatorSet()
    // console.log("Validator Set: ", validatorSet);

    // const accountInfo = await terra.auth.accountInfo(mk);
    // console.log("Account Info: ", accountInfo);

    // const exchangeRates = await terra.oracle.exchangeRate();
    // console.log('Exchange Rate: ', exchangeRates);

    // const proposals = await terra.gov.proposals();
    // console.log('proposals: ', proposals);

};

main()
    .then(resp => {
        console.log(resp);
    })
    .catch(err => {
        console.error(err)
    });