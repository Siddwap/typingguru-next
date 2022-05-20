require = require('esm')(module);

const path = require('path');

const { app, BrowserWindow } = require('electron');

// const path = require('path');
const isDev = require('electron-is-dev');
const server = require('./server');
// const { appendFile } = require('fs');

server.startApp();

// require('@electron/remote/main').initialize();

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    // webPreferences: {
    //   nodeIntegration: true,
    //   enableRemoteModule: true,
    // },
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  win.setMenuBarVisibility(false);

  win.loadURL(
    isDev
      ? 'http://localhost:5876'
      : // : `file://${path.join(__dirname, '../build/index.html')}`
        `http://localhost:5876`
  );
}

app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
