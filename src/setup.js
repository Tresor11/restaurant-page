import method from './method';

function setup() {
  const main = method.create('div', 'py-4 row', 'main');
  const cont = method.create('div', 'col-8 row ml-auto', 'cont');
  method.append(main, cont);
  return main;
}
export default setup;