

const products = [
  // ALIMENTOS
  {
    id: 1,
    img: "https://i.imgur.com/WUgvGEG.jpg",
    name: "Harina Pan",
    price: 1.5,
    description: "esta es la descripcion del producto",
    tag: ["alimentos"],
    available: true
  },
  {
    id: 2,
    img: "https://i.imgur.com/fDK78X8.jpg",
    name: "Harina de Trigo",
    price: 2,
    description: "esta es la descripcion del producto",
    tag: ["alimentos"],
    available: true
  },
  {
    id: 3,
    img: "https://i.imgur.com/5iZ7Mnn.jpg",
    name: "Arroz",
    price: 1,
    description: "esta es la descripcion del producto",
    tag: ["alimentos"],
    available: true
  },
  {
    id: 4,
    img: "https://i.imgur.com/illT75G.jpg",
    name: "Pasta Larga",
    price: 1,
    description: "esta es la descripcion del producto",
    tag: ["alimentos"],
    available: true
  },
  {
    id: 5,
    img: "https://i.imgur.com/o5701hB.jpg",
    name: "Pasta Corta Tornillo",
    price: 1,
    description: "esta es la descripcion del producto",
    tag: ["alimentos"],
    available: true
  },
  {
    id: 6,
    img: "https://i.imgur.com/GIWB9tq.jpg",
    name: "Mantequilla Mavesa",
    price: 4,
    description: "esta es la descripcion del producto",
    tag: ["alimentos"],
    available: true
  },
  {
    id: 7,
    img: "https://i.imgur.com/kEooBCT.jpg",
    name: "mazeite",
    price: 5,
    description: "esta es la descripcion del producto",
    tag: ["alimentos"],
    available: true
  },
  {
    id: 8,
    img: "https://i.imgur.com/tfFP4NN.jpg",
    name: "Pan Bimbo",
    price: 8,
    description: "esta es la descripcion del producto",
    tag: ["alimentos"],
    available: true
  },
  {
    id: 9,
    img: "https://i.imgur.com/zfmnnIB.jpg",
    name: "Pan Bimbo Integral",
    price: 10,
    description: "esta es la descripcion del producto",
    tag: ["alimentos"],
    available: true
  },
  {
    id: 10,
    img: "https://i.imgur.com/XidFfcQ.png",
    name: "Tortillas Bimbo",
    price: 5,
    description: "esta es la descripcion del producto",
    tag: ["alimentos"],
    available: true
  },
  //BEBIDAS
  {
    id: 11,
    img: "https://i.imgur.com/95AGatS.jpg",
    name: "Agua Mineral",
    price: 1,
    description: "esta es la descripcion del producto",
    tag: ["bebidas"],
    available: true
  },
  {
    id: 12,
    img: "https://i.imgur.com/cFoUjwe.jpg",
    name: "Coca Cola",
    price: 2,
    description: "esta es la descripcion del producto",
    tag: ["bebidas"],
    available: true
  },
  {
    id: 13,
    img: "https://i.imgur.com/1QRjN9k.png",
    name: "Frescolita",
    price: 2,
    description: "esta es la descripcion del producto",
    tag: ["bebidas"],
    available: true
  },
  {
    id: 14,
    img: "https://i.imgur.com/Vvfugyq.png",
    name: "Hit Naranja",
    price: 2,
    description: "esta es la descripcion del producto",
    tag: ["bebidas"],
    available: true
  },
  {
    id: 15,
    img: "https://i.imgur.com/tRCHDxI.jpg",
    name: "Hit Uva",
    price: 2,
    description: "esta es la descripcion del producto",
    tag: ["bebidas"],
    available: true
  },
  {
    id: 16,
    img: "https://i.imgur.com/72yx8rV.png",
    name: "Pepsi",
    price: 2,
    description: "esta es la descripcion del producto",
    tag: ["bebidas"],
    available: true
  },
  {
    id: 17,
    img: "https://i.imgur.com/xw9Ns4m.png",
    name: "Malta",
    price: 4,
    description: "esta es la descripcion del producto",
    tag: ["bebidas"],
    available: true
  },
  {
    id: 18,
    img: "https://i.imgur.com/s5WxjWj.png",
    name: "Lipton Limon",
    price: 2,
    description: "esta es la descripcion del producto",
    tag: ["bebidas"],
    available: true
  },
  {
    id: 19,
    img: "https://i.imgur.com/M2wj1QS.jpg",
    name: "Lipton Durazno",
    price: 2,
    description: "esta es la descripcion del producto",
    tag: ["bebidas"],
    available: true
  },
  {
    id: 20,
    img: "https://i.imgur.com/YTt2Bjm.png",
    name: "Chinotto",
    price: 2,
    description: "esta es la descripcion del producto",
    tag: ["bebidas"],
    available: true
  },
  //LICORES
  {
    id: 21,
    img: "https://i.imgur.com/H2nrQXG.jpg",
    name: "Cacique 500",
    price: 80,
    description: "esta es la descripcion del producto",
    tag: ["licores"],
    available: true
  },
  {
    id: 22,
    img: "https://i.imgur.com/I8OFSgx.jpg",
    name: "Black Label",
    price: 100,
    description: "esta es la descripcion del producto",
    tag: ["licores"],
    available: true
  },
  {
    id: 23,
    img: "https://i.imgur.com/j607Agk.png",
    name: "caroreña",
    price: 10,
    description: "esta es la descripcion del producto",
    tag: ["licores"],
    available: true
  },
  {
    id: 24,
    img: "https://i.imgur.com/uetT7R9.jpg",
    name: "Santa Teresa",
    price: 20,
    description: "esta es la descripcion del producto",
    tag: ["licores"],
    available: true
  },
  {
    id: 25,
    img: "https://i.imgur.com/ihhwaER.png",
    name: "Ron Diplomatico",
    price: 80,
    description: "esta es la descripcion del producto",
    tag: ["licores"],
    available: true
  },
  {
    id: 26,
    img: "https://i.imgur.com/kqyyOPn.png",
    name: "Cerveza Heineken",
    price: 8,
    description: "esta es la descripcion del producto",
    tag: ["licores"],
    available: true
  },
  {
    id: 27,
    img: "https://i.imgur.com/rCd9R3a.jpg",
    name: "Cerveza Polar",
    price: 5,
    description: "esta es la descripcion del producto",
    tag: ["licores"],
    available: true
  },
  {
    id: 28,
    img: "https://i.imgur.com/g9XQjU4.png",
    name: "Cerveza Polar Pilsen",
    price: 5,
    description: "esta es la descripcion del producto",
    tag: ["licores"],
    available: true
  },
  {
    id: 29,
    img: "https://i.imgur.com/rxAJAuw.png",
    name: "Cerveza Zulia",
    price: 5,
    description: "esta es la descripcion del producto",
    tag: ["licores"],
    available: true
  },
  {
    id: 30,
    img: "https://i.imgur.com/dEqrd5p.png",
    name: "Cerveza Regional",
    price: 5,
    description: "esta es la descripcion del producto",
    tag: ["licores"],
    available: true
  },
  //HIGIENE PERSONAL
  {
    id: 31,
    img: "https://i.imgur.com/RiywkJP.jpg",
    name: "Jabon Dove",
    price: 2,
    description: "esta es la descripcion del producto",
    tag: ["higiene"],
    available: true
  },
  {
    id: 32,
    img: "https://i.imgur.com/jsj1FSx.jpg",
    name: "Jabon Dove Liquido",
    price: 4,
    description: "esta es la descripcion del producto",
    tag: ["higiene"],
    available: true
  },
  {
    id: 33,
    img: "https://i.imgur.com/lyP7ofv.jpg",
    name: "Jabon Protex",
    price: 2,
    description: "esta es la descripcion del producto",
    tag: ["higiene"],
    available: true
  },
  {
    id: 34,
    img: "https://i.imgur.com/A4HBdge.jpg",
    name: "Crema Colgate",
    price: 2,
    description: "esta es la descripcion del producto",
    tag: ["higiene"],
    available: true
  },
  {
    id: 35,
    img: "https://i.imgur.com/IyO5onW.png",
    name: "Crema Colgate Triple Accion",
    price: 3,
    description: "esta es la descripcion del producto",
    tag: ["higiene"],
    available: true
  },
  {
    id: 36,
    img: "https://i.imgur.com/kCkleQ2.jpg",
    name: "Cepillo de Dientes",
    price: 1,
    description: "esta es la descripcion del producto",
    tag: ["higiene"],
    available: true
  },
  {
    id: 37,
    img: "https://i.imgur.com/twZiLpG.jpg",
    name: "Shampoo Head & Shoulders",
    price: 8,
    description: "esta es la descripcion del producto",
    tag: ["higiene"],
    available: true
  },
  {
    id: 38,
    img: "https://i.imgur.com/IcadRxn.png",
    name: "Shampoo Pantene",
    price: 10,
    description: "esta es la descripcion del producto",
    tag: ["higiene"],
    available: true
  },
  {
    id: 39,
    img: "https://i.imgur.com/NewMBKN.jpg",
    name: "Protector Solar Nivea",
    price: 8,
    description: "esta es la descripcion del producto",
    tag: ["higiene"],
    available: true
  },
  {
    id: 40,
    img: "https://i.imgur.com/xStdCUV.png",
    name: "Protector Solar",
    price: 5,
    description: "esta es la descripcion del producto",
    tag: ["higiene"],
    available: true
  },
  
]

