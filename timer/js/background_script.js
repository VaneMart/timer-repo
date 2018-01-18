chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	
		chrome.storage.local.get(null, function(result) {
			var chaves = Object.keys(result);
			var valores = Object.values(result);
			var resposta = [];
			var data = request.data;
			for(var i = 0; i < chaves.length; i++){
				if(chaves[i].split("-")[0] == data) {
					var s = valores[i]%60;
					var m = parseInt(valores[i]/60)%60;
					var h = parseInt(valores[i]/60/60)%60;
					resposta.push({data: chaves[i].split("-")[0], site: chaves[i].split("-")[1], tempo: valores[i], horas: formatar(h)+':'+formatar(m)+':'+formatar(s)});
				}
			}
			sendResponse(resposta);	
			chrome.tabs.create({"url": request.grafico+".html?dados="+JSON.stringify(resposta), "selected":true});
		});
	return true;
});

function formatar(tempo){
	return ((''+tempo).length == 2 ? tempo : "0"+tempo);
}