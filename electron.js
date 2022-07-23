require = require('esm')(module);

const path = require('path');

const { app, BrowserWindow } = require('electron');

// const path = require('path');
const isDev = require('electron-is-dev');
const server = require('./server');
// const { appendFile } = require('fs');


// require('@electron/remote/main').initialize();
function createWindow() {
  // const mainScreen = screen.getPrimaryDisplay().size

  // Create the browser window.
  const win = new BrowserWindow({
    center:true,
    // width: mainScreen.width,
    // height:mainScreen.height,
    // height: 600,
    // webPreferences: {
    //   nodeIntegration: true,
    //   enableRemoteModule: true,
    // },
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  win.setMenuBarVisibility(false);

  win.loadURL('http://localhost:5876');
}

app.whenReady().then(()=>server.startApp().then(()=>createWindow()))

// app.on('ready',server.startApp().then(()=>createWindow()));

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
