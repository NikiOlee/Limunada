const fillN = document.getElementById('fillN');
const need = document.querySelector('.howMuch');
let moneyN = 26000;
let needN = 70000;
let percentN = Math.floor((moneyN / needN) * 100);

fillN.style.width = `${percentN}%`;
fillN.textContent = `~${percentN}% - ~${moneyN} din`;

need.textContent = `~${needN} din`;

const themeBtn = document.getElementById('themeToggle');

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-theme');
  themeBtn.textContent = '☀️';
}

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  if (document.body.classList.contains('dark-theme')) {
    themeBtn.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    themeBtn.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
});