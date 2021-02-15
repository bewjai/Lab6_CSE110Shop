// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO
  myStorage = window.localStorage;
  if(localStorage.getItem(response == null)){
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => console.log(data));
  }
  localStorage.setItem(response);
});
