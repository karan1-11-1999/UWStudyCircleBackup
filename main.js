const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
    nodeIntegration: true
    }
  })

  win.loadFile('homepage.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

//app.on('active', signIn() =>{
    //if()
//})
//const signin.addEventListener('click',function(event){
    //const modalPath = path.join('file://', __dirname,'signin.html')
    //let win = new BrowserWindow({width: 400, height: 200})
    //win.on('close', function(){win = null})
    //win.loadURL(modalPath)
   // win.show()
//})