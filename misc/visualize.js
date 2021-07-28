const visualizeSummoner = require("../visualize/visualizeSummoner")

const html = (summonerName, data) => {
    delete data.metadata;
    data = data.info
    let participants = data.participants

    data.teams.forEach(team => {
        team.participants = participants.filter(participant => participant.teamId == team.teamId)
        data.ally = participants.filter(participant => participant.summonerName == summonerName)[0].teamId
        if (data.ally == 100) {
            data.ally = 0
            data.enemy = 1
        } else {
            data.ally = 1
            data.enemy = 0
        }
    })


    delete data.participants;

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">"
    <title>Lol discord botu</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    </head>

    <style>
    html {
        width: fit-content;
        height: fit-content;
    }
    * {
        border: none;
        outline: none;
        list-style: none;
        box-sizing: border-box;
        border-collapse: inherit;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        -webkit-tap-highlight-color: transparent;
    }

    body {
        font: normal 400 16px/1.6667 'Inter', sans-serif;
        color: #181a1b;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .canvas {
        position: relative;
        display: flex;
        flex-direction: column;
        width: fit-content;
        border: 1px solid #babbbf;
        border-radius: 8px;
        overflow: hidden;
    }

    .team {
        display: flex; flex: 1;
        flex-direction: column;
        width: 100%;
    }

    .team-header {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        padding: .75rem 1rem;
        font: normal 600 1.125rem/1.6667 'Inter', sans-serif;
        background-color: #f4f6f9;
    }
    .team-ally .team-header { color: #48b4f3; border-bottom: 4px solid #48b4f3; }
    .team-enemy .team-header { 
        color: #f03d3d;
        border-bottom: 4px solid #f03d3d;
        border-top: 1px solid #babbbf;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }

    .team-header .game-info {
        display: flex;
        align-items: center;
        font-size: .875rem;
        font-weight: 500;
        color: #333;
    }
    
    .game-info .game-type,
    .game-info .game-map { margin-right: .5rem; }

    .game-info .game-type::after,
    .game-info .game-map::after {
        content: '|';
        margin-left: .5rem;
        color: #a8abaf;
    }

    .team-body {
        display: flex;
        flex-direction: column;
        flex: 1; height: 100%;
    }

    .summoner {
        display: flex; flex: 1;
        align-items: center;
        padding: .5rem 1rem;
    }
    .summoner:not(:last-child) { border-bottom: 1px solid #eaebec; }

    .champion-icon {
        display: flex;
        width: 3rem; height: 3rem;
        border: 1px solid #555;
    }

    .summoner-spells,
    .summoner-runes {
        display: flex; 
        flex-direction: column;
        margin-left: .25rem;
    }

    .summoner-spell,
    .summoner-rune {
        display: flex;
        width: 22px; height: 22px;
        border: 1px solid #aaa;
    }
    .summoner-rune { border-radius: 50%; }
    .summoner-spell:first-child,
    .summoner-rune:first-child { margin-bottom: 4px; }

    .summoner-name {
        display: flex;
        margin-left: 1.5rem;
        font-weight: 500;
    }

    .summoner-items {
        display: grid;
        grid-template-columns: repeat(7, 36px);
        grid-template-rows: 36px;
        grid-gap: 2px;
        margin-left: 3rem;
    }

    .summoner-items .item {
        display: flex;
        width: 36px; height: 36px;
        border: 1px solid #aaa;
    }

    .summoner-kda {
        display: flex;
        margin-left: 1.5rem;
    }

    img {
        width: 100%;
        height: 100%
    }
    
    .farm-gold {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        margin-left: 1.5rem;
    }

    .farm, .gold { display: flex; }
    .farm { margin-right: 1rem; }

    .summoner-rank {
        display: flex;
        margin-left: 3rem;
    }

    .summoner-rank .rank {
        display: flex;
        width: 2rem; height: 2rem;
        border-radius: 50%;
        border: 1px solid #aaa;
    }

    .banned-champ {
        display: flex;
        margin-left: 1rem;
    }

    .banned-champ .champ {
        display: flex;
        width: 2rem; height: 2rem;
        border: 1px solid #aaa;
    }
    </style>
    <body>
    <div class="canvas">
        <div class="team team-ally">
        <div class="team-header">
            <div class="team-side">ALLY</div>
            <div class="game-info">
            <div class="game-type">Ranked</div>
            <div class="game-map">Summoner Rift</div>
            <div class="game-duration">31:31</div>
            </div>
        </div>

        <div class="team-body">
            ${data.teams[data.ally].participants.map(summoner => visualizeSummoner(summoner))}
        </div>

        <div class="team team-enemy">
        <div class="team-header">ENEMY</div>

        <div class="team-body">
            ${data.teams[data.enemy].participants.map(summoner => visualizeSummoner(summoner))}
        </div>
        
        </div>
    </div>
    </body>
    </html>`
}

module.exports = html;