const url = 'https://dadosabertos.camara.leg.br/api/v2/deputados';
// const id = 2;

const getDataDeputado = async (id) => {
    
    const response = await fetch(`${url}/${id}`);
    const data = await response.json();

    console.log(data);

}

getDataDeputado(290);