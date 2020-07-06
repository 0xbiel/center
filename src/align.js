var html = document.getElementsByTagName('html')[0];
var currPadding = parseInt(localStorage.getItem('centerPage') || 0);

if (currPadding > 0) {
  padding(currPadding, 0);
}

function padding(currPadding + diff) {
  var content = document.documentElement;
  var newPadding = parseInt(currPadding + diff);

  if (newPadding < 0) {
    newPadding = 0
  }

  var np = newPadding + 'px';

  content.style.borderLeft = np + ' solid transparent';
  content.style.borderRight = np + ' solid transparent';

  localStorage.setItem('centerPage', newPadding);
}

function increase() {
  var currPadding = parseInt(localStorage.getItem('centerPage') || 0);
  padding(currPadding, 50);
  document.getElementsByTagName('body')[0].focus();

  return currPadding + 50;
}

function decrease() {
  var currPadding = parseInt(localStorage.getItem('centerPage') || 0);
  padding(currPadding, -50);
  document.getElementsByTagName('body')[0].focus();
}

chrome.runtime.onMessage.addListener(
    function (request) {
    if (request.changePadding === "increase") {
      return increase();
    } 
    else if (request.changePadding === "decrease") {
      decrease();
    }
  }
);
