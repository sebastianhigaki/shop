const products = [
  {
    id: 1,
    image: "assets/mock1.jpg",
    title: "Macbook Pro 15'4",
    description: "Black",
    price: 3399,
    discount: 15,
    taxPolicy: "Incluye impuesto País y percepción AFIP",
  },
  {
    id: 2,
    image: "assets/mock2.jpg",
    title: "Macbook Air 13'3",
    description: "Space Gray",
    price: 1500,
    discount: 5,
    taxPolicy: "Incluye impuesto País y percepción AFIP",
  },
  {
    id: 3,
    image: "assets/mock1.jpg",
    title: "Macbook Pro 16'0",
    description: "White",
    price: 4200,
    discount: 50,
    taxPolicy: "Incluye impuesto País y percepción AFIP",
  },
  {
    id: 4,
    image: "assets/mock2.jpg",
    title: "Macbook Air 13'3",
    description: "Space Black",
    price: 3500,
    discount: 50,
    taxPolicy: "Incluye impuesto País y percepción AFIP",
  },
  {
    id: 5,
    image: "assets/mock1.jpg",
    title: "Iphone 12",
    description: "Gray",
    price: 900,
    discount: 10,
    taxPolicy: "Incluye impuesto País y percepción AFIP",
  },
  {
    id: 6,
    image: "assets/mock2.jpg",
    title: "Macbook Air 12'9",
    description: "Gold",
    price: 5000,
    discount: 30,
    taxPolicy: "Incluye impuesto País y percepción AFIP",
  },
];


const productsSelector = document.getElementById("products");

function createCard(product) {
  return `
    <article class="product-card">
      <a class="product-card" href="./details.html?id=${product.id}">
          <img class="product-img" src="${product.image}" alt="${product.title}">
          <div class="product-info">
            <span class="product-title">${product.title}</span>
            <span class="product-description">${product.description}</span>
            <div class="product-price-block">
              <span class="price">$${product.price}</span>
              <span class="discount">${product.discount}% Off</span>
            </div>
            <div class="product-tax-policy">${product.taxPolicy}</div>
          </div>
      </a>
    </article>
  `;
}

let productsTemplate = "";
for (const product of products) {
  productsTemplate += createCard(product);
}

productsSelector.innerHTML = productsTemplate;

function printCards(arrayOfProducts, idSelector) {
  let productsTemplate = "";
  for (const element of arrayOfProducts) {
    productsTemplate = productsTemplate + createCard(element);
  }
  const productsSelector = document.getElementById(idSelector);
  productsSelector.innerHTML = productsTemplate;
}
printCards(products, "products");