let productsContainer = document.querySelector("#products-container");


let cartContainer = document.querySelector("#cart-container");
let totalPrice = 0;
let cart = [];


loadCartFromLocalStorage()



function displayProducts() {
  let fragment = document.createDocumentFragment();

  let addedTags = {}

  products.forEach(product => {

    product.tag.forEach(tag => {
      let tagDiv = document.querySelector(`.${tag}`);
      let gridProducts = document.createElement("div")
      gridProducts.className = "tag-products-container section"
      gridProducts.id = tag

      if (!addedTags[tag]) {
        tagDiv = document.createElement("div")
        tagDiv.className = "tag-section-products"
        tagDiv.classList.add(`${tag}`) 
        let heading = document.createElement("h2")
        heading.classList = "heading tag-section-title"
        heading.innerText = tag
        gridProducts.appendChild(heading)
        gridProducts.appendChild(tagDiv)
        productsContainer.appendChild(gridProducts)
        addedTags[tag] = true
        
      }

      let productDiv = document.createElement("div")
      productDiv.className = "productCard"
      productDiv.innerHTML = `
        <img src="${product.img}" class="product_img">
        <div class="product-text">
          <h3 id="${product.name}" class="product_name">${product.name}</h3>
          <span class="product_description">${product.description}</span>
          <span class="price product_price" data-price="${product.price.toFixed(2)}">Price: $${product.price.toFixed(2)}</span>
        </div>
        
        <button id="${product.id}" class="view-details product_btn">ver</button>

        <div class="product-details">
          <div class="popup">
            <div class="popup-produt-content">
              <button class="close-button-x"><span>&times;</span></button>

              <div class="popup-product-img">
                  <img src="${product.img}">
              </div>

              <div class="popup-product-text">
                  <h3>${product.name}</h3>
                  <p>${product.description}</p>
                  <p>$ ${product.price}</p>
              </div>

              <div class="counter-wrapper">

                <button class="counter-btn decrease-quantity" data-qty-minus>-</button>

                <input type="number" value="1" class="initial-quantity">

                <button class="counter-btn increase-quantity">+</button>

              </div>
              
              
              <div class="popup-botones">
                <button class="close-btn">Close</button>
                <button id="${product.id}" class="add-to-cart">add to cart</button>
              </div>
            </div>
          
          </div>
        </div>
      `
      // gridProducts.appendChild(productDiv)

      let addToCartBtn = productDiv.querySelector(".add-to-cart");
      let initialQuantityInput = productDiv.querySelector(".initial-quantity");
      let increaseQuantity = productDiv.querySelector(".increase-quantity");
      let decreaseQuantity = productDiv.querySelector(".decrease-quantity");
      let quantity = 1
      initialQuantityInput.addEventListener("change", () => {
        if (initialQuantityInput.value < 1) {
          return initialQuantityInput.value = 1
        }
        // else if(initialQuantityInput.value > 10){
        //   alert("solo hasta 10 productos")
        //   return initialQuantityInput.value = 10
        // }

        // if (initialQuantityInput.value > 10) {
        //   alert("solo hasta 10 productos")
        //   return initialQuantityInput.value = 1 
        // }
        quantity = initialQuantityInput.value
      })
      increaseQuantity.addEventListener("click", () => {
        quantity++
        initialQuantityInput.value = quantity
      })
      decreaseQuantity.addEventListener("click", () => {
        if (quantity > 1) {
          quantity--
          initialQuantityInput.value = quantity
        }else{
          return
        }
        
      })
      addToCartBtn.addEventListener("click", () => {
        const objProduct = {
          id: product.id,
          img: product.img,
          name: product.name,
          quantity: Number(quantity) < 1 ? 1: Number(quantity),
          price: product.price,
          isAvailable: product.isAvailable
        }

        addToCartName(objProduct)
        initialQuantityInput.value = 1
        quantity = 1

      })

      document.querySelector(`.${tag}`).appendChild(productDiv);

    })
  })
}

