/* eslint-disable func-names */
const method = (function () {
  function create(el, classes, id) {
    const element = document.createElement(el);
    element.className += classes;
    element.setAttribute('id', id);
    return element;
  }
  function getElement(id) {
    return document.getElementById(id);
  }
  function updateText(el, value) {
    el.innerText = value;
  }
  function updateHtml(el, value) {
    el.innerHTML = value;
  }
  function append(target, value) {
    target.appendChild(value);
  }
  function hide(id) {
    document.getElementById(id).style.display = 'none';
  }
  function show(id) {
    document.getElementById(id).style.display = 'initial';
  }
  return {
    create, getElement, append, updateText, updateHtml, hide, show,
  };
}());
export default method;