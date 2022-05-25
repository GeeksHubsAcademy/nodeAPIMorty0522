
const axios = require('axios');

const traePersonaje = async () => {

    try {

        let resultado = await axios.get("https://rickandmortyapi.com/api/character/2");

        console.log(resultado.data);

    } catch (error) {
        console.log(error);
    }

    
};

traePersonaje();