displayProducts()











let search = document.querySelector("#search-product");
window.onload = () => search.value = ""

//hide ver carrito when search clicked
// let searchWrapper = document.querySelector(".search-wrapper")
// searchWrapper.classList.add("active")
// let hasClass = searchWrapper.classList.contains("active")
// console.log(hasClass)

function filterBySearch(){
  
  let noProductFilter = document.querySelector("#filter-message");
  let productCards = document.querySelectorAll(".productCard");
  let clearBtn = document.querySelector("#clear-search");
  search.addEventListener("keyup", () => {
    

    let searchValue = search.value.toLowerCase();
    for (let i = 0; i < productCards.length; i++) {
      let productCard = productCards[i]
      let productName = productCard.querySelector("h3").innerText.toLowerCase()
      clearBtn.addEventListener("click", () => {
        search.value = ""
        document.querySelector('.nav-container').classList.remove("active")
        document.querySelector('.tag-products-container').classList.remove("active")
        document.querySelector('.tag-section-products').classList.remove("active")
        productCard.classList.remove("hide");
        productCard.classList.add("show");
        noProductFilter.classList.remove("no-hay-producto")
        toggleHeading()
      })
      if (searchValue === "" || productName.includes(searchValue)){
        productCard.classList.remove("hide");
        productCard.classList.add("show");
      }else{
        productCard.classList.add("hide");
        productCard.classList.remove("show"); 
      }
    }

    if (document.querySelectorAll(".productCard.show").length === 0) {
      noProductFilter.classList.add("no-hay-producto")
      
    }else{
      noProductFilter.classList.remove("no-hay-producto")
    }

    
    toggleHeading()
  })
}

