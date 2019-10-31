# ETHWaterloo

API task for ETHWaterloo Participants 

# Task

Facitilate interoperability between Metaverse (a Bitcoin based blockchain) and the Ethereum network (ERC 1973).

# Architecture 

- Use the Metaverse API explorer to query information pertaining to avatars & certificates with the 'request URL' through server side code (e.g. nodejs or python).

- Create corresponding Ethereum accounts for Metaverse accounts using web3.js and store the pairs in a data structure.

- Whitelist these Ethereum addresses using the function **addMinters()** in the ERC 1973 smart contract through your server side code by signing transactions with corresponding private keys or mnemonic. Suggested **npm packages include - bip39, ethereumjs-wallet/hdkey, ethereumjs-tx**. This whitelisiting will allow these ETH addresses to receive ERC20 token rewards.

- You can then use the function **trigger()** in ERC 1973 to facitilate minting ERC20 tokens by any of the above whitelisted address. Rewards can be withdrawn through the **withdraw()** function. Create useful cryptoeconomic enviroments with the newly minted ERC20 tokens for metaverse avatar or certificate holders. This is up to you!

## Notes on Metaverse API Explorer 

- Core Metaverse API Block Explorer link: https://explorer.mvs.org/dev/api 

- Metaverse Avatars: click on **avatar : Avatar operations** the **GET/avatars** will give you a list of all available avatars in the Metaverse blockchain. For more information on avatars visit: https://medium.com/metaverse-blockchain/metaverse-explained-avatars-57be355d42d4


- Metaverse Certificates:  click on **cert : Cert operations** the **GET/certs** will give you a list of all available certificates in the Metaverse blockchain. For more information on certificates visit: https://medium.com/metaverse-blockchain/metaverse-explained-certificates-b84767d1ae8f

- use the **Request URL** through your server side code to gather information pertaining to the addresses. 


## Notes on ERC 1973

- The current algorithm allows the early participants in the network to receive more ERC20 rewards compared to the ones that join later. Hence, whitelist the metaverse addresses according to the historical timestamp or blocknumber. 

- You need to create an incentive environment for Metaverse avatar or certificate holders to join the token network created through ERC 1973. E.g the ERC20 could be redeemed for more ETP at a 1:10 ratio for avatar holders, different certificate holders (domain,naming) could receive ETP or DNA in exchange for the ERC20 tokens according to a hierarchy. This will be more of a bussines case write-up rather than technical implementation. 

- **_blockFreezeInterval** is to block ERC20 tokens coming into the economy for a certain period of time so that the network is not susceptible to DDoS. If this is confusing, you can set it to **0** in the constructor.

# Reference Links

- ERC 1973: https://eips.ethereum.org/EIPS/eip-1973

- web3.js: https://github.com/ethereum/wiki/wiki/JavaScript-API, https://web3js.readthedocs.io/en/v1.2.2/

- npm packages: https://www.npmjs.com/package/ethereumjs-tx, https://www.npmjs.com/package/bip39, https://www.npmjs.com/package/ethereumjs-wallet

- ERC 1973 Project References: https://github.com/yesbit/ERC1973-Projects/pulls

# Project Submissions

- https://ethwaterloo2.devpost.com/submissions

# Prize Pool 

- 2k CAD worth of DNA (Metaverse Dual Chain Network Architecture tokens)

# Company Links

- Metaverse: https://mvs.org/

- KrawlCat: https://krawlcat.com/

- ERC1973 Alliance: http://1973alliance.com



