// const getData = () => fetch('https://pokeapi.co/api/v2/pokemon/ditto');

// const showData = async () => {
//     const apiResponse = await getData();
//     const data = await apiResponse.json();

//     console.log(data);
// }

// showData();

const showPokemon = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        const data = await response.json();

        console.log(data);
        
    } catch (err) {
        console.error(`Erro inesperado: ${err}`);
    }
};

showPokemon()