function toggleHeading() {
  let search = document.querySelector("#search-product");
  let searchValue = search.value.toLowerCase();
  let headings = productsContainer.querySelectorAll(".heading");
  headings.forEach(heading => {
    if (searchValue === "") {
      heading.classList.remove("active")
      document.querySelector('.nav-container').classList.remove("active")
      document.querySelector('.tag-products-container').classList.remove("active")
      document.querySelector('.tag-section-products').classList.remove("active")
    }else{
      heading.classList.add("active")
      document.querySelector('.nav-container').classList.add("active")
      document.querySelector('.tag-products-container').classList.add("active")
      document.querySelector('.tag-section-products').classList.add("active")
      
    }
  
  })
}


filterBySearch()


function searchToggle(obj, evt) {
  let verCarritoContainer = document.querySelector(".cart-container")

    let container = obj.closest('.search-wrapper');
    if (!container.classList.contains('active')) {
        container.classList.add('active');
        verCarritoContainer.style.transform = "translateY(100px)"
        evt.preventDefault();
    } else if (container.classList.contains('active') && obj.closest('.input-holder') === null) {
        container.classList.remove('active');
        verCarritoContainer.style.transform = "translateY(0)"
        // clear input
        container.querySelector('.search-input').value = '';
    }
}



//product with name
function addToCartName(product) {

  let itemIndex = cart.findIndex(item => item.name === product.name);

  if (product.isAvailable === false) {
    showPopUpMessageRemove("producto agotado")
    return
  }
  if (itemIndex !== -1) {
    // if (cart[itemIndex].quantity >= 10) {
    //     alert("You can only add up to 10 of the same item.");
    //     return;
    // }
    cart[itemIndex].quantity += product.quantity;
    showPopUpMessageAdd("cantidad actualizada")
  }else{
    cart.push(product);
    showPopUpMessageAdd("producto añadido")
  }

  saveCartToLocalStorage();
  updateCartCounter();
  updateTotalCost()
  displayCart()
  volverBtn();
}





