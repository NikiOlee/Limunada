const fillN = document.getElementById("fillN");
const fillM = document.getElementById("fillM");
let moneyN = 26000;
let moneyM = 24000;
let needN = 65000;
let needM = 60000;
let percentN = Math.floor((moneyN / needN) * 100);
let percentM = Math.floor((moneyM / needM) * 100);

fillN.style.width = `${percentN}%`;
fillN.textContent = `~${percentN}% - ~${moneyN}`;

fillM.style.width = `${percentM}%`;
fillM.textContent = `~${percentM}% - ~${moneyM}`;
