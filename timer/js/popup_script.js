
document.getElementById('pizza').onclick = function(){	
	chrome.runtime.sendMessage({data: dataFormatada(new Date()), grafico: 'pizza'}, function(response) {
		console.log('Resposta: '+JSON.stringify(response));
	});
};

document.getElementById('barra').onclick = function(){	
	chrome.runtime.sendMessage({data: dataFormatada(new Date()), grafico: 'barra'}, function(response) {
		console.log('Resposta: '+JSON.stringify(response));
	});	
};

document.getElementById('tabela').onclick = function(){	
	chrome.runtime.sendMessage({data: dataFormatada(new Date()), grafico: 'tabela'}, function(response) {
		console.log('Resposta: '+JSON.stringify(response));
	});		
};

function dataFormatada(data) {
	var dia = (""+data.getDate()).length == 2 ? data.getDate() : "0"+(data.getDate());
	var mes = (data.getMonth()+1).length == 2 ? data.getMonth()+1 : "0"+(data.getMonth()+1);
	var ano = data.getFullYear();
	return dia+"/"+mes+"/"+ano;
}