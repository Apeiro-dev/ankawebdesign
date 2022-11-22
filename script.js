// Function that will toggle the nav-bar in small and medius screen
function toggleOpen(element) {
  element.classList.toggle('open');
}
let navBar = document.querySelector('.nav-bar');
let offerBtn = document.querySelector('.header-button');
let menuList = document.querySelector('.bi-list');

menuList.addEventListener('click', () => {
  toggleOpen(navBar);
  toggleOpen(offerBtn);
  return;
})