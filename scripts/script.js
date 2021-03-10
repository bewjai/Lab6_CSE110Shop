// Script.js
const list = document.getElementById("product-list"); 

window.addEventListener('DOMContentLoaded', () => {
  // TODO
  if(localStorage.getItem('arr') !== true){
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      localStorage.setItem('arr', JSON.stringify(data));
      let arr = localStorage.getItem('arr');
      JSON.parse(arr).forEach(element => {
        list.appendChild(new ProductItem(element));
      });
    })
    .catch(error => console.log(error));
  }
  });
