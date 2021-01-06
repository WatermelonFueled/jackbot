# jackbot
Discord server Jackbox hosting

Must create a file called `.env` with the following variables:
```
BOTTOKEN=YourBotTokenFromDiscord
PREFIX=ThePrefixToTheCommandsYouWishToUse
VOICECHANNEL=ChannelIdOfTheVoiceChannelThatHostWillBeOn
TEXTCHANNEL=ChannelIdOfTheTextChannelToListenForCommands
HOSTID=UserIdOfHost
```

### Currently Supports
- Drawful 2
- Party Pack 3
  - Quiplash 2
  - Trivia Murder Party
  - Guesspionage
  - Fakin' it
  - Tee K.O.
- Party Pack 4
  - Fibbage 3
  - Survive the Internet
  - Monster Seeking Monster
  - Bracketeering
  - Civic Doodle

### Current Limitations
- Games must be installed on C: drive in standard Steam library
- Games must run fullscreen at 1080p
- Host user must set the Discord shortcut for Toggle Screen Share to be `ctrl+shift+alt+S`

## Usage
After installing all packages, run with `node index.js` on computer with host
### Commands and Aliases  
Commands are not case-sensitive  
Use with prefix (ie. if prefix was `;` then `;help`)  
Can only be used in the set text channel and by user currently in the set voice channel
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

