const fillN = document.getElementById("fillN");
const fillM = document.getElementById("fillM");
let percentN = 40;
let percentM = 43.33;

fillN.style.width = `${percentN}%`;
fillN.textContent = `${percentN}% - ${65000 * (percentN / 100)}`;

fillM.style.width = `${percentM}%`;
fillM.textContent = `${percentM}% - ${60000 * (percentM / 100)}`;
