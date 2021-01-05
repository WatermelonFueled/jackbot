const exec = require('child_process').exec;

const gameNames = [
  'drawful 2',
  'the jackbox party pack 3',
  'the jackbox party pack 4',
];

module.exports = {
  runGame(game, callback) {
    exec('tasklist', (error, stdout, stderr) => {
      if (error) {
        console.error(error);
        callback(0);
        return;
      }
      const lines = stdout.split(/\r\n|\n\r|\n|\r/);
      if (lines.some((line) => line.trim().startsWith(game.processName.slice(0,25)))) {
        console.log(`${game.name} is already running`);
        callback(2);
      } else {
        console.log(`Starting ${game.name}`);
        exec(`& ${game.execPath}`, { shell: 'powershell' });
        callback(1);
      }
    });
  },
  stopGamesExcept(game) {
    gameNames.forEach((name) => {
      if (game.name.toLowerCase() == name) return;
      try {
        console.log(`Attempting Stop-Process of ${name}`);
        exec(`Stop-Process -Name '${name}'`, { shell: 'powershell' });
      } catch (error) {
        console.error(error);
      }
    })
  }
}
