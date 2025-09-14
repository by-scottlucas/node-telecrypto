const CURRENCIES = Object.freeze({
    USD: "USD",
    EUR: "EUR",
    GBP: "GBP",
    JPY: "JPY",
    BTC: "BTC",
    ETH: "ETH",
});

const POPULAR_COINS = Object.freeze([
    CURRENCIES.USD,
    CURRENCIES.EUR,
    CURRENCIES.GBP,
    CURRENCIES.JPY,
    CURRENCIES.BTC,
    CURRENCIES.ETH,
]);

const COINS_MAP = Object.freeze({
    USD: CURRENCIES.USD,
    EUR: CURRENCIES.EUR,
    GBP: CURRENCIES.GBP,
    JPY: CURRENCIES.JPY,
    BTC: CURRENCIES.BTC,
    ETH: CURRENCIES.ETH,
    "dólar americano": CURRENCIES.USD,
    dolar: CURRENCIES.USD,
    "euro": CURRENCIES.EUR,
    "libra esterlina": CURRENCIES.GBP,
    libra: CURRENCIES.GBP,
    "iene japonês": CURRENCIES.JPY,
    iene: CURRENCIES.JPY,
    bitcoin: CURRENCIES.BTC,
    ethereum: CURRENCIES.ETH,
});

module.exports = { CURRENCIES, POPULAR_COINS, COINS_MAP };
