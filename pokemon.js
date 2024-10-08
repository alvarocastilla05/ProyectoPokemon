$(document).ready(function () {

    getPokemonListV1();

    function getPokemonListV1() {
      $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon?limit=200",
        method: "GET",
      }).done(function (resp) {
        let listadoPomemon = resp.results;
        listadoPomemon.forEach(function (pokemon) {

            let pokemonId = pokemon.url.split("/")[6];

            let tipo1 = pokemon.url.forms.name;

            switch(tipo1){
              case "normal":
                  $(".tipoDominante").attr("style", "background-color: rgba(170,166,127,.4)");
                  break;

              case "fighting":
                  $(".tipoDominante").attr("style", "background-color: #C12239");
                  break;

              case "flying":
                  $(".tipoDominante").attr("style", "background-color: #A891EC");
                  break;

              case "ground":
                  $(".tipoDominante").attr("style", "background-color: #DEC16B");
                  break;

              case "poison":
                  $(".tipoDominante").attr("style", "background-color: #A43E9E");
                  break;
              
              case "rock":
                  $(".tipoDominante").attr("style", "background-color: #B69E31");
                  break; 

              case "bug":
                  $(".tipoDominante").attr("style", "background-color: #A7B723");
                  break; 

              case "ghost":
                  $(".tipoDominante").attr("style", "background-color: #70559B");
                  break; 

              case "steel":
                  $(".tipoDominante").attr("style", "background-color: #B7B9D0");
                  break; 

              case "fire":
                  $(".tipoDominante").attr("style", "background-color: #F57D31");
                  break;
              
              case "water":
                  $(".tipoDominante").attr("style", "background-color: #6493EB");
                  break;

              case "grass":
                  $(".tipoDominante").attr("style", "background-color: rgba(116,203,72,.4)");
                  break;

              case "electric":
                  $(".tipoDominante").attr("style", "background-color: #F9CF30");
                  break;

              case "psychic":
                  $(".tipoDominante").attr("style", "background-color: #FB5584");
                  break;

              case "ice":
                  $(".tipoDominante").attr("style", "background-color: #9AD6DF");
                  break;

              case "dragon":
                  $(".tipoDominante").attr("style", "background-color: #7037FF");
                  break;

              case "dark":
                  $(".tipoDominante").attr("style", "background-color: #75574C");
                  break;

              case "fairy":
                  $(".tipoDominante").attr("style", "background-color: #E69EAC");
                  break;
              
              default:
                  $(".tipoDominante").attr("style", "background-color: rgba(116,203,72,.4)");
          }


            let template = `<div class="card border-0 jockey-one-regular mx-3 my-4" style="width: 290px;">
        
                <!--Parte superior-->
                <div class="tipoDominante border-5 rounded-4 bordeCaja sombreado">
                    <a href="./detalles.html?pid=${pokemonId}"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${pokemonId}.png" class="card-img-top rounded-4" alt="imgPokemon" id="imgCard"></a>
                </div>

                <!--Parte inferior-->
                <div class="container d-flex justify-content-between card-body rounded-4 mt-1 px-2 fondoNegroEstandar sombreado">
                    <!--Número y nombre-->
                    <div class="ms-2">
                        <p class="card-number m-0 mb-1" style="color: #C9C9C9">#${pokemonId}</p>
                        <h4 class="card-title blanco m-0 text-capitalize">${pokemon.name}</h4>
                    </div>
                    <!--Tipos-->
                    <div class="me-2" style="width: 35%;">
                        <div class="px-3 rounded-5 fondoPlanta">
                            <p class="text-light text-center mb-2" id="planta">Planta</p>
                        </div>
                        <div class="px-3 rounded-5 fondoVeneno">
                            <p class="text-light text-center mt-1 mb-0" id="veneno">Veneno</p>
                        </div> 
                    </div>
                </div>

            </div>`;
            $("#data-content").append(template);
        });
      });
    }
});