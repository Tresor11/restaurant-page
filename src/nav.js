import method from './method';

function nav() {
  const navbar = method.create('div', 'row py-4 text-center d-flex justify-content-around', 'nav');
  const homeBtn = method.create('button', 'btn btn-outline-dark', 'homeB');
  const menueBtn = method.create('button', 'btn btn-outline-dark', 'menuB');
  const contactBtn = method.create('button', 'btn btn-outline-dark', 'contactB');
  method.updateHtml(homeBtn, '<i class="fas fa-glass-martini">HOME</i>');
  method.updateHtml(menueBtn, '<i class="fas fa-book-open">MENUE</i>');
  method.updateHtml(contactBtn, '<i class="fas fa-phone    ">contact</i>');
  [homeBtn, menueBtn, contactBtn].forEach(el => { method.append(navbar, el); });
  return navbar;
}
export default nav;