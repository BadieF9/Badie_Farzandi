const moment = require("moment");
console.log(moment().day())
const menuOptions = document.querySelectorAll('.menu-options .menu-option a');
menuOptions.forEach(menuOption => {
  menuOption.addEventListener('click', (e) => {
    e.preventDefault();
    let target = document.querySelector(e.target.hash);
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  })
})

const searchBox = document.querySelector('.search-input')
searchBox.nodeValue = moment().format('L');