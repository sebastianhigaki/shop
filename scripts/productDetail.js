const query = location.search;
const params = new URLSearchParams(query);
const id = params.get("id");
console.log(id);

function printDetails(products, id) {
  const product = products.find((product) => product.id == id);
  const detailsTemplate = `
      <div id="Detail" class="columns-container">
        <div class="product-images-block">
          ${product.image
            .map(
              (img, index) => `
                <div class="thumbnail-container">
                  <img class="miniature" src="${img}" alt="${
                product.title
              } imagen ${index + 1}" />
                </div>
              `
            )
            .join("")}
          <img class="main-image" src="${product.image[0]}" alt="${
    product.title
  }" />
        </div>
        <div class="product-description-block">
          <h1 class="title">${product.title}</h1>
          <form class="selector">
            <fieldset>
              <label class="label" for="color">Color</label>
              <select type="text" placeholder="Selecciona un color">
                ${product.colors
                  .map((color) => `<option value="${color}">${color}</option>`)
                  .join("")}
              </select>
            </fieldset>
          </form>
          <div class="description">
            <h1>Descripcion:</h1>
            <p>${product.description}</p>
          </div>
        </div>
        <div class="product-checkout-block">
          <span class="checkout-total-label">Total:</span>
          <h2 class="checkout-total-price">$${product.price}</h2>
          <!-- Aquí van las políticas de envío y proceso de compra -->
          <p class="checkout-description">
            Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$ 50711 haciendo la solicitud en AFIP.
          </p>
          <ul class="checkout-policy-list">
            <li>
              <span class="policy-icon"><img src="../assets/truck.png" alt="Truck"/></span>
              <span class="policy-desc">Agrega el producto al carrito para conocer los costos de envío</span>
            </li>
            <li>
              <span class="policy-icon"><img src="../assets/plane.png" alt="Plane"/></span>
              <span class="policy-desc">Recibe aproximadamente entre 5 y 10 días hábiles, seleccionando envío normal</span>
            </li>
          </ul>
          <div class="checkout-process">
            <div class="top">
              <input type="number" value="1" />
              <button class="btn-primary">Comprar</button>
            </div>
            <div class="bottom">
              <button class="btn-outline">Añadir al Carrito</button>
            </div>
          </div>
        </div>
      </div>
    `;

  const detailsSelector = document.querySelector("#details");
  detailsSelector.innerHTML = detailsTemplate;

  function handleMiniatureClick(event) {
    const clickedImageSrc = event.target.getAttribute("src");
    const mainImage = document.querySelector(".main-image");
    mainImage.setAttribute("src", clickedImageSrc);
  }
  const miniatureImages = document.querySelectorAll(".miniature");
  miniatureImages.forEach((image) => {
    image.addEventListener("click", handleMiniatureClick);
  });
}

printDetails(products, id);