function updateTotalCost() {
  let totalCost = 0;
  for (let i = 0; i < cart.length; i++) {
    let product = cart[i]
    totalCost += product.price * product.quantity;
  }
  let totalCostFinal = Math.round(totalCost * 100) / 100;
  console.log(totalCostFinal)

  let totalCostElement = document.querySelector("#total-cost");
  let totalCostElement2 = document.getElementById("totalCost2");
  totalCostElement.innerHTML = "Total Cost: $" + totalCostFinal;
  totalCostElement2.innerHTML = "$ " + totalCostFinal;

  let formContent = document.querySelector(".form-content");
  let noProductsMessage = document.getElementById("no-products-message");
  if (totalCost > 0) {
    noProductsMessage.classList.add("hide-message");
    formContent.classList.add("display-form");
    totalCostElement.classList.remove("hide-cost");
  }else{
    noProductsMessage.classList.remove("hide-message");
    formContent.classList.remove("display-form");
    totalCostElement.classList.add("hide-cost");
  }

  saveCartToLocalStorage();
  volverBtn();
}

updateTotalCost()

function eliminarProduct(product) {
  let index = cart.findIndex((element) => element.id === product.id);
  cart.splice(index, 1)
}


// local storage
function saveCartToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}


function loadCartFromLocalStorage() {
  let savedCart = localStorage.getItem("cart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartCounter();
    displayCart()
    updateTotalCost();
    volverBtn();
  }
}




