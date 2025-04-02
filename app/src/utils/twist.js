import { Twisters } from 'twisters';
import a5_0xcca3b1 from './logger.js';
import a5_0x529015 from '../core/core.js';
import { privateKey } from '../../accounts/accounts.js';
import { RPC } from '../core/network/rpc.js';
class Twist {
  constructor() {
    this.twisters = new Twisters();
  }
  async ["log"](_0x5a09b4 = '', _0x33bc5e = '', _0x35f1a8 = new a5_0x529015(), _0x16ba6f) {
    const _0x1e0522 = privateKey.indexOf(_0x33bc5e);
    if (_0x16ba6f == undefined) {
      a5_0xcca3b1.info("Account " + (_0x1e0522 + 0x1) + " - " + _0x5a09b4);
      _0x16ba6f = '-';
    }
    const _0x18cd42 = _0x35f1a8.address ?? '?';
    const _0xc3ba72 = _0x35f1a8.balance ?? {};
    const _0x37bf7a = _0xc3ba72.ETHARB ?? '?';
    const _0x99eb4a = _0xc3ba72.ETHBASE ?? '?';
    this.twisters.put(_0x33bc5e, {
      'text': "\n================== Account " + (_0x1e0522 + 0x1) + " =================\nAddress         : " + _0x18cd42 + "\nBalance         : - " + _0x37bf7a + " " + RPC.ARBRPC.SYMBOL + "\n                  - " + _0x99eb4a + " " + RPC.BASERPC.SYMBOL + "\nStatus : " + _0x5a09b4 + "\nDelay : " + _0x16ba6f + "\n=============================================="
    });
  }
  ['info'](_0x9339a0 = '') {
    this.twisters.put(0x2, {
      'text': "\n==============================================\nInfo : " + _0x9339a0 + "\n=============================================="
    });
    return;
  }
  ['clearInfo']() {
    this.twisters.remove(0x2);
  }
  ['clear'](_0x1d28ac) {
    this.twisters.remove(_0x1d28ac);
  }
}
export default new Twist();
