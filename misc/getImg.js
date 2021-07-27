const axios = require("axios")

async function apiAccess(REGION, QUERY) {
    return await axios.get(API_URL_HEAD+QUERY+API_URL_END)
}

module.exports = apiAccess;