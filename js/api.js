const urlBase = 'https://pokeapi.co/api/v2/pokemon';

const pokemons = () => {
    for (let i = 1; i <= 1292; i++) {
        fetch(`${urlBase}/${i}`)
        .then((res) => res.json())
        .then((data) => cardPokemon(data))
    }
    
}

pokemons()