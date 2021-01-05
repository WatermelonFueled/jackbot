const { stopGamesExcept, runGame } = require('../gameUtil');
const { tapEnter, discordScreenShareShortcut } = require('../robotUtil');

const game = {
  name: 'Drawful 2',
  processName: 'Drawful 2.exe',
  execPath: '"C:\\Program Files (x86)\\Steam\\steamapps\\common\\Drawful 2\\Drawful 2.exe"',
  procedure: () => {
    Promise.delay(tapEnter, 2500)
      .delay(discordScreenShareShortcut, 4000)
      .delay(tapEnter, 11500)
      .delay(tapEnter, 4500)
  },
}

module.exports = {
  name: 'drawful 2',
  aliases: ['drawful 2', 'drawful2', 'draw2', 'draw 2', 'drawful', 'draw'],
  description: 'Play Drawful 2!',
  execute(msg) {
    stopGamesExcept(game);
    runGame(game, (runResult) => {
      if (runResult == 1) game.procedure();
    })
  }
}
