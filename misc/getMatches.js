const apiAccess = require("../apiAccess")
const getRegion = require("../misc/getRegion")

function getMatches(region, puuid) {
    return apiAccess(getRegion(region), `/lol/match/v5/matches/by-puuid/${puuid}/ids`)
}

module.exports = getMatches;