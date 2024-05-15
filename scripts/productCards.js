const products = [
  {
    id: 1,
    image: ["assets/mock1.jpg", "assets/mock2.jpg", "assets/mock1.jpg", "assets/mock2.jpg", "assets/mock1.jpg"], 
    title: "Macbook Pro 15'4",
    colors: ["Black", "Silver", "Gold"],
    description: "Experimenta el rendimiento revolucionario del chip M1 de Apple en la MacBook Pro 13, con una pantalla Retina de 13 pulgadas y colores vibrantes. Equipada con opciones de almacenamiento SSD ultrarrápidas y hasta 16 GB de memoria unificada, ofrece potencia y eficiencia para tus proyectos más exigentes. Además, cuenta con Thunderbolt 3 para una conectividad rápida y versátil.",
    price: 3399,
    discount: 15,
    taxPolicy: "Incluye impuesto País y percepción AFIP",
  },
  {
    id: 2,
    image: ["assets/mock2.jpg", "assets/mock1.jpg", "assets/mock2.jpg", "assets/mock1.jpg", "assets/mock2.jpg"],
    title: "Macbook Air 13'3",
    colors: ["Space Gray", "Silver", "Gold"],
    description: "Experimenta el rendimiento revolucionario del chip M1 de Apple en la MacBook Pro 13, con una pantalla Retina de 13 pulgadas y colores vibrantes. Equipada con opciones de almacenamiento SSD ultrarrápidas y hasta 16 GB de memoria unificada, ofrece potencia y eficiencia para tus proyectos más exigentes. Además, cuenta con Thunderbolt 3 para una conectividad rápida y versátil.",
    price: 1500,
    discount: 5,
    taxPolicy: "Incluye impuesto País y percepción AFIP",
  },
  {
    id: 3,
    image: ["assets/mock1.jpg", "assets/mock2.jpg", "assets/mock1.jpg", "assets/mock2.jpg", "assets/mock1.jpg"],
    title: "Macbook Pro 16'0",
    colors: ["Black", "Silver", "Gold"],
    description: "Experimenta el rendimiento revolucionario del chip M1 de Apple en la MacBook Pro 13, con una pantalla Retina de 13 pulgadas y colores vibrantes. Equipada con opciones de almacenamiento SSD ultrarrápidas y hasta 16 GB de memoria unificada, ofrece potencia y eficiencia para tus proyectos más exigentes. Además, cuenta con Thunderbolt 3 para una conectividad rápida y versátil.",
    price: 4200,
    discount: 50,
    taxPolicy: "Incluye impuesto País y percepción AFIP",
  },
  {
    id: 4,
    image: ["assets/mock2.jpg", "assets/mock1.jpg", "assets/mock2.jpg", "assets/mock1.jpg", "assets/mock2.jpg"],
    title: "Macbook Air 13'3",
    colors: ["Space Gray", "Silver", "Gold"],
    description: "Experimenta el rendimiento revolucionario del chip M1 de Apple en la MacBook Pro 13, con una pantalla Retina de 13 pulgadas y colores vibrantes. Equipada con opciones de almacenamiento SSD ultrarrápidas y hasta 16 GB de memoria unificada, ofrece potencia y eficiencia para tus proyectos más exigentes. Además, cuenta con Thunderbolt 3 para una conectividad rápida y versátil.",
    price: 3500,
    discount: 50,
    taxPolicy: "Incluye impuesto País y percepción AFIP",
  },
  {
    id: 5,
    image: ["assets/mock1.jpg", "assets/mock2.jpg", "assets/mock1.jpg", "assets/mock2.jpg", "assets/mock1.jpg"],
    title: "Iphone 12",
    colors: ["Black", "Silver", "Gold"],
    description: "Experimenta el rendimiento revolucionario del chip M1 de Apple en la MacBook Pro 13, con una pantalla Retina de 13 pulgadas y colores vibrantes. Equipada con opciones de almacenamiento SSD ultrarrápidas y hasta 16 GB de memoria unificada, ofrece potencia y eficiencia para tus proyectos más exigentes. Además, cuenta con Thunderbolt 3 para una conectividad rápida y versátil.",
    price: 900,
    discount: 10,
    taxPolicy: "Incluye impuesto País y percepción AFIP",
  },
  {
    id: 6,
    image: ["assets/mock2.jpg", "assets/mock1.jpg", "assets/mock2.jpg", "assets/mock1.jpg", "assets/mock2.jpg"],
    title: "Macbook Air 12'9",
    colors: ["Space Gray", "Silver", "Gold"],
    description: "Experimenta el rendimiento revolucionario del chip M1 de Apple en la MacBook Pro 13, con una pantalla Retina de 13 pulgadas y colores vibrantes. Equipada con opciones de almacenamiento SSD ultrarrápidas y hasta 16 GB de memoria unificada, ofrece potencia y eficiencia para tus proyectos más exigentes. Además, cuenta con Thunderbolt 3 para una conectividad rápida y versátil.",
    price: 5000,
    discount: 30,
    taxPolicy: "Incluye impuesto País y percepción AFIP",
  },
];


const productsSelector = document.getElementById("products");

function createCard(product) {
  let imageSrc;
  if (Array.isArray(product.image)) {
    imageSrc = product.image[0];
  }
  return `
    <article class="product-card">
      <a class="product-card" href="./details.html?id=${product.id}">
          <img class="product-img" src="${imageSrc}" alt="${product.title}">
          <div class="product-info">
            <span class="product-title">${product.title}</span>
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
