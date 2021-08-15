const url = "https://api.coincap.io/v2"

function getAssets() {
  return fetch(`${url}/assets?limit=20`)
    .then((res) => res.json())
    .then((res) => res.data)
}
async function getAsset(coin) {
  const res = await fetch(`${url}/assets/${coin}`)
  const res_1 = await res.json()
  return res_1.data
}
function getAssetHistory(coin) {
  const now = new Date()
  const end = now.getTime()
  now.setDate(now.getDate() - 1)
  const start = now.getTime()

  return fetch(
    `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  )
    .then((res) => res.json())
    .then((res) => res.data)
}
const getMarkets = async coin => {
  let res = await fetch(`${url}/assets/${coin}/markets?limit=5`);
  res = await res.json();
  return res.data;
};

const getExchange = async id => {
  let res = await fetch(`${url}/exchanges/${id}`);
  res = await res.json();

  return res.data;
};
export default {
  getAsset,
  getAssets,
  getAssetHistory,
  getMarkets,
  getExchange,
}
/*const url = "https://api.coincap.io/v2";

function getAssets()
{
  return getRequest("assets?limit=20");
}

function getRequest(method)
{
  return fetch(`${url}/${method}`, {
    mode: "cors",
    method: "GET",
    headers: {
      "Accept": "application/json"
    }
  })
  .then(response => response.json())
  .then((response) => {
    return response.data;
  })
  .catch(error => { console.log('request failed', error); }); // Syntax error: unexpected end of input
}

export default { getAssets };*/
