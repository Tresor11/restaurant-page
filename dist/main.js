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
  function n(a) {
    if (t[a]) return t[a].exports;
    const c = (t[a] = { i: a, l: !1, exports: {} });
    return e[a].call(c.exports, c, c.exports, n), (c.l = !0), c.exports;
  }
  (n.m = e),
  (n.c = t),
  (n.d = function (e, t, a) {
    n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
  }),
  (n.r = function (e) {
    typeof Symbol !== 'undefined'
        && Symbol.toStringTag
        && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
    Object.defineProperty(e, '__esModule', { value: !0 });
  }),
  (n.t = function (e, t) {
    if ((1 & t && (e = n(e)), 8 & t)) return e;
    if (4 & t && typeof e === 'object' && e && e.__esModule) return e;
    const a = Object.create(null);
    if (
      (n.r(a),
      Object.defineProperty(a, 'default', { enumerable: !0, value: e }),
      2 & t && typeof e !== 'string')
    ) {
      for (const c in e) {
        n.d(
          a,
          c,
          ((t) => e[t]).bind(null, c),
        );
      }
    }
    return a;
  }),
  (n.n = function (e) {
    const t = e && e.__esModule
      ? function () {
        return e.default;
      }
      : function () {
        return e;
      };
    return n.d(t, 'a', t), t;
  }),
  (n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }),
  (n.p = ''),
  n((n.s = 0));
}([
  function (_e, t, n) {
    n.r(t);
    const a = {
      create(e, t, n) {
        const a = document.createElement(e);
        return (a.className += t), a.setAttribute('id', n), a;
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
    const c = function () {
      const e = a.create(
        'div',
        'row py-4 text-center d-flex justify-content-around',
        'nav',
      );
      const t = a.create('button', 'btn btn-outline-dark', 'homeB');
      const n = a.create('button', 'btn btn-outline-dark', 'menuB');
      const c = a.create('button', 'btn btn-outline-dark', 'contactB');
      return (
        a.updateHtml(t, '<i class="fas fa-glass-martini">HOME</i>'),
        a.updateHtml(n, '<i class="fas fa-book-open">MENU</i>'),
        a.updateHtml(c, '<i class="fas fa-phone    ">contact</i>'),
        [t, n, c].forEach(t => {
          a.append(e, t);
        }),
        e
      );
    };
    const o = function () {
      const e = a.create('div', 'col-12', 'contact');
      const t = a.create('h4', 'text-center display-4 py-2', 'hHome');
      a.updateText(t, 'chat with us');
      const n = a.create('p', 'text-center display-5 py-2', 'hHome');
      return (
        a.updateText(n, 'email:kariburesto@gmail.com'),
        [t, n].forEach(t => {
          a.append(e, t);
        }),
        e
      );
    };
    const i = function () {
      const e = a.create('div', 'py-4 row', 'main');
      const t = a.create('div', 'col-8 row ml-auto', 'cont');
      return a.append(e, t), e;
    };
    const r = function () {
      const e = a.create('div', 'col-12', 'home');
      const t = a.create('h1', 'text-center display-4 py-2', 'hHome');
      const n = a.create(
        'p',
        'text-center text-muted font-italic m-auto py-4',
        'intoH',
      );
      a.updateText(n, "Food isn't mean to just be eaten it should be enjoyed");
      const c = a.create(
        'div',
        'd-flex justify-content-around col-12 py-4',
        'icons',
      );
      [
        a.create('i', 'fas fa-cookie-bite fa-10x', 'cookie'),
        a.create('i', 'fas fa-cocktail fa-10x', 'cookie'),
        a.create('i', 'fas fa-glass-cheers fa-10x', 'cookie'),
      ].forEach(e => {
        a.append(c, e);
      });
      const o = a.create(
        'p',
        'text-center display-4 font-italic m-auto py-4',
        'intoH',
      );
      return (
        a.updateText(o, 'karibu restaurent is a sprace where you can get a'),
        a.updateText(t, 'Karibu retaurent'),
        [t, n, c, o].forEach(t => {
          a.append(e, t);
        }),
        e
      );
    };
    const s = function () {
      const e = a.create('div', 'col-12', 'menu');
      const t = a.create('div', 'row py-2 item', 'item1');
      const n = a.create('div', 'row py-2 item', 'item1');
      const c = a.create('div', 'row py-2 item', 'item1');
      const o = a.create('div', 'row py-2 item', 'item1');
      const i = a.create('img', 'img-fluid col-6 menu-img', 'menu-img');
      i.src = '../dist/asset/images/kim-daniels-yItVmeh1XA8-unsplash.jpg';
      const r = a.create('img', 'img-fluid col-6 menu-img', 'menu-img');
      r.src = '../dist/asset/images/emerson-vieira-cpkPJ-U9eUM-unsplash (1).jpg';
      const s = a.create('img', 'img-fluid col-6 menu-img', 'menu-img');
      s.src = '../dist/asset/images/joseph-gonzalez-fdlZBWIP0aM-unsplash (1).jpg';
      const d = a.create('img', 'img-fluid col-6 menu-img', 'menu-img');
      d.src = '../dist/asset/images/victoria-shes-XgFFJKSPkNk-unsplash (1).jpg';
      const l = a.create('div', 'col-6', 'introM');
      a.updateHtml(
        l,
        '<h4 class="mt-4 d-block text-wrap">legums</h4><p class="mt-4 d-block"><span class="badge badge-primary">price: 10$</span></p>',
      );
      const p = a.create('div', 'col-6', 'introM');
      a.updateHtml(
        p,
        '<h4 class="mt-4 d-block text-wrap">Grilled meat</h4><p class="mt-4 d-block"><span class="badge badge-primary">price: 50$</span></p>',
      );
      const u = a.create('div', 'col-6', 'introM');
      a.updateHtml(
        u,
        '<h4 class="mt-4 d-block text-wrap">Boiled eggs</h4><p class="mt-4 d-block"><span class="badge badge-primary">price: 20$</span></p>',
      );
      const m = a.create('div', 'col-6', 'introM');
      return (
        a.updateHtml(
          m,
          '<h4 class="mt-4 d-block text-wrap">Raw meat</h4><p class="mt-4 d-block"><span class="badge badge-primary">price: 10$</span></p>',
        ),
        [i, l].forEach(e => {
          t.appendChild(e);
        }),
        [r, p].forEach(e => {
          n.appendChild(e);
        }),
        [s, u].forEach(e => {
          c.appendChild(e);
        }),
        [d, m].forEach(e => {
          o.appendChild(e);
        }),
        [t, n, c, o].forEach(t => {
          e.appendChild(t);
        }),
        e
      );
    };
    const d = a.getElement('content');
    a.append(d, c()), a.append(d, i());
    const l = a.getElement('cont');
    a.append(l, r()),
    a.append(l, s()),
    a.append(l, o()),
    (a.getElement('menuB').onclick = function () {
      a.hide('home'), a.hide('contact'), a.show('menu');
    }),
    (a.getElement('homeB').onclick = function () {
      a.show('home'), a.hide('menu'), a.hide('contact');
    }),
    (a.getElement('contactB').onclick = function () {
      a.hide('home'), a.hide('menu'), a.show('contact');
    });
  },
]));
