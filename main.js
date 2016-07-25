const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;

require('electron-reload')(`${__dirname}/src/app/**/*.backend.js`, {
  electron: require('electron-prebuilt')
});

let win;

function createWindow() {
  win = new BrowserWindow({width: 1100, height: 800, icon: `${__dirname}/src/assets/icon/ts8.ico`});
  win.loadURL(`http://localhost:3000/`);

  console.info('started!')

  // Open the DevTools.
  //win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});