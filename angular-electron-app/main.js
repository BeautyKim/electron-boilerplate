const {app, BrowserWindow  } = require('electron');
const url = require('url');
const path = require('path');



function onReady () {
  win = new BrowserWindow({
    width: 500,
    height: 300,
    resizable: false,
    autoHideMenuBar: true,
  });
  win.loadURL(url.format({
    pathname: path.join(
      __dirname,
      'dist/angular-electron-app/index.html'),
    protocol: 'file:',
    slashes: true
  }))
}

app.on('ready', onReady);
