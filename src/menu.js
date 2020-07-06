document.addEventListener('DOMContentLoaded', function () {
  
  var inBtn = document.getElementById('increase');
  var deBtn = document.getElementById('decrease');
  
  inBtn.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, 
      function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { changePadding: "increase" }, 
          function (response) {
            console.log(response);
          });
      });
  }, false);

  deBtn.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, 
      function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { changePadding: "decrease" }, 
          function (response) {
            console.log(response);
          });
      });
  }, false);

}, false);
