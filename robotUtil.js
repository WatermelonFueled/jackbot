const robot = require('robotjs');

module.exports = {
  discordScreenShareShortcut() {
    console.log('Screenshare shortcut activating');
    robot.keyTap('s', ['control', 'alt', 'shift']);
  },
  tapEnter() {
    robot.keyTap('enter');
  },
  tapEsc() {
    robot.keyTap('escape');
  },
  tapDown() {
    robot.keyTap('down');
  },
  menuPack3(index) {
    robot.moveMouse(180, 135 + (index * 52));
    robot.mouseClick();
  },
  menuPack4(index) {
    robot.moveMouse(175, 460 + (index * 42));
    robot.mouseClick();
  },
}
