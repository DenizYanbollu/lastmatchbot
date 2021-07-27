function visualizeSummoner(summoner) {
    const   {kills,
            deaths,
            assists,
            goldEarned,
            neutralMinionsKilled} = summoner
    return `
    <div class="summoner">
        <div class="champion-icon"><img src='https://ddragon.leagueoflegends.com/cdn/11.15.1/img/champion/${summoner.championName}.png'></div>
        <div class="summoner-spells">
            <span class="summoner-spell"></span>
            <span class="summoner-spell"></span>
        </div>
        <div class="summoner-runes">
            <span class="summoner-rune"></span>
            <span class="summoner-rune"></span>
        </div>
        <div class="summoner-name">${summoner.summonerName}</div>
        <div class="summoner-items">
            <div class="item item-slot-0"><img src='https://ddragon.leagueoflegends.com/cdn/11.15.1/img/item/${summoner["item0"]}.png'></div>
            <div class="item item-slot-1"><img src='https://ddragon.leagueoflegends.com/cdn/11.15.1/img/item/${summoner["item1"]}.png'></div>
            <div class="item item-slot-2"><img src='https://ddragon.leagueoflegends.com/cdn/11.15.1/img/item/${summoner["item2"]}.png'></div>
            <div class="item item-slot-3"><img src='https://ddragon.leagueoflegends.com/cdn/11.15.1/img/item/${summoner["item3"]}.png'></div>
            <div class="item item-slot-4"><img src='https://ddragon.leagueoflegends.com/cdn/11.15.1/img/item/${summoner["item4"]}.png'></div>
            <div class="item item-slot-5"><img src='https://ddragon.leagueoflegends.com/cdn/11.15.1/img/item/${summoner["item5"]}.png'></div>
            <div class="item item-slot-6"><img src='https://ddragon.leagueoflegends.com/cdn/11.15.1/img/item/${summoner["item6"]}.png'></div>
        </div>
        <div class="summoner-kda">${kills}/${deaths}/${assists}</div>

        <div class="farm-gold">
            <div class="farm" title="farm">${neutralMinionsKilled}</div>
            <div class="gold" title="gold">${goldEarned}</div>
        </div>
        <div class="summoner-rank">
            <span class="rank" title="rank"></span>
        </div>
        <div class="banned-champ">
            <span class="champ" title="banned champ"></span>
        </div>
    </div>
    `
}

module.exports = visualizeSummoner;