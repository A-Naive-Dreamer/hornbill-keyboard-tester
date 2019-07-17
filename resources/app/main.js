const { app, BrowserWindow } = require('electron')

var win

function createWindow() {
    win = new BrowserWindow({
        width: 1080,
        height: 720,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('./pages/index.html')

    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow)
