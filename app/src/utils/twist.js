import { Twisters } from 'twisters';
import _0x3fa977 from './logger.js';
import _0x1b0052 from '../core/core.js';
import { privateKey } from '../../../accounts/accounts.js';
import { RPC } from '../core/network/rpc.js';
class Twist {
  constructor() {
    this.twisters = new Twisters();
  }
  async ["log"](_0x12e530 = '', _0x522524 = '', _0x355761 = new _0x1b0052(), _0x39c697) {
    const _0x3658cc = privateKey.indexOf(_0x522524);
    if (_0x39c697 == undefined) {
      _0x3fa977.info("Account " + (_0x3658cc + 0x1) + " - " + _0x12e530);
      _0x39c697 = '-';
    }
    const _0x3cee06 = _0x355761.address ?? '-';
    const _0x426b14 = _0x355761.balance ?? {};
    const _0x499daf = _0x426b14.ETH ?? '-';
    this.twisters.put(_0x522524, {
      'text': "\n================= Account " + (_0x3658cc + 0x1) + " =================\nAddress         : " + _0x3cee06 + "\nBalance         : " + _0x499daf + " " + RPC.SYMBOL + "\n               \nStatus : " + _0x12e530 + "\nDelay  : " + _0x39c697 + "\n=============================================="
    });
  }
  ["info"](_0x2ae91a = '') {
    this.twisters.put(0x2, {
      'text': "\n==============================================\nInfo : " + _0x2ae91a + "\n============================================="
    });
    return;
  }
  ["clearInfo"]() {
    this.twisters.remove(0x2);
  }
  ["clear"](_0x579f34) {
    this.twisters.remove(_0x579f34);
  }
}
export default new Twist();
