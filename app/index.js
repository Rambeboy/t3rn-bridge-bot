import { privateKey } from './accounts/accounts.js';
import { Config } from './config/config.js';
import _0x1c0c28 from './src/core/t3rn.js';
import { Helper } from './src/utils/helper.js';
import _0x1391ba from './src/utils/logger.js';
import _0x284e2a from './src/utils/twist.js';
async function operation(_0x2cd118) {
  const _0x1da7d6 = new _0x1c0c28(_0x2cd118);
  const _0x4f4e73 = Config.network ?? 'OP';
  await Helper.delay(0xbb8, _0x2cd118, "Config Network is Set To " + _0x4f4e73 + " , Tx will bridge from " + _0x4f4e73, _0x1da7d6);
  if (_0x4f4e73 == 'OP') {
    await _0x1da7d6.connectWallet();
    await _0x1da7d6.getBalance();
    if (_0x1da7d6.balance < 0.02) {
      throw Error("Not Enought Balance");
    }
    for (const _0x21d311 of Array(0xa)) {
      await _0x1da7d6.withdraw();
    }
  } else {
    await _0x1da7d6.reinit('ARB');
    await _0x1da7d6.connectWallet();
    await _0x1da7d6.getBalance();
    if (_0x1da7d6.balance < 0.02) {
      throw Error("Not Enought Balance");
    }
    for (const _0x4ddac1 of Array(0xa)) {
      await _0x1da7d6.withdraw();
    }
  }
  await Helper.delay(0x7530, _0x2cd118, "Account processing complete, Delaying 30 Second before next operation", _0x1da7d6);
  await operation(_0x2cd118);
}
async function startBot() {
  return new Promise(async (_0x259324, _0x55263f) => {
    try {
      _0x1391ba.info("BOT STARTED");
      const _0x40ffc0 = [];
      for (const _0x5ed9ba of privateKey) {
        _0x40ffc0.push(await operation(_0x5ed9ba));
      }
      await Promise.all(_0x40ffc0);
      _0x259324();
    } catch (_0x24a4b9) {
      _0x1391ba.info("BOT STOPPED");
      _0x1391ba.error(JSON.stringify(_0x24a4b9));
      await _0x284e2a.clearAll();
      _0x55263f(_0x24a4b9);
    }
  });
}
(async () => {
  try {
    _0x1391ba.clear();
    _0x1391ba.info('');
    _0x1391ba.info("Application Started");
    console.log("T3RN BRIDGE BOT");
    console.log("Author : Nofan Rambe");
    console.log("Dont forget to run git pull to keep up to date");
    await startBot();
  } catch (_0x537a2e) {
    _0x284e2a.clear();
    _0x284e2a.clearInfo();
    console.log("Error During executing bot", _0x537a2e);
    await startBot();
  }
})();
