export default function fetchBitcoin(target) {
  fetch('https://blockchain.info/ticker')
    .then((response) => response.json())
    .then((valorBitcoin) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (1000 / valorBitcoin.BRL.sell).toFixed(4);
    })
    .catch((error) => {
      console.log(error);
    });
}
