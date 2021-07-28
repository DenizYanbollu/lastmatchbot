const apiAccess = require("../apiAccess")
const getRegion = require("../misc/getRegion")

const fs = require("fs")

function getMatch(region, matchId) {
    const matchPath = `./matches/${matchId}`;

    if (fs.existsSync(matchPath)) 
        return new Promise((resolve) => fs.readFile(matchPath, (err, data) => resolve({data: JSON.parse(data)})))

    const result =  apiAccess(getRegion(region), `/lol/match/v5/matches/${matchId}`)
    result.then(({data}) => fs.writeFileSync(matchPath, JSON.stringify(data)))
    return result
}

module.exports = getMatch;

