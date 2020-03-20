/* eslint-disable func-names */
import method from './method';
import nav from './nav';
import contact from './contact';
import setup from './setup';
import home from './home';
import menue from './menu';

const content = method.getElement('content');
method.append(content, nav());
method.append(content, setup());
const cont = method.getElement('cont');
method.append(cont, home());
method.append(cont, menue());
method.append(cont, contact());
method.getElement('menuB').onclick = function () {
  method.hide('home');
  method.hide('contact');
  method.show('menu');
};

method.getElement('homeB').onclick = function () {
  method.show('home');
  method.hide('menu');
  method.hide('contact');
};

method.getElement('contactB').onclick = function () {
  method.hide('home');
  method.hide('menu');
  method.show('contact');
};
