import removeUser from './removeUser'

export default function showModalWindow(id){
  const windowWrapper = document.createElement('div');
  windowWrapper.classList.add('modal-wrapper');
  const modalWindow = document.createElement('div');
  modalWindow.classList.add('modal');
  const modalText = document.createElement('div');
  modalText.innerHTML = `Delet user with id: ${id}?`;
  modalText.classList.add('modal-text');
  const modalBtns = document.createElement('div')
  modalBtns.classList.add('modal-btns')
  const okBtn = document.createElement('button');
  okBtn.innerHTML = 'Yes';
  okBtn.classList.add('modal-ok-btn');
  okBtn.onclick = () => {
    removeUser(id)
    windowWrapper.remove();
  };
  const closeBtn = document.createElement('button');
  closeBtn.onclick = () => {
    windowWrapper.remove();
  };
  closeBtn.innerHTML = 'No';
  closeBtn.classList.add('modal-close-btn');
  modalBtns.appendChild(okBtn)
  modalBtns.appendChild(closeBtn)
  modalWindow.appendChild(modalText);
  modalWindow.appendChild(modalBtns);
  windowWrapper.appendChild(modalWindow);
  document.querySelector('div[class="container"]').appendChild(windowWrapper)
}