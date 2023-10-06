export const BASE_URL = process.env.NODE_ENV  === 'production' ? 'snist-trackhack-production.up.railway.app/' :'http://localhost:3000/';
export const BASE_PING = BASE_URL + 'ping';