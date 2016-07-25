const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;

let win;

function createWindow() {
  win = new BrowserWindow({width: 1100, height: 800, icon: `${__dirname}/src/assets/icon/ts8.ico`});
  //win.loadURL(`file://${__dirname}/index.html`);
  win.loadURL(`http://localhost:3000/`);

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