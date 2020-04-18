console.log("hello");
const menuToggle = document.getElementById(`menu-toggle`);
const menuNav = document. getElementById('menu-nav')

const toggleMenu = () => { menuNav.classList.toggle(`open`)}

menuToggle.addEventListener(`click`, toggleMenu);
