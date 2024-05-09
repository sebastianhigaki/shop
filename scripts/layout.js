const navSelector = document.getElementById("nav");
const footerSelector = document.querySelector("#footer");

const options = [
  {
    title: "Ofertas",
    linkTo: "./outlet.html",
    opts: ["Laptops", "Audio", "Auticulares"],
  },
  {
    title: "Como comprar",
    linkTo: "./how.html",
    opts: ["Formas de pago", "Envios", "Devoluciones"],
  },
  {
    title: "Costos y tarifas",
    linkTo: "./taxs.html",
    opts: ["Impuestos", "Facturacion"],
  },
  {
    title: "Mis pedidos",
    linkTo: "./orders.html",
    opts: ["Pedir nuevamente", "Lista de deseos"],
  },
  {
    title: "Garantia",
    linkTo: "./warranty.html",
    opts: ["Politicas de Garantia"],
  },
];

//nav
for (let option of options) {
  const anchor = document.createElement("a");
  anchor.className = "navigation-button";
  anchor.textContent = option.title;
  anchor.href = option.linkTo;
  navSelector.appendChild(anchor);
  navSelector.style.display = "flex";
  navSelector.style.justifyContent = "space-around";
}

//footer
for (let option of options) {
  const anchor = document.createElement("a");
  anchor.className = "columns-container-button";
  anchor.textContent = option.title;
  anchor.href = option.linkTo;
  footerSelector.appendChild(anchor);

  if (option.opts.length > 0) {
    const subMenu = document.createElement("ul");
    for (let subOption of option.opts) {
      const listItem = document.createElement("li");
      const subAnchor = document.createElement("a");
      subAnchor.textContent = subOption;
      listItem.appendChild(subAnchor);
      subMenu.appendChild(listItem);
    }
    anchor.appendChild(subMenu);
  }
}