function displayCart(){
  let fragment = document.createDocumentFragment();
  cartContainer.innerHTML = "";
  for (let i = 0; i < cart.length; i++) {
    let product = cart[i]
    let productInCart = document.createElement("li");
    productInCart.innerHTML = `
      <div class="product-in-cart-img-container">
        <img src="${product.img}" class="product-in-cart-img">
      </div>
      
      <div class="product-in-cart-info">
        <p class="product-in-cart-name">${product.name}</p>
        <p>$ ${product.price}</p>
        <div class="quantity-in-cart-container"> 
          <div class="counter-wrapper-in-cart">

            <button class="counter-btn-in-cart decrease-quantity-in-cart">-</button>

            <input type="number" value="${product.quantity}" id="${product.id}" class="initial-quantity">

            <button class="counter-btn-in-cart increase-quantity-in-cart">+</button>

          </div> 
          
          <button id="${product.id}" class="remove-from-cart-btn fa-regular fa-trash-can"></button>
        </div>
      </div>
      
    `

    // editar cantidad
    let cantidadInput = productInCart.querySelector("input");
    cantidadInput.addEventListener("change", () => {
      // if (cantidadInput.value > 10) {
      //   alert("You can only add up to 10 of the same item.");
      //   return cantidadInput.value = product.quantity;
      // }
      if (cantidadInput.value === "" || cantidadInput.value <= 0 || cantidadInput.value === NaN) {
        return cantidadInput.value = product.quantity;
      }else{
        product.quantity = Number(cantidadInput.value);
        updateTotalCost()
      }
    })

    let increaseQuantityInCart = productInCart.querySelector(".increase-quantity-in-cart");
    let decreaseQuantityInCart = productInCart.querySelector(".decrease-quantity-in-cart");

    increaseQuantityInCart.addEventListener("click", () => {
      product.quantity++
      cantidadInput.value = product.quantity;
      updateTotalCost()
    })

    decreaseQuantityInCart.addEventListener("click", () => {
      if (cantidadInput.value > 1) {
        product.quantity--
        cantidadInput.value = product.quantity;
        updateTotalCost()
      }else{
        return
      }
      
    })

    // eliminar producto
      let eliminarBtn = productInCart.querySelector(".remove-from-cart-btn");
      eliminarBtn.addEventListener("click", () => {
        eliminarProduct(product)
        updateTotalCost()
        displayCart()
        volverBtn();
        updateCartCounter();
        saveCartToLocalStorage();
        showPopUpMessageRemove("producto eliminado")
      })

    fragment.appendChild(productInCart);
    saveCartToLocalStorage();
  }

  cartContainer.appendChild(fragment);
}




// fixed navigation links

// Get the nav container and nav elements
const navContainer = document.querySelector('.nav-container');
const nav = document.querySelector('.nav');
const navLinks = nav.querySelectorAll('.nav-link');

// Add click event listeners to the nav links
navLinks.forEach(navLink => {
  navLink.addEventListener('click', e => {
    e.preventDefault();

    // Remove active class from all nav links
    navLinks.forEach(link => link.classList.remove('active'));

    // Add active class to the clicked link
    navLink.classList.add('active');

    // Scroll to the section with the same ID as the link href
    const href = navLink.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Get all the sections
const sections = document.querySelectorAll('.section');

// Create an intersection observer to spy on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Get the ID of the visible section
      const visibleSectionId = entry.target.getAttribute('id');

      // Remove active class from all nav links
      navLinks.forEach(link => link.classList.remove('active'));

      // Add active class to the nav link with the same href as the visible section ID
      const activeNavLink = nav.querySelector(`.nav-link[href="#${visibleSectionId}"]`);
      activeNavLink.classList.add('active');

      // Scroll the nav container to show the active nav link
      navContainer.scroll({
        left: activeNavLink.offsetLeft - navContainer.offsetWidth / 2 + activeNavLink.offsetWidth / 2,
        behavior: 'smooth'
      });
    }
  });
}, { rootMargin: '-50% 0px -50% 0px' });

// Observe all the sections
sections.forEach(section => {
  observer.observe(section);
});






//pop up products


const viewDetailsButtons = document.querySelectorAll('.view-details');
const productDetails = document.querySelectorAll('.product-details');
const closeButtons = document.querySelectorAll('.close-btn');
const closeButtonsX = document.querySelectorAll('.close-button-x');
const overlays = document.querySelectorAll('.product-details');
const card = document.querySelectorAll(".productCard");
const addCart = document.querySelectorAll(".add-to-cart");
let popupOpen1 = false;



let scrollPosition 

function openPopupProduct(event) {
  
  console.log(scrollPosition)
  event.forEach((button, index) => {
    button.addEventListener('click', () => {
      //get position of scroll
      scrollPosition = window.scrollY
      console.log(scrollPosition)
      productDetails[index].style.display = 'block';
      productDetails[index].querySelector('.popup').style.display = 'block';
      document.body.classList.add('stop-scrolling');
      popupOpen1 = true;
      window.history.pushState({ popupOpen: true }, "");
      window.addEventListener("popstate", closePopUpProduct);
    });
  });
}

