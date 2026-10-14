import { app, BrowserWindow, dialog } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
import electronUpdater from 'electron-updater';
import './backend/server.js';

const { autoUpdater } = electronUpdater;

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



// Add this inside your existing BrowserWindow options:


// Reload Electron while developing.
try {
    const electronReload = require('electron-reload');

    electronReload(__dirname, {
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
        ignored: /frontend|node_modules|[/\\]\./
    });
} catch (error) {
    console.log('Electron reload is unavailable.');
}

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true
        },
        icon: path.join(__dirname, "favicon.ico")
    });

    mainWindow.setMenuBarVisibility(false);

    if (!app.isPackaged) {
        mainWindow.loadURL('http://localhost:5173');
    } else {
        mainWindow.loadFile(
            path.join(__dirname, './frontend/dist/index.html')
        );
    }
}

autoUpdater.checkForUpdatesAndNotify()

autoUpdater.on('update-downloaded', (info) => {
    dialog.showMessageBox({
        type: 'info',
        buttons: ['Restart', 'Later'],
        title: 'Application Update',
        message: `Version ${info.version} is ready`,
        detail: 'A new version has been downloaded. Restart to apply changes.'
    }).then((result) => {
        if (result.response === 0) {
            autoUpdater.quitAndInstall();
        }
    });
});

autoUpdater.on('error', (error) => {
    console.error('Update failed:', error);
});

app.whenReady().then(() => {
    createWindow();

    // Only check for updates in the installed EXE.
    if (app.isPackaged) {
        autoUpdater.checkForUpdatesAndNotify();
    }
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});