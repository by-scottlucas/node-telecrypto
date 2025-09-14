require("dotenv").config();

const AWESOME_API_URL = process.env.AWESOME_API_URL;
const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;

module.exports = { AWESOME_API_URL, TELEGRAM_TOKEN };
