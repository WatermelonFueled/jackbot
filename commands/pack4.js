const { stopGamesExcept, runGame } = require('../gameUtil');
const { tapEnter, tapEsc, discordScreenShareShortcut, menuPack4 } = require('../robotUtil');

const game = {
  name: 'The Jackbox Party Pack 4',
  processName: 'The Jackbox Party Pack 4.exe',
  execPath: '"C:\\Program Files (x86)\\Steam\\steamapps\\common\\The Jackbox Party Pack 4\\The Jackbox Party Pack 4.exe"',
  gameIndex: [
    ['fibbage 3', 'fibbage3', 'fib3', 'fib', 'fibbage'],
    ['survive the internet', 'survive internet', 'survivetheinternet', 'surviveinternet', 'internet', 'survive'],
    ['monster seeking monster', 'monster', 'monster date', 'monster dating', 'monsterdate', 'monsterdating'],
    ['bracketeering', 'bracket', 'bracketeer', 'brack'],
    ['civic doodle', 'civicdoodle', 'civic', 'city doodle', 'citydoodle'],
  ],
  procedure: {
    start: (index) => {
      Promise.delay(tapEnter, 2500)
        .delay(discordScreenShareShortcut, 4000)
        .delay(tapEnter, 11500)
        .delay(() => { menuPack4(index) }, 5500)
        .delay(tapEnter, 8500)
    },
    change: (index) => {
      Promise.delay(tapEsc, 100)
        .delay(tapEnter, 1500)
        .delay(tapEsc, 3500)
        .delay(tapEsc, 200)
        .delay(tapEnter, 1500)
        .delay(() => { menuPack4(index) }, 8000)
        .delay(tapEnter, 8500)
    }
  },
}

module.exports = {
  name: 'pack4',
  aliases: game.gameIndex.flat(),
  description: 'Jackbox Party Pack 4',
  execute(msg, command) {
    stopGamesExcept(game);
    runGame(game, (runResult) => {
      console.debug(runResult);
      if (runResult == 0) return;

      const index = game.gameIndex.findIndex(aliases => aliases.includes(command));
      console.debug(index);
      if (index == -1) {
        console.error(`Invalid command ${command}`);
        msg.channel.send('There was an error while trying to execute that command');
        return;
      }

      if (runResult == 1) {
        game.procedure.start(index);
      } else if (runResult == 2) {
        game.procedure.change(index);
      }
    });
  }
}
