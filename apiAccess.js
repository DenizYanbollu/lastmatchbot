const axios = require("axios")

const API_KEY = 'RGAPI-2848d283-7d22-4d1c-b1cf-add216a69261'; 

async function apiAccess(REGION, QUERY) {
    const API_URL_HEAD = `https://${REGION}.api.riotgames.com`;
    const API_URL_END = `?api_key=${API_KEY}`

    console.log(API_URL_HEAD+QUERY+API_URL_END)
    return await axios.get(API_URL_HEAD+QUERY+API_URL_END)
}

module.exports = apiAccess;