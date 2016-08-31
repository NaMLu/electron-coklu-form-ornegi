const {ipcRenderer} = require('electron');

let btn = document.getElementById("btn");

btn.addEventListener('click',function(){
	var linkler = document.getElementById("linkler").value;
	
	if(linkler == "")
	{
		alert("Linkler alanı boş bırakılamaz.","Hata !");
	}
	else
	{
		alert(linkler,"Linkler verisi");
	}
});