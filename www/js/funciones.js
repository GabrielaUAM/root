
	



	
function llamaContenido(URL,Method){
	var msg = '';
	xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function(){
		if (xmlHttp.readyState==4 && xmlHttp.status==200){
			msg = xmlHttp.responseText;
			}
		}
	xmlHttp.open(Method, URL, false); 
	//xmlHttp.overrideMimeType('text/xml; charset=utf-8');
	xmlHttp.send(null);
	return(msg);
	}

function cargarContenido(DIV,URL){
	var msg = llamaContenido(URL,"GET");
	document.getElementById(DIV).innerHTML = msg;
	return(msg);
	}
	