openPopupProduct(card);


function closePopUpProduct(event) {
  //set position of scroll
  window.scrollTo({
    top: scrollPosition,
    behavior: "instant"
  })
  if (popupOpen1) {
    productDetails.forEach((product) => {
      product.classList.add('hide');
      product.querySelector('.popup').classList.add('hide');
      setTimeout(() => {
        product.classList.remove('hide');
        product.querySelector('.popup').classList.remove('hide');
        product.style.display = 'none';
        product.querySelector('.popup').style.display = 'none';
        document.body.classList.remove('stop-scrolling');
      }, 200);
    });
    window.removeEventListener("popstate", closePopUpProduct);
    popupOpen1 = false;
    event.preventDefault();
  } else {
    window.removeEventListener("popstate", closePopUpProduct);
    history.back();
  }
}

closeButtons.forEach((button) => {
  button.addEventListener('click', closePopUpProduct);
});

closeButtonsX.forEach((button) => {
  button.addEventListener('click', closePopUpProduct);
});

addCart.forEach((button) => {
  button.addEventListener('click', closePopUpProduct);
});

overlays.forEach((overlay) => {
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
      closePopUpProduct(event);
    }
  });
});

window.addEventListener('popstate', closePopUpProduct);



let burger = document.querySelector("#burger");
let span = document.querySelector("#span");
let shoppingCartPopup = document.querySelector(".shopping-cart-popup")
let close = document.querySelector(".close");
let volver = document.querySelector("#volver");
let popupOpen = false;

// counter
const cartCounter = document.querySelector(".cart-count");
// form
let form =  document.getElementById("form");
let formContent = document.querySelector(".form-content");
let addressInputWrapper = document.getElementById("addressInputWrapper");
let pickupLocationsWrapper = document.getElementById("pickupLocationsWrapper");
let pickUpBtn = document.getElementById("pickUpBtn");
let deliveryBtn = document.getElementById("deliveryBtn");
let deliveryMethod = document.getElementById("deliveryMethod");



// pop up

function closePopup() {
  //Add the closed class to initiate the close animation
  shoppingCartPopup.classList.add("closed");

  setTimeout(() => {
    shoppingCartPopup.style.display = "none";
    shoppingCartPopup.classList.remove("closed");
  }, 300);

  // remove stop scrolling
  document.body.classList.remove("stop-scrolling");
  popupOpen = false;
}

function closePopupOnBackButton(event) {
  if (popupOpen) {
    closePopup();
    event.preventDefault();
  } else {
    window.removeEventListener("popstate", closePopupOnBackButton);
    history.back();
  }
}

burger.addEventListener("click", function () {
  // Show the pop-up
  shoppingCartPopup.style.display = "block";
  // add stop scrolling
  document.body.classList.add("stop-scrolling");
  popupOpen = true;

  // Add state to the browser history
  window.history.pushState({ popupOpen: true }, "");

  window.addEventListener("popstate", closePopupOnBackButton);
});

close.addEventListener("click", closePopup);
volver.addEventListener("click", closePopup);

window.addEventListener("popstate", closePopupOnBackButton);



// boton volver
function volverBtn(){
  let cartContainer = document.getElementById("cart-container");
  let volver = document.querySelector("#volver");
  if (cart.length < 1) {
      volver.classList.add("acti");
      volver.classList.remove("actiPc");
      cartContainer.classList.add("activarse")
      
  }
  else{
    volver.classList.remove("acti");
    volver.classList.add("actiPc");
    cartContainer.classList.remove("activarse")
  }
}

volverBtn();


//shopping cart counter 
function updateCartCounter() {
  const cartCounter = document.querySelector(".cart-count");
  
  cartCounter.innerText = cart.length;

}

updateCartCounter();


//pop up information

