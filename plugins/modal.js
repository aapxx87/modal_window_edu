function _createModal(options) {

  const modal = document.createElement('div')
  modal.classList.add('vmodal')
  modal.insertAdjacentHTML('afterbegin', `

  `)
  document.body.appendChild(modal)
  return modal

}


$.modal = function(options) {

  const $modal = _createModal(options)

  return {
    open() {},
    close() {},
    destroy() {}
  };
};
