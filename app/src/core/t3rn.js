import { ethers } from 'ethers';
import { privateKey } from '../../accounts/accounts.js';
import { Helper } from '../utils/helper.js';
import _0x3b7729 from '../utils/logger.js';
import { Config } from '../../../config/config.js';
export default class T3rn {
  constructor(_0x4a5bda) {
    this.acc = _0x4a5bda;
    this.t34nContract = '0x8D86c3573928CE125f9b2df59918c383aa2B514D';
    this.provider = new ethers.JsonRpcProvider("https://sepolia.optimism.io/");
    this.explorerUrl = "https://optimism-sepolia.blockscout.com/";
    this.hexData = Config.OPTOARBRAWDATA;
  }
  async ['reinit'](_0x3a1083) {
    if (_0x3a1083 == "ARB") {
      this.provider = new ethers.JsonRpcProvider('https://arbitrum-sepolia.blockpi.network/v1/rpc/public');
      this.explorerUrl = 'https://sepolia.arbiscan.io/';
      this.hexData = Config.ARBTOOPRAWDATA;
    } else {
      this.provider = new ethers.JsonRpcProvider("https://sepolia.optimism.io/");
      this.explorerUrl = "https://optimism-sepolia.blockscout.com/";
      this.hexData = Config.OPTOARBRAWDATA;
    }
  }
  async ["connectWallet"]() {
    try {
      const _0x22cb04 = this.acc.replace(/^0x/, '');
      await Helper.delay(0x3e8, this.acc, "Connecting to Account : " + (privateKey.indexOf(this.acc) + 0x1), this);
      const _0xb1804 = Helper.determineType(_0x22cb04);
      _0x3b7729.info("Account Type : " + _0xb1804);
      if (_0xb1804 == "Secret Phrase") {
        this.wallet = new ethers.Wallet.fromPhrase(_0x22cb04, this.provider);
      } else {
        if (_0xb1804 == "Private Key") {
          this.wallet = new ethers.Wallet(_0x22cb04.trim(), this.provider);
        } else {
          throw Error("Invalid account Secret Phrase or Private Key");
        }
      }
      this.address = this.wallet.address;
      await Helper.delay(0x3e8, this.acc, "Wallet connected " + JSON.stringify(this.wallet.address), this);
    } catch (_0x4b5560) {
      throw _0x4b5560;
    }
  }
  async ["getBalance"](_0x49eabf = false) {
    try {
      if (!_0x49eabf) {
        await Helper.delay(0x1f4, this.acc, "Getting Wallet Balance of " + this.wallet.address, this);
      }
      const _0x47c5f4 = ethers.formatEther(await this.provider.getBalance(this.wallet.address));
      this.balance = _0x47c5f4;
      await Helper.delay(0x1f4, this.acc, "Balance updated", this);
    } catch (_0x4520fd) {
      throw _0x4520fd;
    }
  }
  async ["withdraw"]() {
    try {
      await Helper.delay(0x1f4, this.acc, "Try To Bridge From OP Sepolia " + this.wallet.address, this);
      const _0x339c91 = await this.provider.getTransactionCount(this.wallet.address, "latest");
      const _0x1789f9 = {
        'data': this.hexData,
        'to': this.t34nContract,
        'gasLimit': 0x1312d00,
        'gasPrice': ethers.parseUnits("0.1", "gwei"),
        'nonce': _0x339c91,
        'from': this.wallet.address,
        'value': ethers.parseEther(Config.SWAPAMOUNT.toString())
      };
      await this.executeTx(_0x1789f9);
    } catch (_0xe510dd) {
      throw _0xe510dd;
    }
  }
  async ["executeTx"](_0xce94ee) {
    try {
      await Helper.delay(0x1f4, this.acc, "Building TX...", this);
      const _0x216fa3 = await this.wallet.sendTransaction(_0xce94ee);
      _0x3b7729.info("-> Tx Executed : " + JSON.stringify(_0x216fa3));
      const _0x2ccb75 = await _0x216fa3.wait();
      _0x3b7729.info("-> Tx Confirmed and Finalizing: " + JSON.stringify(_0x2ccb75));
      await Helper.delay(0x1388, this.acc, "Tx Executed \n" + this.explorerUrl + "tx/" + _0x216fa3.hash, this);
      await this.getBalance(true);
    } catch (_0x4e8f86) {
      _0x3b7729.info("-> Tx ERROR: " + JSON.stringify(_0x4e8f86));
      await Helper.delay(0x1388, this.acc, "ERROR : " + _0x4e8f86.shortMessage, this);
    }
  }
}
