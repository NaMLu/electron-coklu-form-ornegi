const {app, BrowserWindow} = require('electron')
const {ipcMain} = require('electron')

let anaForm
let tekKanalForm
let topluKanalForm

function anaFormOlustur () {
  anaForm = new BrowserWindow({width: 800, height: 600})
  anaForm.loadURL(`file://${__dirname}/index.html`)

  anaForm.on('closed', () => {
    anaForm = null
  })
}

function tekKanalFormOlustur()
{
	tekKanalForm = new BrowserWindow({width:390, height:100,resizable: false})
	tekKanalForm.loadURL(`file://${__dirname}/tekKanal.html`)
	tekKanalForm.setMenu(null)
	
	tekKanalForm.on('closed',() => {
		tekKanalForm = null
	})
}

function topluKanalFormOlustur()
{
	topluKanalForm = new BrowserWindow({ width:390, height:300,resizable: false })
	topluKanalForm.loadURL(`file://${__dirname}/topluKanal.html`)
	topluKanalForm.setMenu(null)
	
	topluKanalForm.on('closed',() => {
		topluKanalForm = null
	})
}

app.on('ready', anaFormOlustur)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    anaFormOlustur()
  }
})

ipcMain.on('tek-kanal-ac', (event,arg) => {
	if(tekKanalForm == null)
	{
		tekKanalFormOlustur()
	}
})

ipcMain.on('toplu-kanal-ac', (event,arg) => {
	if(topluKanalForm == null)
	{
		topluKanalFormOlustur()
	}
})
