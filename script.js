var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');

function inputLength() {
  return input.value.length;
}

function createDeleteBtn() {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('delete'));
  btn.addEventListener('click', deleteListItem);
  return btn;
}

function createListElement() {
  var li = document.createElement('li');
  li.appendChild(document.createTextNode(input.value));
  li.appendChild(document.createTextNode(' '));
  li.appendChild(createDeleteBtn());
  ul.appendChild(li);
  input.value = '';
  li.addEventListener('click', itemDone);
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function itemDone(event) {
  event.srcElement.classList.toggle('done');
}

function deleteListItem(event) {
  event.srcElement.parentNode.remove();
}

button.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterKeypress);
