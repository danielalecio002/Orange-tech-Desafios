const pokemonList = document.getElementById('pokemonList');

const loadMoreButton = document.getElementById('loadMoreButton');

const limit = 10;
let offset = 0;
const maxRecords = 151;

function loadPokemonItens(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `  
            <li class="pokemon ${pokemon.type}" onclick="alertar()">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div class="details">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class = "type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}" 
                alt=${pokemon.name}>
            </div>
            </li>
    `).join('')
        pokemonList.innerHTML += newHtml 
    })

}



loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordWithNextPage = offset + limit

    if(qtdRecordWithNextPage >= maxRecords){
        const newLimit = maxRecords - offset;
        loadPokemonItens(offset, newLimit)
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }else{
        loadPokemonItens(offset, limit)
    }
})



function alertar(){
       
    // pokeApi.getPokemons(offset,limit ).then((pokemons = []) => {  
    //     const newHtml = pokemons.map((pokemon) => 
    //     `  
    //             <div class= "pokemonDetails">
    //                 <div class="photo">
    //                 <img src="${pokemon.photo}" 
    //                  alt=${pokemon.name}>
    //                  </div>
    //                 <span >#${pokemon.number}</span>
    //                 <span >${pokemon.name}</span>
    //             </div>
    // `).join('')
    // viewDetails.innerHTML = newHtml 
        
    // })

}