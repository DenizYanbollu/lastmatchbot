function getRegion(region) {
    const regions = {
        "TR1": "EUROPE",
        "EUN1": "EUROPE",
        "EUW1": "EUROPE",
        "RU": "EUROPE",
        "NA1": "AMERICAS",
        "BR1": "AMERICAS",
        "LA1": "AMERICAS",
        "LA2": "AMERICAS",
        "OC1": "AMERICAS",
        "JP1": "ASIA",
        "KR": "ASIA"
    }

    return regions[region] ? regions[region] : false;
}

module.exports = getRegion;