function showPopUpMessageAdd(message){
  const popUpAdd = document.createElement("div");
  popUpAdd.classList.add("pop-up-message-add");
  popUpAdd.textContent = message;
  document.body.appendChild(popUpAdd);

  setTimeout(() => {
    popUpAdd.classList.add("closed");
  }, 2000);

  setTimeout(() => {
    document.body.removeChild(popUpAdd);
  }, 2500);

  
}

function showPopUpMessageRemove(message){
  const popUpRemove = document.createElement("div");
  popUpRemove.classList.add("pop-up-message-remove");
  popUpRemove.textContent = message;
  document.body.appendChild(popUpRemove);

  setTimeout(() => {
    popUpRemove.classList.add("closed");
  }, 2000);

  setTimeout(() => {
    document.body.removeChild(popUpRemove);
  }, 2500);
}



// form



  pickUpBtn.addEventListener("click", () => {
    setDeliveryMethod("pickUp");
  });

  deliveryBtn.addEventListener("click", () => {
    setDeliveryMethod("delivery");
  });

  
  pickUpBtn.classList.remove("active-method");
  deliveryBtn.classList.remove("active-method");

  function setDeliveryMethod(method) {
    deliveryMethod.value = method;

    if (method === "delivery") {
      addressInputWrapper.style.display = "block";
      pickupLocationsWrapper.style.display = "none";
      pickUpBtn.classList.remove("active-method");
      deliveryBtn.classList.add("active-method");
      address.required = true;
    } else if (method === "pickUp") {
      addressInputWrapper.style.display = "none";
      pickupLocationsWrapper.style.display = "block";
      pickUpBtn.classList.add("active-method");
      deliveryBtn.classList.remove("active-method");
      address.required = false;
    }
    else{
      addressInputWrapper.style.display = "none";
      pickupLocationsWrapper.style.display = "none";
      pickUpBtn.classList.remove("active-method");
      deliveryBtn.classList.remove("active-method");
      address.required = false;

    }

  }






function generateCartMessage(cart) {
    let message = "Shopping Cart:\n";
    let totalCost = 0;
    for (let i = 0; i < cart.length; i++) {
        let item = cart[i];
        message += item.name + " - $" + item.price + " x " + item.quantity;
        message += "\n";
        totalCost += item.price * item.quantity;
    }
    message += "Total Cost: $" + totalCost + "\n";
    return message;
}






function sendOrderToWhatsApp() {
  let message = generateCartMessage(cart);

    message += "\n\nOrder Information:\n";
    message += "Name: " + document.getElementById("name").value + "\n";
    message += "Phone Number: " + document.getElementById("number").value + "\n";
    message += "Payment Method: " + document.getElementById("paymentMethod").value + "\n";
    message += "Receive Product: " + document.getElementById("deliveryMethod").value + "\n";
    
    if (document.getElementById("deliveryMethod").value === "delivery") {
      message += "Address: " + document.getElementById("address").value + "\n";
    } else if (document.getElementById("deliveryMethod").value === "pickUp") {
      message += "Pickup Location: " + document.getElementById("pickupLocation").value + "\n";
    }
   
    let phoneNumber = "+584246603768";
    let link = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);
    window.location.href = link;
    
    
      // clear the form
  form.reset();

  // clear the shopping cart
  resetCart()
}


form.addEventListener("submit", (e) => {
  e.preventDefault();
  if(!document.getElementById("deliveryMethod").value){
    showPopUpMessageRemove("seleccione un tipo de entrega")
    return
  }
  sendOrderToWhatsApp();
  resetCart();
  volverBtn();

 })


function resetCart(){
  cart = []

  updateCartCounter();
  displayCart();
  updateTotalCost();
  saveCartToLocalStorage();
  localStorage.removeItem("cart");
  cartCounter.innerText = 0;
  cartCounter.classList.remove("show");
  addressInputWrapper.style.display = "none";
  pickupLocationsWrapper.style.display = "none";
  pickUpBtn.classList.remove("active-method");
  deliveryBtn.classList.remove("active-method");
  volverBtn();
}




