/* eslint-disable no-cond-assign */
/* eslint-disable no-bitwise */
/* eslint-disable no-multi-assign */
/* eslint-disable no-return-assign */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable func-names */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

!(function (e) {
  const t = {};
  function a(n) {
    if (t[n]) return t[n].exports;
    const o = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, a), (o.l = !0), o.exports;
  }
  (a.m = e),
  (a.c = t),
  (a.d = function (e, t, n) {
    a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
  }),
  (a.r = function (e) {
    typeof Symbol !== 'undefined'
        && Symbol.toStringTag
        && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
    Object.defineProperty(e, '__esModule', { value: !0 });
  }),
  (a.t = function (e, t) {
    if ((1 & t && (e = a(e)), 8 & t)) return e;
    if (4 & t && typeof e === 'object' && e && e.__esModule) return e;
    const n = Object.create(null);
    if (
      (a.r(n),
      Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
      2 & t && typeof e !== 'string')
    ) {
      for (const o in e) {
        a.d(
          n,
          o,
          ((t) => e[t]).bind(null, o),
        );
      }
    }
    return n;
  }),
  (a.n = function (e) {
    const t = e && e.__esModule
      ? function () {
        return e.default;
      }
      : function () {
        return e;
      };
    return a.d(t, 'a', t), t;
  }),
  (a.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }),
  (a.p = ''),
  a((a.s = 0));
}([
  function (e, t, a) {
    a.r(t);
    const n = {
      create(e, t, a) {
        const n = document.createElement(e);
        return (n.className += t), n.setAttribute('id', a), n;
      },
      getElement(e) {
        return document.getElementById(e);
      },
      append(e, t) {
        e.appendChild(t);
      },
      updateText(e, t) {
        e.innerText = t;
      },
      updateHtml(e, t) {
        e.innerHTML = t;
      },
      hide(e) {
        document.getElementById(e).style.display = 'none';
      },
      show(e) {
        document.getElementById(e).style.display = 'initial';
      },
    };
    const o = function () {
      const e = n.create(
        'div',
        'row py-4 text-center d-flex justify-content-around',
        'nav',
      );
      const t = n.create('button', 'btn btn-outline-dark', 'homeB');
      const a = n.create('button', 'btn btn-outline-dark', 'menuB');
      const o = n.create('button', 'btn btn-outline-dark', 'contactB');
      return (
        n.updateHtml(t, '<i class="fas fa-glass-martini">HOME</i>'),
        n.updateHtml(a, '<i class="fas fa-book-open">MENU</i>'),
        n.updateHtml(o, '<i class="fas fa-phone    ">CONTACT</i>'),
        [t, a, o].forEach(t => {
          n.append(e, t);
        }),
        e
      );
    };
    const c = function () {
      const e = n.create('div', 'col-12', 'contact');
      const t = n.create('h4', 'text-center display-4 py-2', 'hHome');
      n.updateText(t, 'chat with us');
      const a = n.create('p', 'text-center display-5 py-2', 'hHome');
      return (
        n.updateText(a, 'email:kariburesto@gmail.com'),
        [t, a].forEach(t => {
          n.append(e, t);
        }),
        e
      );
    };
    const r = function () {
      const e = n.create('div', 'py-4 row', 'main');
      const t = n.create('div', 'col-8 row ml-auto', 'cont');
      return n.append(e, t), e;
    };
    const i = function () {
      const e = n.create('div', 'col-12', 'home');
      const t = n.create('h1', 'text-center display-4 py-2', 'hHome');
      const a = n.create(
        'p',
        'text-center text-muted font-italic m-auto py-4',
        'intoH',
      );
      n.updateText(a, "Food isn't meant to just be eaten it should be enjoyed");
      const o = n.create(
        'div',
        'd-flex justify-content-around col-12 py-4',
        'icons',
      );
      [
        n.create('i', 'fas fa-cookie-bite fa-10x', 'cookie'),
        n.create('i', 'fas fa-cocktail fa-10x', 'cookie'),
        n.create('i', 'fas fa-glass-cheers fa-10x', 'cookie'),
      ].forEach(e => {
        n.append(o, e);
      });
      const c = n.create(
        'p',
        'text-center display-4 font-italic m-auto py-4',
        'intoH',
      );
      return (
        n.updateText(
          c,
          'karibu restaurant is a space where you get quality food',
        ),
        n.updateText(t, 'Karibu restaurant'),
        [t, a, o, c].forEach(t => {
          n.append(e, t);
        }),
        e
      );
    };
    const s = function () {
      const e = n.create('div', 'col-12', 'menu');
      const t = n.create('div', 'row py-2 item', 'item1');
      const a = n.create('div', 'row py-2 item', 'item1');
      const o = n.create('div', 'row py-2 item', 'item1');
      const c = n.create('div', 'row py-2 item', 'item1');
      const r = n.create('img', 'img-fluid col-6 menu-img', 'menu-img');
      r.src = '../dist/asset/images/kim-daniels-yItVmeh1XA8-unsplash.jpg';
      const i = n.create('img', 'img-fluid col-6 menu-img', 'menu-img');
      i.src = '../dist/asset/images/emerson-vieira-cpkPJ-U9eUM-unsplash (1).jpg';
      const s = n.create('img', 'img-fluid col-6 menu-img', 'menu-img');
      s.src = '../dist/asset/images/joseph-gonzalez-fdlZBWIP0aM-unsplash (1).jpg';
      const l = n.create('img', 'img-fluid col-6 menu-img', 'menu-img');
      l.src = '../dist/asset/images/victoria-shes-XgFFJKSPkNk-unsplash (1).jpg';
      const d = n.create('div', 'col-6', 'introM');
      n.updateHtml(
        d,
        '<h4 class="mt-4 d-block text-wrap">legumes</h4><p class="mt-4 d-block">we offer vey high qrality legume extracted directly from our garden</p><p class="mt-4 d-block"><span class="badge badge-primary">price: 10$</span></p>',
      );
      const p = n.create('div', 'col-6', 'introM');
      n.updateHtml(
        p,
        '<h4 class="mt-4 d-block text-wrap">Grilled meat</h4><p class="mt-4 d-block">get a taste of our fresh grilled meat</p><p class="mt-4 d-block"><span class="badge badge-primary">price: 50$</span></p>',
      );
      const u = n.create('div', 'col-6', 'introM');
      n.updateHtml(
        u,
        '<h4 class="mt-4 d-block text-wrap">Boiled eggs</h4><p class="mt-4 d-block">Our eggs are directly etracted from our chicken coop</p><p class="mt-4 d-block"><span class="badge badge-primary">price: 20$</span></p>',
      );
      const m = n.create('div', 'col-6', 'introM');
      return (
        n.updateHtml(
          m,
          '<h4 class="mt-4 d-block text-wrap">Raw meat</h4><p class="mt-4 d-block">if you like meat so much you will enjoy our fresh raw meat</p><p class="mt-4 d-block"><span class="badge badge-primary">price: 10$</span></p>',
        ),
        [r, d].forEach(e => {
          t.appendChild(e);
        }),
        [i, p].forEach(e => {
          a.appendChild(e);
        }),
        [s, u].forEach(e => {
          o.appendChild(e);
        }),
        [l, m].forEach(e => {
          c.appendChild(e);
        }),
        [t, a, o, c].forEach(t => {
          e.appendChild(t);
        }),
        e
      );
    };
    const l = n.getElement('content');
    n.append(l, o()), n.append(l, r());
    const d = n.getElement('cont');
    n.append(d, i()),
    n.append(d, s()),
    n.append(d, c()),
    (n.getElement('menuB').onclick = function () {
      n.hide('home'), n.hide('contact'), n.show('menu');
    }),
    (n.getElement('homeB').onclick = function () {
      n.show('home'), n.hide('menu'), n.hide('contact');
    }),
    (n.getElement('contactB').onclick = function () {
      n.hide('home'), n.hide('menu'), n.show('contact');
    });
  },
]));
