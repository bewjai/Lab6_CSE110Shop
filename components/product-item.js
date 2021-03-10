// product-item.js
/*
<!-- Sample Product -->
                <!-- li class="product">
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops" width=200>
                    <p class="title">Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops</p>
                    <p class="price">$109.95</p>
                    <button onclick="alert('Added to Cart!')">Add to Cart</button>
                </li -->
*/
var count = parseInt(document.getElementById('cart-count').textContent, 10);

class ProductItem extends HTMLElement {
  // TODO
  constructor(element) {
    super();
    
    let shadow = this.attachShadow({ mode: 'open'});

    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', './styles/styles.css');
    shadow.appendChild(linkElem);
  
    const product = document.createElement('li');
    product.setAttribute('class', "product");
    shadow.appendChild(product);
    
    const img = document.createElement('img');
    const title = document.createElement('p');
    const price = document.createElement('p');
    const button = document.createElement('button');
    
    img.setAttribute('src', element.image);
    img.setAttribute('alt', element.title);
    img.setAttribute('width', 200);
    product.appendChild(img);
    
    title.setAttribute('class', 'title');
    title.textContent = element.title;
    product.appendChild(title);

    price.setAttribute('class', 'price');
    price.textContent = "$" + element.price;
    product.appendChild(price);

    button.textContent = "Add to Cart";
    product.appendChild(button);
    
    button.onclick = function(event){
      if(event.target.innerHTML == "Add to Cart"){
        document.getElementById("cart-count").textContent = ++count;
        alert('Added to Cart!');
        localStorage.setItem(element.id, 'true');
        button.textContent = "Remove from Cart";
      }
      else{
        document.getElementById("cart-count").textContent = --count;
        alert('Removed from Cart!');
        localStorage.setItem(element.id, 'false');
        button.textContent = "Add to Cart";
      }
    }

    if(localStorage.getItem(element.id) === null || localStorage.getItem(element.id) === 'false'){
      button.textContent = "Add to Cart";
      product.appendChild(button);
    }
    else if(localStorage.getItem(element.id) === 'true') {
      document.getElementById("cart-count").textContent = ++count;
      button.textContent = "Remove from Cart";
      product.appendChild(button);
    }
  }
}
customElements.define('product-item', ProductItem);