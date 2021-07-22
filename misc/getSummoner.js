const axios = require("axios");

const apiAccess = require("../apiAccess")

function getSummoner(region, summonerName) {
    const query = `/lol/summoner/v4/summoners/by-name/${summonerName}`

    return apiAccess(region, query);
}

module.exports = getSummoner