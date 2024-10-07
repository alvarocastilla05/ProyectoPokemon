$(document).ready(function(){
    var urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get("pid"));
    var pokemonId = urlParams.get("pid");

    getDetallesPokemon()

    if(pokemonId == null){
        alert("No se ha recibido el ID del Pokemon");
    }else{
        function getDetallesPokemon(){
            var listadoPomemon = resp.results;
            listadoPomemon.forEach(function (pokemon) {
                var pokemonId = pokemon.url.split("/")[6];
                var template = `<!--Imagen y descripción-->
            <div class="container w-50 d-flex justify-content-center flex-wrap">
                <div class="w-100 d-flex justify-content-center">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${pokemonId}.png" style="width: 400px;" alt="imgPokemon" id="imgDetalles">
                </div>
                <div class="w-100">
                    <h3 class="text-white m-3 jockey-one-regular">
                        Desde que nace, crece alimentándose de los nutrientes que contiene la semilla de su lomo.
                    </h3>
                </div>
            </div>

            <!--Información-->
            <div class="container w-50 d-flex justify-content-center flex-wrap">
                <!--Nombre y número-->
                <div class="container w-100 d-flex flex-wrap justify-content-between jockey-one-regular" style="height: 15%">
                    <h1 class="text-white text-uppercase me-5" style="font-size: 60px;">Bulbasaur</h1>
                    <h1 class="text-white ms-5" style="font-size: 60px;">#0001</h1>
                </div>

                <!--Características-->
                <div class="container bg-white rounded-4" style="height: 85%">
                    <!--Categoría y Tipos-->
                    <div class="container d-flex flex-wrap p-4">
                        <div style="width: 45%;"><h2 class="jockey-one-regular" style="color: #707266">Pokémon Semilla</h2></div>
                        <div class="w-25">
                            <div class="px-3 me-2 rounded-5 fondoPlanta jockey-one-regular">
                                <h5 class="text-light text-center mt-1 p-1" id="planta">Planta</h5>
                            </div>
                        </div>
                        <div class="w-25">
                            <div class="px-3 ms-2 rounded-5 fondoVeneno jockey-one-regular">
                                <h5 class="text-light text-center mt-1 p-1" id="veneno">Veneno</h5>
                            </div>
                        </div>
                    </div>

                    <!--Peso, Altura y Habilidad-->
                    <div class="container d-flex flex-wrap justify-content-center jockey-one-regular">
                        <div style="width: 30%;"><h2><i class="bi bi-box-seam-fill"></i> Peso</h2></div>
                        <div style="width: 30%;"><h2><i class="bi bi-rulers"></i> Altura</h2></div>
                        <div style="width: 30%;"><h2><i class="bi bi-star-fill"></i> Habilidad</h2></div>
                    </div>
                    <div class="container d-flex flex-wrap justify-content-center gris">
                        <div style="width: 30%;"><h2>6,9 kg</h2></div>
                        <div style="width: 30%;"><h2>0,7 m</h2></div>
                        <div style="width: 30%;"><h2>Espesura</h2></div>
                    </div>

                    <div class="mt-5 jockey-one-regular">
                        <h2 class="ms-4 ps-3"><i class="bi bi-bar-chart-line-fill"></i> Estadísticas</h2>
                    </div>

                    <div class="container d-flex m-2 mt-3 mb-3">
                        <div class="w-50 mx-4 d-flex justify-content-center flex-column">
                            <div><h2 class="gris"><span class="jockey-one-regular planta">HP:</span> 78</h2></div>
                            <div><h2 class="gris"><span class="jockey-one-regular planta">ATK:</span> 84</h2></div>
                            <div><h2 class="gris"><span class="jockey-one-regular planta">DEF:</span> 78</h2></div>
                        </div>
                        <div class="w-50 mx-4 d-flex justify-content-center flex-column">
                            <div><h2 class="gris"><span class="jockey-one-regular planta">SP ATK:</span> 109</h2></div>
                            <div><h2 class="gris"><span class="jockey-one-regular planta">SP DEF:</span> 85</h2></div>
                            <div><h2 class="gris"><span class="jockey-one-regular planta">SPD:</span> 100</h2></div>
                        </div>
                    </div>

                </div>
            </div>`;
                $("#data-content").append(template);
            });
        }
    }
});
          
        
      
