const apiAccess = require("../apiAccess")
const getRegion = require("../misc/getRegion")

function getMatch(region, matchId) {
    return apiAccess(getRegion(region), `/lol/match/v5/matches/${matchId}`)
}

module.exports = getMatch;