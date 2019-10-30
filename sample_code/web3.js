/**
 * This file will create multiple 'n' accounts (100, 500, 1000) using the library ethereumjs-wallet.
 * Process is - create mnemonic, turn it into seed and create child public-private key pairs.
 * Dump all the public-private keys into a JSON file
 * Deliver ether to these accounts
 * This sample code includes information on a) How to create accounts with Private-Public Key pairs b) How to sign transactions with private keys for accounts
 */

//Ask user to input number of accounts to be created 
//Create accounts and send ETHs to them (0.05 default)
require('dotenv').config();
const Web3 = require('web3');
const providerURL = process.env.PROVIDER_URL;    //URL address
const web3 = new Web3(new Web3.providers.HttpProvider(providerURL));
const bip39 = require('bip39');
const etherHDkey = require('ethereumjs-wallet/hdkey');
const EthereumTx = require('ethereumjs-tx');
let fs = require("fs");
const privateKey = Buffer.from(process.env.PRIVATE_KEY,'hex');     //Private Key
const fromAddress = '';    //This is the account that send money
var tx;
var rawTx;
var serializedTx;
var signedTx;
var value;
var mnemonic;
var pubKey;
var priKey;
var ethSent = "0.05";    //Number of ETHs wanted to send
var number;
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

async function f(nonce,Json) {
  try {
    mnemonic = await bip39.generateMnemonic();
    let seed = await bip39.mnemonicToSeed(mnemonic);
    let HDwallet = etherHDkey.fromMasterSeed(seed);
    let zeroWallet = HDwallet.derivePath("m’/44’/1’/0’/0").getWallet();
    console.log(`Address: ${zeroWallet.getAddressString()}`);
    let sendAddress = await zeroWallet.getAddressString();
    console.log(`Private Key: ${zeroWallet.getPrivateKeyString()}`) ;
    console.log("--------------------------------------------");
    //send ether to the created wallets
    value = web3.utils.toHex(web3.utils.toWei(ethSent, 'ether'));
    //var block = await web3.eth.getBlock("latest"); , block.gasLimit
    Json.PublicKey = sendAddress;
    Json.PrivateKey = zeroWallet.getPrivateKeyString();
    rawTx = {
      nonce: web3.utils.toHex(nonce),
      gasPrice: web3.utils.toHex(web3.utils.toWei('50', 'gwei')),
      gasLimit: web3.utils.toHex(21000),
      to: sendAddress,
      value: value
    }
    //Sign the transaction
    tx = new EthereumTx(rawTx);
    tx.sign(privateKey);
    serializedTx = tx.serialize();
    signedTx = '0x' + serializedTx.toString('hex');
    web3.eth.sendSignedTransaction(signedTx, (err, txHash) => {
      // if (err) {
      //   console.error('SEND ERROR: ', nonce, err)
      // }
      //   console.log('txHash:', txHash);
    });
  }catch(error) {
    console.error('caught error :', error);
  }        
}

async function g() {
  try {
    var i;
    var storedList = {};
    var Json;
    let txCount = 0
    for (i = 0; i <= number; i++) {   
      console.log("ID No.",i)
      Json = {
          "id" : i,
          "nmemonic" : mnemonic,
          "PublicKey" : pubKey,
          "PrivateKey" : priKey,
          "PriceFeed" : "",
          "ETH_Amount" : ethSent,
          "KCT_Amount" : 0,
          "PostTimes" : 0,
          "StakeStatus" : true,
          "UnstakeStatus" : false
      };
      if (i === 0) {
        txCount = await web3.eth.getTransactionCount(fromAddress)
      }
      else {
        txCount++
      }
      await f(txCount, Json)
      if (i == number){
          break;
      }else{
          storedList[i] = Json;
      }
    }
    //Write to file
    fs.writeFile("accountStorage.json", JSON.stringify(storedList), function (err) {
      if (err) throw err;
    });
    console.log("Ignore the last set of Public Key and Private Key. They are not counted");
  } catch(err) {
    console.error(err);
  }
}

function main(){
  readline.question("Please enter the number of accounts you wish to create\n", (accountNumber) => {
    number = parseInt(accountNumber);
    if (!isNaN(number)){
      console.log("\nCreating...")
      g();
      readline.close();
    }else{
      console.log("Please enter valid integer");
      console.log("----------");
      main();
    }
  });
}
main();

