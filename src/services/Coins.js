const BASE_URL = 'https://api.coinlore.net/';

export async function getCoins() {
  try {
    const response = await fetch(`${BASE_URL}api/tickers/`);
    return response.json();
  } catch (error) {
    return new Error(error);
  }
}

export async function getCoin(id) {
  try {
    const response = await fetch(`${BASE_URL}api/ticker/?id=${id}`);
    return response.json();
  } catch (error) {
    return new Error(error);
  }
}