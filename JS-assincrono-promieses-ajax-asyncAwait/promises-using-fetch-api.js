const username = 'eduardoscheffer';

fetch(`https://api.github.com/users/${username}`, {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    }
}).then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
})

// ------------- Usando API pra pegar letras de musica -----------//

function getData (artist, song) {
    return fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
}

const form = document.querySelector('#lyrics_form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    displayLyrics();
})

async function displayLyrics() {
    const lyrics_div = document.querySelector('#lyrics_div');
    const artist = document.querySelector('#artist');
    const song = document.querySelector('#song');

    const responseLyrics = await getData(artist.value, artist.value);
    const data = await responseLyrics.json();

    lyrics_div.innerHTML = data.lyrics;
}


// ------ API do Chuch Norris ------------- //
// Utilizando Promises:
fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => console.log(data.value));

// Utilizando asyncAwait e salvando o resolve da Promise numa variavel:
const chuckNorris = async () => {
    const responseFromAPI = await fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json());
    // const data = await responseFromAPI.json();
    
    console.log(responseFromAPI.value);
}

chuckNorris();

// ------ numbersapi.com/dia/mes/date ------- //
const numberAPI = async (month, day) => {
    const response = await fetch(`http://numbersapi.com/${month}/${day}/date`);
    const data = await response.json()

    console.log(data);
}

numberAPI(2, 29);