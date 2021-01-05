const { stopGamesExcept, runGame } = require('../gameUtil');
const { tapEnter, tapEsc, discordScreenShareShortcut, menuPack3 } = require('../robotUtil');

const game = {
  name: 'The Jackbox Party Pack 3',
  processName: 'The Jackbox Party Pack 3.exe',
  execPath: '"C:\\Program Files (x86)\\Steam\\steamapps\\common\\The Jackbox Party Pack 3\\The Jackbox Party Pack 3.exe"',
  gameIndex: [
    ['quip', 'quiplash', 'quiplash2', 'quiplash 2'],
    ['trivia', 'triviamurderparty', 'trivia murder party', 'trivia murder'],
    ['guess', 'guesspionage'],
    ['fakin', 'fakinit', 'fakin it', 'faking it', 'fakingit', 'fake', 'fakin\' it'],
    ['tee ko', 'teeko', 'tee k.o.', 'tee', 'tko', 'tee k o'],
  ],
  procedure: {
    start: (index) => {
      Promise.delay(tapEnter, 2500)
        .delay(discordScreenShareShortcut, 4000)
        .delay(tapEnter, 11500)
        .delay(() => { menuPack3(index) }, 5500)
        .delay(tapEnter, 8500)
    },
    change: (index) => {
      Promise.delay(tapEsc, 100)
        .delay(tapEnter, 1500)
        .delay(tapEsc, 3500)
        .delay(tapEsc, 100)
        .delay(tapEnter, 1500)
        .delay(() => { menuPack3(index) }, 8000)
        .delay(tapEnter, 8500)
    }
  },
}

module.exports = {
  name: 'pack3',
  aliases: game.gameIndex.flat(),
  description: 'Jackbox Party Pack 3',
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
