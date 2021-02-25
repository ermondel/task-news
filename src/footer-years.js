const el = document.querySelector('.page-footer__years');

if (el) {
  const footerYear = Number(el.textContent);
  const currentYear = new Date().getFullYear();

  if (footerYear < currentYear) {
    el.textContent = `${footerYear} - ${currentYear}`;
  }
}
