const {ipcRenderer} = require('electron');

let btn = document.getElementById("btn");

btn.addEventListener('click',function(){
	var link = document.getElementById("link").value;
	
	if(link == "")
	{
		alert("Link boş bırakılamaz.","Hata !");
	}
	else
	{
		var id = null;
		
		if(link.indexOf("channel/") != -1)
		{
			id = link.substring((link.indexOf("channel/") + 8));
			
			if(id.indexOf("/") != -1)
			{
				id = id.substring(0,id.indexOf("/"));
			}
		}
		else if(link.indexOf("user/") != -1)
		{
			id = link.substring((link.indexOf("user/") + 5));
			
			if(id.indexOf("/") != -1)
			{
				id = id.substring(0,id.indexOf("/"));
			}
		}
		
		if(id != null)
		{
			ipcRenderer.send('tek-kanal-ekle',id);
		}
		else
		{
			alert("Geçersiz bir link girdiniz. Lütfen tekrar deneyiniz.","Hata !");
		}
	}
});