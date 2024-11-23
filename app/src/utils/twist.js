import { Twisters } from 'twisters';
import './helper.js';
import _0x2ad460 from './logger.js';
import _0x2cc089 from '../core/t3rn.js';
import { privateKey } from '../../accounts/accounts.js';
class Twist {
  constructor() {
    this.twisters = new Twisters();
  }
  ["log"](_0x598297 = '', _0x450174 = '', _0x25dcd0 = new _0x2cc089(), _0x3c2c9b) {
    if (_0x3c2c9b == undefined) {
      _0x2ad460.info("Account " + privateKey.indexOf(_0x450174) + " - " + _0x598297);
      _0x3c2c9b = '-';
    }
    const _0x24e1a6 = _0x25dcd0.address ?? '-';
    const _0x14f9e5 = _0x25dcd0.balance ?? '-';
    this.twisters.put(_0x450174.id, {
      'text': "\n================= Account " + (privateKey.indexOf(_0x450174) + 0x1) + " =================\nAddress      : " + _0x24e1a6 + "\nBalance      : " + _0x14f9e5 + " ETH\n\nStatus : " + _0x598297 + "\nDelay : " + _0x3c2c9b + "\n=============================================="
    });
  }
  ['info'](_0x170579 = '') {
    this.twisters.put(0x2, {
      'text': "\n=============================================\nInfo : " + _0x170579 + "\n============================================="
    });
    return;
  }
  ["clearInfo"]() {
    this.twisters.remove(0x2);
  }
  ["clear"](_0x5c5662) {
    this.twisters.remove(_0x5c5662);
  }
  async ["clearAll"]() {
    await this.twisters.flush();
  }
}
export default new Twist();
