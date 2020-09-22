require('dotenv').config();
const { app, BrowserWindow, Menu, ipcMain, shell } = require('electron'),
    path = require('path'),
    os = require('os'),
    imagemin = require('imagemin'),
    imageminPngquant = require('imagemin-pngquant'),
    imageminMozjpeg = require('imagemin-mozjpeg'),
    slash = require('slash'),
    log = require('electron-log'),
    isDev = process.env.NODE_ENV === 'development',
    isMac = process.env.platform === 'darwin';

let mainWindow;
let aboutWindow;

function createMainWindow() {
    mainWindow = new BrowserWindow({
        title: 'ImageShrink',
        width: isDev ? 800 : 500,
        height: 600,
        icon: './assets/icons/Icon_256x256.png',
        resizable: isDev ? true : false,
        backgroundColor: 'white',
        webPreferences: {
            nodeIntegration: true
        }
    });

    if (isDev) {
        mainWindow.webContents.openDevTools();
    }

    mainWindow.loadURL(`file://${__dirname}/app/index.html`);
}

function createAboutWindow() {
    aboutWindow = new BrowserWindow({
        title: 'About ImageShrink',
        width: 300,
        height: 300,
        icon: './assets/icons/Icon_256x256.png',
        resizable: false,
        backgroundColor: 'white',
    });

    aboutWindow.loadURL(`file://${__dirname}/app/about.html`);
}

app.on('ready', () => {
    createMainWindow();

    const mainMenu = Menu.buildFromTemplate(menu);
    Menu.setApplicationMenu(mainMenu);

    mainWindow.on('ready', () => (mainWindow = null));
});
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
});

const menu = [
    ...(isMac ? [{
        label: app.name,
        submenu: [
            {
                label: 'About',
                click: createAboutWindow
            }
        ]
    }] : []),
    {
        role: 'fileMenu',
    },
    ...(!isMac ? [
        {
            label: 'Help',
            submenu: [
                {
                    label: 'About',
                    click: createAboutWindow
                }
            ]
        }
    ] : []),
    ...(isDev
        ? [
            {
                label: 'Developer',
                submenu: [
                    { role: 'reload' },
                    { role: 'forceReload' },
                    { type: 'separator' },
                    { role: 'toggleDevTools' },
                ],
            },
        ]
        : []),
];

ipcMain.on('image:minimize', (e, opt) => {
    const shrinkImage = async ({ imgPath, quality, destination }) => {
        try {
            const files = await imagemin(
                [ slash(imgPath) ],
                {   destination,
                        plugins: [
                            imageminMozjpeg({ quality }),
                            imageminPngquant({
                                quality: [ quality / 100, quality / 100 ]
                            })
                        ]
                }
            );

            log.info(files);
            shell.openPath(destination);
            mainWindow.webContents.send('image:done');
        } catch (err) {
            log.error(err);
        }
    };

    opt.destination = path.join(os.homedir(), 'imageshrink');
    shrinkImage(opt);
});
