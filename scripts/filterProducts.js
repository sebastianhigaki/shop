const searchSelector = document.querySelector("#search");
searchSelector.addEventListener("keyup", (event) => captureText(event));

function captureText(event) {
  console.log(event.key);
  console.log("target: ", event.target);
  const eventProperties = [
    "key: " + event.key,
    "code: " + event.code,
    "location: " + event.location,
    "ctrlKey: " + event.ctrlKey,
  ];
  console.log("KeyboardEvent:", eventProperties);

  const searchText = event.target.value.toLowerCase().trim();
  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchText) ||
      product.description.toLowerCase().includes(searchText)
  );
  printCards(filteredProducts, "products");
}
