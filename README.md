# ETHWaterloo

API task for ETHWaterloo Participants 

# Task

- Facitilate interoperability between Metaverse (a Bitcoin based blockchain) and the Ethereum network (ERC 1973).

- Monitor a set of transactions for a unique address (e.g. MDouj5AsfVNDkyT2gCfMSMTJNVmUwXmd6i) for ETP from the Metaverse chain and make thoughtful use of ERC 1973 to mint tokens and create useful cryptoeconomic environments. 

# Example Architecture 

- You can use the Metaverse API explorer to query information pertaining to an address through a node.js server.

- Create corresponding Ethereum accounts for Metaverse accounts using web3.js and store the pairs in a data structure.

- Whitelist these Ethereum addresses using the function addMinters() in the ERC 1973 smart contract through your node.js code.    This will allow these Ethereum address to be participants in the network and mint ERC20 tokens.

- When new ETP is deposited to the Metaverse address, you can use the function trigger() in ERC 1973 to facitilate minting ERC20 tokens. 

- Create useful cryptoeconomic enviroments with the newly minted ERC20 tokens for ETP holders. This is up to you!

## Notes on ERC 1973

- The current algorithm allows the early participants in the network to receive more ERC20 rewards as the network grows. The early participants in the network will gain more than the later participants.

- You need to create an incentive environment for ETP address holders to join the token network created through ERC 1973. E.g the ERC20 could be redeemed for more ETP at a 1:10 ratio. 


# Reference Links

- Metaverse API (documentation): https://docs.mvs.org/api_v3/

- Metaverse API (recommended UI explorer): https://explorer.mvs.org/dev/api 

- ERC 1973: https://eips.ethereum.org/EIPS/eip-1973

- web3.js: https://github.com/ethereum/wiki/wiki/JavaScript-API

# Project Submissions

- https://ethwaterloo2.devpost.com/submissions


# Prize Pool 

- 2k CAD worth of DNA (Metaverse Dual Chain Network Architecture tokens)




