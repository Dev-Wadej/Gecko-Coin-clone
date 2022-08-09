import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3/coins',
});
const r =
    'markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false&price_change_percentage=1h%2C24h';