[Click here to see the project deployed in the Polygon Testnet](https://nft-marketplace-zebermvp.netlify.app)

### 1. Install Dependencies:
`$ npm install`
### 2. Starting the Local Development Blockchain
`$ npx hardhat node`

### 3. Connecting the Development Blockchain Accounts to Metamask
- Copy the private key of the addresses and import it to Metamask
- Connect your Metamask to the hardhat blockchain, 127.0.0.1:8545.

### 4. Migrating the Smart Contracts
`npx hardhat run src/backend/scripts/deploy.js --network ganache`

### 5. Running the Tests
`$ npx hardhat test`

### 6. Launching the Frontend
`$ npm run start`
