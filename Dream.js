const fillN = document.getElementById('fillN');
const need = document.querySelector('.howMuch');
let moneyN = 26710;
let needN = 70000;
let percentN = Math.floor((moneyN / needN) * 100);

fillN.style.width = `${percentN}%`;
fillN.textContent = `~${percentN}% - ~${moneyN} din`;

need.textContent = `~${needN} din`;