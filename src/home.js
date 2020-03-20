import method from './method';

function home() {
  const home = method.create('div', 'col-12', 'home');
  const header = method.create('h1', 'text-center display-4 py-2', 'hHome');
  const intro = method.create('p', 'text-center text-muted font-italic m-auto py-4', 'intoH');
  method.updateText(intro, "Food isn't mean to just be eaten it should be enjoyed");
  const iconDiv = method.create('div', 'd-flex justify-content-around col-12 py-4', 'icons');
  const cokie = method.create('i', 'fas fa-cookie-bite fa-10x', 'cookie');
  const coktail = method.create('i', 'fas fa-cocktail fa-10x', 'cookie');
  const burger = method.create('i', 'fas fa-glass-cheers fa-10x', 'cookie');
  [cokie, coktail, burger].forEach(el => { method.append(iconDiv, el); });
  const footer = method.create('p', 'text-center display-4 font-italic m-auto py-4', 'intoH');
  method.updateText(footer, 'karibu restaurent is a sprace where you can get a');
  method.updateText(header, 'Karibu retaurent');
  [header, intro, iconDiv, footer].forEach(el => { method.append(home, el); });
  return home;
}
export default home;
