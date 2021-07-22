const axios = require("axios")

const API_KEY = 'RGAPI-39a1f0da-e60d-4f3a-bc94-3f1acd32171f'; 

async function apiAccess(REGION, QUERY) {
    const API_URL_HEAD = `https://${REGION}.api.riotgames.com`;
    const API_URL_END = `?api_key=${API_KEY}`

    console.log(API_URL_HEAD+QUERY+API_URL_END)
    return await axios.get(API_URL_HEAD+QUERY+API_URL_END)
}

module.exports = apiAccess;