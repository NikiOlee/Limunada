const fillN = document.getElementById("fillN");
const fillM = document.getElementById("fillM");
let moneyN = 26000;
let needN = 65000;
let percentN = Math.floor((moneyN / needN) * 100);

fillN.style.width = `${percentN}%`;
fillN.textContent = `~${percentN}% - ~${moneyN}`;
