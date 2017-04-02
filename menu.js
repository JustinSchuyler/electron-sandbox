module.exports = (function() {
  const {app} = require('electron');

  let template = [];

  if (process.platform === 'darwin') {
    template.push({
      submenu: [
        {
          label: 'About',
          accelerator: 'CmdOrCtrl+A',
          role: 'about'
        },
        {
          type: 'separator'
        },
        {
          label: 'Quit',
          role: 'quit'
        }
      ]
    });
  }

  return template;
}());
