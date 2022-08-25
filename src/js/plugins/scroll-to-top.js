const refs = {
  btnUp: document.querySelector('#btn-up'),
};
refs.btnUp.addEventListener('click', onBtnUpClick);
function onBtnUpClick() {
  document.body.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

document.addEventListener('scroll', () => {
  if (
    document.body.scrollTop > window.innerHeight / 2 ||
    document.documentElement.scrollTop > window.innerHeight / 2
  ) {
    refs.btnUp.style.display = 'block';
  } else {
    refs.btnUp.style.display = 'none';
  }
});
