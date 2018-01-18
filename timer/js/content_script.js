(function(){

	var acesso = new Acesso(document.URL, new Date());
	
	setInterval(function(){ 
		if (!document.hidden) {
			chrome.storage.local.get(acesso.chave, function(result){
				if(result) {
					console.log(result[acesso.chave]);
					var tempo = (result[acesso.chave]? result[acesso.chave] : 0);
					if(tempo%3600 == 0 && tempo/3600 > 0) {
						alert("Você já navegou por "+(tempo/3600)+" hora(s) neste site!");
					}
					chrome.storage.local.set({[acesso.chave] : ++tempo});
				} 
			});				
		} 
	}, 1000);
})();

function Acesso(url, data) {
	this.chave = dataFormatada(data)+"-"+enderecoFormatado(url);
	
	function dataFormatada(data) {
		var dia = (""+data.getDate()).length == 2 ? data.getDate() : "0"+(data.getDate());
		var mes = (data.getMonth()+1).length == 2 ? data.getMonth()+1 : "0"+(data.getMonth()+1);
		var ano = data.getFullYear();
		return dia+"/"+mes+"/"+ano;
	}
	
	function enderecoFormatado(url){
		return url.split("/")[2];
	}
}




