$(document).ready(function(){
    let urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get("pid"));
    let pokemonId = urlParams.get("pid");

    if(pokemonId == null){
        alert("No se ha recibido el ID del Pokemon");
    }else{

        getDetallesPokemon(pokemonId);
        getSpeciesDetalles(pokemonId);

        function getDetallesPokemon(pokemonId){
            $.ajax({
                url: `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
                method: "GET",
            }).done(function (datosAPI) {
            
                getImagen();
                getNombreNumero();
                getTipo1();
                getTipo2();
                getPesoAlturaHabilidad();
                getEstadisticas();

                cambiarPaletaColores();
                
                function getImagen(){
                    let imagen = datosAPI.sprites.front_default;

                    let template = `<img id="imagen" src="${imagen}" style="width: 400px;" alt="imgPokemon">`

                    $("#imagen").append(template);
                }

                function getNombreNumero(){
                    let nombre = datosAPI.forms[0].name;
                    let numero = datosAPI.id;

                    let template = `<h1 id="nombre" class="text-white text-uppercase me-5" style="font-size: 60px;">${nombre}</h1>
                        <h1 id="numero" class="text-white ms-5" style="font-size: 60px;">#${numero}</h1>`
                    
                    $("#nombreNumero").append(template);
                }

                function getTipo1(){
                    let tipo1 = datosAPI.types[0].type.name;

                    let template = `<div class="px-3 me-2 rounded-5 primerTipo fondoPlanta jockey-one-regular">
                                        <h5 class="text-light text-center mt-1 p-1 text-capitalize">${tipo1}</h5>
                                    </div>`
                    
                    $("#tipo1").append(template);
                }

                function getTipo2(){

                    if(datosAPI.types.length > 1){
                        let tipo2 = datosAPI.types[1].type.name;

                        let template = `<div class="px-3 ms-2 rounded-5 segundoTipo fondoVeneno jockey-one-regular">
                                            <h5 class="text-light text-center mt-1 p-1 text-capitalize">${tipo2}</h5>
                                        </div>`

                        $("#tipo2").append(template);
                    }else{
                        let template = ``;

                        $("#tipo2").append(template);
                    }
                }

                function getPesoAlturaHabilidad(){
                    let peso = datosAPI.weight;
                    let altura = datosAPI.height;
                    let habilidad = datosAPI.abilities[0].ability.name;

                    let template = `<div style="width: 30%;"><h2>${peso/10} kg</h2></div>
                            <div style="width: 30%;"><h2>${altura/10} m</h2></div>
                            <div style="width: 30%;"><h2 class="text-capitalize">${habilidad}</h2></div>`

                    $("#pesoAlturaHabilidad").append(template);
                }

                function getEstadisticas(){
                    let hp = datosAPI.stats[0].base_stat;
                    let atk = datosAPI.stats[1].base_stat;
                    let def = datosAPI.stats[2].base_stat;
                    let spAtk = datosAPI.stats[3].base_stat;
                    let spDef = datosAPI.stats[4].base_stat;
                    let spd = datosAPI.stats[5].base_stat;

                    let template = `<div class="w-50 mx-4 d-flex justify-content-center flex-column">
                                    <div><h2 class="gris"><span class="jockey-one-regular stat planta">HP:</span> ${hp}</h2></div>
                                    <div><h2 class="gris"><span class="jockey-one-regular stat planta">ATK:</span> ${atk}</h2></div>
                                    <div><h2 class="gris"><span class="jockey-one-regular stat planta">DEF:</span> ${def}</h2></div>
                                </div>
                                <div class="w-50 mx-4 d-flex justify-content-center flex-column">
                                    <div><h2 class="gris"><span class="jockey-one-regular stat planta">SP ATK:</span> ${spAtk}</h2></div>
                                    <div><h2 class="gris"><span class="jockey-one-regular stat planta">SP DEF:</span> ${spDef}</h2></div>
                                    <div><h2 class="gris"><span class="jockey-one-regular stat planta">SPD:</span> ${spd}</h2></div>
                                </div>`
                    
                    $("#estadisitcas").append(template);
                }

                function cambiarPaletaColores(){
                    switch(datosAPI.types[0].type.name){
                        case "normal":
                            $("body").attr("style", "background-color: #AAA67F");
                            $(".stat").attr("style", "color: #AAA67F");
                            $(".primerTipo").attr("style", "background-color: #AAA67F");
                            break;

                        case "fighting":
                            $("body").attr("style", "background-color: #C12239");
                            $(".stat").attr("style", "color: #C12239");
                            $(".primerTipo").attr("style", "background-color: #C12239");
                            break;

                        case "flying":
                            $("body").attr("style", "background-color: #A891EC");
                            $(".stat").attr("style", "color: #A891EC");
                            $(".primerTipo").attr("style", "background-color: #A891EC");
                            break;

                        case "ground":
                            $("body").attr("style", "background-color: #DEC16B");
                            $(".stat").attr("style", "color: #DEC16B");
                            $(".primerTipo").attr("style", "background-color: #DEC16B");
                            break;    

                        case "poison":
                            $("body").attr("style", "background-color: #A43E9E");
                            $(".stat").attr("style", "color: #A43E9E");
                            $(".primerTipo").attr("style", "background-color: #A43E9E");
                            break;

                        case "rock":
                            $("body").attr("style", "background-color: #B69E31");
                            $(".stat").attr("style", "color: #B69E31");
                            $(".primerTipo").attr("style", "background-color: #B69E31");
                            break;

                        case "bug":
                            $("body").attr("style", "background-color: #A7B723");
                            $(".stat").attr("style", "color: #A7B723");
                            $(".primerTipo").attr("style", "background-color: #A7B723");
                            break;

                        case "ghost":
                            $("body").attr("style", "background-color: #70559B");
                            $(".stat").attr("style", "color: #70559B");
                            $(".primerTipo").attr("style", "background-color: #70559B");
                            break;

                        case "steel":
                            $("body").attr("style", "background-color: #B7B9D0");
                            $(".stat").attr("style", "color: #B7B9D0");
                            $(".primerTipo").attr("style", "background-color: #B7B9D0");
                            break;
                        
                        case "fire":
                            $("body").attr("style", "background-color: #F57D31");
                            $(".stat").attr("style", "color: #F57D31");
                            $(".primerTipo").attr("style", "background-color: #F57D31");
                            break;

                        case "water":
                            $("body").attr("style", "background-color: #6493EB");
                            $(".stat").attr("style", "color: #6493EB");
                            $(".primerTipo").attr("style", "background-color: #6493EB");
                            break;

                        case "grass":
                            $("body").attr("style", "background-color: #74CB48");
                            $(".stat").attr("style", "color: #74CB48");
                            $(".primerTipo").attr("style", "background-color: #74CB48");
                            break;

                        case "electric":
                            $("body").attr("style", "background-color: #F9CF30");
                            $(".stat").attr("style", "color: #F9CF30");
                            $(".primerTipo").attr("style", "background-color: #F9CF30");
                            break;
                        
                        case "psychic":
                            $("body").attr("style", "background-color: #FB5584");
                            $(".stat").attr("style", "color: #FB5584");
                            $(".primerTipo").attr("style", "background-color: #FB5584");
                            break;

                        case "ice":
                            $("body").attr("style", "background-color: #9AD6DF");
                            $(".stat").attr("style", "color: #9AD6DF");
                            $(".primerTipo").attr("style", "background-color: #9AD6DF");
                            break;

                        case "dragon":
                            $("body").attr("style", "background-color: #7037FF");
                            $(".stat").attr("style", "color: #7037FF");
                            $(".primerTipo").attr("style", "background-color: #7037FF");
                            break;

                        case "dark":
                            $("body").attr("style", "background-color: #75574C");
                            $(".stat").attr("style", "color: #75574C");
                            $(".primerTipo").attr("style", "background-color: #75574C");
                            break;
                        
                        case "fairy":
                            $("body").attr("style", "background-color: #E69EAC");
                            $(".stat").attr("style", "color: #E69EAC");
                            $(".primerTipo").attr("style", "background-color: #E69EAC");
                            break;

                        default:
                            $("body").attr("style", "background-color: #74CB48");
                            $(".stat").attr("style", "color: #74CB48");
                            $(".primerTipo").attr("style", "background-color: #74CB48");
                    }

                    switch(datosAPI.types[1].type.name){
                        case "normal":
                            $(".segundoTipo").attr("style", "background-color: #AAA67F");
                            break;

                        case "fighting":
                            $(".segundoTipo").attr("style", "background-color: #C12239");
                            break;

                        case "flying":
                            $(".segundoTipo").attr("style", "background-color: #A891EC");
                            break;

                        case "ground":
                            $(".segundoTipo").attr("style", "background-color: #DEC16B");
                            break;

                        case "poison":
                            $(".segundoTipo").attr("style", "background-color: #A43E9E");
                            break;
                        
                        case "rock":
                            $(".segundoTipo").attr("style", "background-color: #B69E31");
                            break; 

                        case "bug":
                            $(".segundoTipo").attr("style", "background-color: #A7B723");
                            break; 

                        case "ghost":
                            $(".segundoTipo").attr("style", "background-color: #70559B");
                            break; 

                        case "steel":
                            $(".segundoTipo").attr("style", "background-color: #B7B9D0");
                            break; 

                        case "fire":
                            $(".segundoTipo").attr("style", "background-color: #F57D31");
                            break;
                        
                        case "water":
                            $(".segundoTipo").attr("style", "background-color: #6493EB");
                            break;

                        case "grass":
                            $(".segundoTipo").attr("style", "background-color: #A43E9E");
                            break;

                        case "electric":
                            $(".segundoTipo").attr("style", "background-color: #F9CF30");
                            break;

                        case "psychic":
                            $(".segundoTipo").attr("style", "background-color: #FB5584");
                            break;

                        case "ice":
                            $(".segundoTipo").attr("style", "background-color: #9AD6DF");
                            break;

                        case "dragon":
                            $(".segundoTipo").attr("style", "background-color: #7037FF");
                            break;

                        case "dark":
                            $(".segundoTipo").attr("style", "background-color: #75574C");
                            break;

                        case "fairy":
                            $(".segundoTipo").attr("style", "background-color: #E69EAC");
                            break;
                        
                        default:
                            $(".segundoTipo").attr("style", "background-color: #A43E9E");
                    }
                }
            
            })
        }

        function getSpeciesDetalles(pokemonId){
            $.ajax({
                url: `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`,
                method: "GET",
            }).done(function (datosAPI) {

                getCategoria();
                getDescripcion();

                function getCategoria(){
                    let categoria = datosAPI.genera[5].genus;

                    let template = `<div style="width: 45%;"><h2 class="jockey-one-regular" style="color: #707266">${categoria}</h2></div>`

                    $("#categoria").append(template);
                }


                function getDescripcion(){

                    let descripcion = datosAPI.flavor_text_entries.find(p => p.language.name == "es");

                   
                        let template = `<h3 id="descripcion" class="text-white m-3 jockey-one-regular">
                            ${descripcion.flavor_text.replace(/\n/g," ")}
                        </h3>`

                        $("#descripcion").append(template);
                    

                }
            })
        }
    }
});
          
        
      
