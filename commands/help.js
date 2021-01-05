require('dotenv').config();
const { PREFIX } = process.env;

module.exports = {
  name: 'help',
  aliases: ['help', 'h'],
  description: 'Get help with Jackbot.',
  execute(msg) {
    msg.channel.send(`${PREFIX}help
    
Commands (and aliases) are detected with prefix '${PREFIX}':
    - help (h)
    - Drawful 2 (drawful2, draw2, draw 2, drawful, draw)
    - Quiplash 2 (quiplash2, quiplash, quip)
    - Trivia Murder Party (triviamurderparty, trivia, trivia murder)
    - Guesspionage (guess)
    - Fakin' it (fakinit, faking it, fakin, faking it, fakingit, fake)
    - Tee K.O. (tee ko, teeko, tee, tko, tee k o)
    - Fibbage 3 (fibbage3, fib3, fib, fibbage)
    - Survive the Internet (survivetheinternet, survive internet, surviveinternet, survive, internet)
    - Monster Seeking Monster (monster, monster date, monster dating, monsterdate, monsterdating)
    - Bracketeering (bracket, bracketeer, brack)
    - Civic Doodle (civicdoodle, civic, city doodle, citydoodle)
    
Jackbot commands will only work in this channel. Also, you must be in the Jackbot voice channel for commands to be accepted.

    `);
  }
}
