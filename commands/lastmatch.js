const getRegion = require("../misc/getRegion")
const getSummoner = require("../misc/getSummoner")
const getMatches = require("../misc/getMatches")
const getMatch = require("../misc/getMatch")

const visualize = require("../misc/visualize")

const nodeHtmlToImage = require('node-html-to-image')

function lastmatch (msg) {
    let summonerName = msg.content.split(" ")
    const [,, region] = summonerName
    summonerName.splice(0, 3)
    summonerName = summonerName.join(" ")
    console.log(summonerName)

    if (!getRegion(region)) return msg.reply("Mistyped or non-existing region!")

    function visualizeMatch(matchId) {
        getMatch(region, matchId).then(
            ({data}) => {   
                nodeHtmlToImage({
                    output: `./images/${matchId}.png`,
                    html: visualize(summonerName, data)
                  })
                    .then(() => msg.reply("Maç sonu", {files: [`images/${matchId}.png`]}))
            }
        )
    }

    function getLastMatchId(puuid) {
        getMatches(region, puuid).then(
            ({data}) => data.length > 0 ? visualizeMatch(data[0]) : msg.reply("This summoner has no match played.") 
        )
    }
    
    getSummoner(region, summonerName).then(
        ({data}) => data.puuid ? getLastMatchId(data.puuid) : msg.reply("Summoner not found!")
    )
}

module.exports = lastmatch;