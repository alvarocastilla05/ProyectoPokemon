$(document).ready(function () {
    getPokemonListV1();
  
    function getPokemonListV1() {
      $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon",
        method: "GET",
      }).done(function (resp) {
        var listadoPomemon = resp.results;
        listadoPomemon.forEach(function (pokemon) {
            var pokemonId = pokemon.url.split("/")[6];
            var template = `<div class="card border-0 jockey-one-regular mx-3 my-4" style="width: 290px;">
        
                <!--Parte superior-->
                <div class="border-5 rounded-4 bordeCaja sombreado" style="background-color: rgba(116,203,72,.4);">
                    <a href="./detalles.html?pid=${pokemonId}"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${pokemonId}.png" class="card-img-top rounded-4" alt="imgPokemon" id="imgCard"></a>
                </div>

                <!--Parte inferior-->
                <div class="container d-flex justify-content-between card-body rounded-4 mt-1 px-2 fondoNegroEstandar sombreado">
                    <!--Número y nombre-->
                    <div class="ms-2">
                        <p class="card-number m-0 mb-1" style="color: #C9C9C9">#00${pokemonId}</p>
                        <h4 class="card-title blanco m-0 text-capitalize">${pokemon.name}</h4>
                    </div>
                </div>

            </div>`;
            $("#data-content").append(template);
        });
      });
    }
  });