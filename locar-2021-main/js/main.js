var url = "https://locar-pw1-2021.herokuapp.com/products";
let xhr = new XMLHttpRequest();

function buscarCarros(){
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4){
            if (xhr.status == 200){
                var veiculo = JSON.parse(xhr.responseText);
                for (var key in veiculos){
                    console.log(veiculos[key].name)
                }
                console.log(veiculos);
            }
        }
    }
    xhr.send();
}

function setList(veiculos){

    var lista = "";
    for (var key in veiculos){
      lista += <div class="row">
                <div class="card mb-3" style="max-width: 100%;\">"
                    <div class="row g-0"> 
                        <div class="col-md-4">
                            <img src="+ veiculos[key].image" class="img-fluid rounded-start img-veiculo" alt="..."></img>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Volkswagen Amarok 3.0 V6 CD Highline 4x4 2019</h5>
                                <p class="card-text">Diesel, Final da placa 0, airbag motorista, alarme, freios ABS, airbag passageiro, airbag lateral</p>
                                <p class="card-text" style="text-align: right"><b>R$ 215.000,00</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    }
    document.getElementById("vehicles-list").innerHTML = lista;
}

buscarCarros();
