import method from './method';

function contact() {
  const contact = method.create('div', 'col-12', 'contact');
  const header = method.create('h4', 'text-center display-4 py-2', 'hHome');
  method.updateText(header, 'chat with us');
  const email = method.create('p', 'text-center display-5 py-2', 'hHome');
  method.updateText(email, 'email:kariburesto@gmail.com');
  [header, email].forEach(el => { method.append(contact, el); });
  return contact;
}
export default contact;
