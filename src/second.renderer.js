const BrowserWindow = require('electron').remote.BrowserWindow;
const path = require('path');

const newWindowBtn = document.getElementById('second-page');

newWindowBtn.addEventListener('click', function(event) {
    const modalPath = path.join('file://', __dirname, 'second.html');
    let win = new BrowserWindow({ width: 400, height: 320 });
    win.on('close', function(){
        win = null;
    });
    win.loadURL(modalPath);
    win.show();
});