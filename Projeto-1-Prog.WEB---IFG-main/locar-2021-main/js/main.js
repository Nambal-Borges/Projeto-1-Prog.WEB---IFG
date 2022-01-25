

var url = "https://locar-pw1-2021.herokuapp.com/products";
let xhr = new XMLHttpRequest();


function buscarCarros(){
    f = false;
    req = undefined;
    xhr.open('GET', url, false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4){
            if (xhr.status == 200){
                //console.log(JSON.parse(xhr.responseText));
                f = true;
                req = JSON.parse(xhr.responseText);
            }
        }
    }
    xhr.send();
    return f ? req:[];
}

var veiculos = buscarCarros();



function setList(veiculos){

    var lista;
    var tudo;

    for (var key in veiculos){
      lista = '<div class="row">'+
                '<div class="card mb-3" style="max-width: 100%;">"'+
                    '<div class="row g-0"> '+
                        '<div class="col-md-4">'+
                            '<img src="'+ veiculos[key].imageUri+'" class="img-fluid rounded-start img-veiculo" alt="..."></img>'+
                        '</div>'+
                        '<div class="col-md-8">'+
                            '<div class="card-body">'+
                                '<h5 class="card-title">'+ veiculos[key].name+'</h5>'+
                                '<p class="card-text">'+ veiculos[key].description+'</p>'+
                               '<p class="card-text" style="text-align: right"><b>'+ formatValue( veiculos[key].price)+'</b></p>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>';
            tudo += lista; 
    }
    document.getElementById("vehicles-list").innerHTML = tudo;
}

function formatValue(value){
    var str = parseFloat(value).toFixed(2)
    str = str.replace('.',',');
    str = 'R$' + str;
    return str;
}




