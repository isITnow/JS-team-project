const bodyRef = document.querySelector('body');
const toggleRef = document.querySelector('#theme-switch-selector');
const footerDarktheme = document.querySelector('.page-footer');

toggleRef.addEventListener('change', () => {
  if (bodyRef.classList.contains('dark-theme')) {
    bodyRef.classList.remove('dark-theme');
    bodyRef.classList.add('light-theme');
    footerDarktheme.classList.remove('dark-theme');
  } else {
    bodyRef.classList.remove('light-theme');
    bodyRef.classList.add('dark-theme');
    footerDarktheme.classList.add('dark-theme');
  }
});

export { bodyRef, toggleRef, footerDarktheme };
