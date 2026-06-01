const fillN = document.getElementById("fillN");
const fillM = document.getElementById("fillM");
let percentN = 40;
let percentM = 50;

fillN.style.width = `${percentN}%`;
fillN.textContent = `${percentN}% - ${65000 * (percentN / 100)}`;

fillM.style.width = `${percentM}%`;
fillM.textContent = `${percentM}% - ${55150 * (percentM / 100)}`;