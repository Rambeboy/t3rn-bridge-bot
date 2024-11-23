# T3RN BRIDGE BOT

**T3RN AIRDROP**

New Airdrops : **T3RN**

Register : [Here](https://bridge.t1rn.io/)

**SWAP AND EARN BRN**

## BOT FEATURE

- Multi Account Support
- Auto Swap Betwen OP > ARB OR ARB > OP

## PREREQUISITE

- Git
- Node JS
- OP Sepolia ETH BALANCE / ARB Sepolia ETH BALANCE Depends on config

## SETUP & CONFIGURE BOT

### LINUX & MAC OS

1. Clone project repository
   ```
   git clone https://github.com/Rambeboy/t3rn-bridge-bot.git && cd t3rn-bridge-bot
   ```
2. Install dependencies
   ```
   npm install
   ```
3. Copy accounts folder
   ```
   cp accounts/accounts_tmp.js accounts/accounts.js
   ```
4. Configure the accounts
   ```
   nano accounts/account.js
   ```
   and setup your accounts usig PK or Seed
5. Configure the config
   ```
   nano config/config.js
   ```
6. To start the app run 
   ```
   npm run start
   ```
   
### WINDOWS

1. Open your `Command Prompt` or `Power Shell`.

2. Clone project repository
   ```
   git clone https://github.com/Rambeboy/t3rn-bridge-bot.git && cd t3rn-bridge-bot
   ```

3. Install dependencies
   ```
   npm install
   ```

4. Navigate to `t3rn-bridge-bot` directory. 

5. Navigate to `accounts` directory and rename `accounts_tmp.js` to `accounts.js`.

6. Open `accounts.js` and setup your wallet. 

7.  Now back to the `t3rn-bridge-bot` folder

8.  Copy `config.js` and `accounts` folder to `app` folder

9.  To start the app open your `Command Prompt` or `Power Shell` again and run `node app/index.js`.

## UPDATE BOT

To update bot follow this step :
1. Run
   ```
   git pull
   ```
   or 
   ```
   git pull rebase
   ```
   If error run
   ```
   git stash && git pull
   ```
2. Run
   ```
   npm update
   ```

3. Start the bot.

## NOTE

You can configure amount to swap on config file

If you did'nt get BRN Point, change the config OP or ARB RAWDATA with yours. Where to get it ? do manual TX from ARB to OP or OP to ARB, and go to explorer and copy the Input Data as HEX.

## LICENSE

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
