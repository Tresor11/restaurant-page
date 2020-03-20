import method from './method';

function menue() {
  const menue = method.create('div', 'col-12', 'menu');
  const item1 = method.create('div', 'row py-2 item', 'item1');
  const item2 = method.create('div', 'row py-2 item', 'item1');
  const item3 = method.create('div', 'row py-2 item', 'item1');
  const item4 = method.create('div', 'row py-2 item', 'item1');
  const pic1 = method.create('img', 'img-fluid col-6 menu-img', 'menu-img');
  pic1.src = '../dist/asset/images/kim-daniels-yItVmeh1XA8-unsplash.jpg';
  const pic2 = method.create('img', 'img-fluid col-6 menu-img', 'menu-img');
  pic2.src = '../dist/asset/images/emerson-vieira-cpkPJ-U9eUM-unsplash (1).jpg';
  const pic3 = method.create('img', 'img-fluid col-6 menu-img', 'menu-img');
  pic3.src = '../dist/asset/images/joseph-gonzalez-fdlZBWIP0aM-unsplash (1).jpg';
  const pic4 = method.create('img', 'img-fluid col-6 menu-img', 'menu-img');
  pic4.src = '../dist/asset/images/victoria-shes-XgFFJKSPkNk-unsplash (1).jpg';
  const description1 = method.create('div', 'col-6', 'introM');
  method.updateHtml(description1, '<h4 class="mt-4 d-block text-wrap">legums</h4><p class="mt-4 d-block"><span class="badge badge-primary">price: 10$</span></p>');
  const description2 = method.create('div', 'col-6', 'introM');
  method.updateHtml(description2, '<h4 class="mt-4 d-block text-wrap">Grilled meat</h4><p class="mt-4 d-block"><span class="badge badge-primary">price: 50$</span></p>');
  const description3 = method.create('div', 'col-6', 'introM');
  method.updateHtml(description3, '<h4 class="mt-4 d-block text-wrap">Boiled eggs</h4><p class="mt-4 d-block"><span class="badge badge-primary">price: 20$</span></p>');
  const description4 = method.create('div', 'col-6', 'introM');
  method.updateHtml(description4, '<h4 class="mt-4 d-block text-wrap">Raw meat</h4><p class="mt-4 d-block"><span class="badge badge-primary">price: 10$</span></p>');
  [pic1, description1].forEach(el => { item1.appendChild(el); });
  [pic2, description2].forEach(el => { item2.appendChild(el); });
  [pic3, description3].forEach(el => { item3.appendChild(el); });
  [pic4, description4].forEach(el => { item4.appendChild(el); });
  [item1, item2, item3, item4].forEach(el => { menue.appendChild(el); });
  return menue;
}

export default menue;