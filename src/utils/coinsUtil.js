const { COINS_MAP } = require("../configs/coinsConfig");

function normalizeText(str) {
    return str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}

function findCurrency(input) {
    const normalizedInput = normalizeText(input);

    for (const [key, value] of Object.entries(COINS_MAP)) {
        if (normalizeText(key) === normalizedInput) {
            return value;
        }
    }

    for (const [key, value] of Object.entries(COINS_MAP)) {
        if (normalizeText(key).includes(normalizedInput)) {
            return value;
        }
    }

    return null;
}

module.exports = { findCurrency };