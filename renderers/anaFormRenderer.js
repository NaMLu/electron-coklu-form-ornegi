const {remote} = require('electron')
const {Menu, MenuItem} = remote
const {ipcRenderer} = require('electron')

const template = [
	{
		label: 'Kanal işlemleri',
		submenu: [
			{
				label: 'Kanal ekle',
				submenu: [
					{
						label: 'Tek kanal',
						click(){
							ipcRenderer.send('tek-kanal-ac','ac')
						}
					},
					{
						label: 'Toplu kanal',
						click(){
							ipcRenderer.send('toplu-kanal-ac','ac')
						}
					}
				]
			},
			{
				label: 'Grup işlemleri',
				click(){
					
				}
			}
		]
	}
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)