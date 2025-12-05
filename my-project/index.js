const listProduct = document.getElementById("listProduct");
// listProduct.innerHTML = "<tr> <td>1</td> <td>Ao Nam</td> </tr>";
const rawHTML = (product) => {
  return `
  <tr>
    <td> ${product.id} </td>
    <td> ${product.title} </td>
    <td> <img href="${product.image}" alt=""></td>
    <td> ${product.price} </td>
    <td> ${product.quantity} </td>
    <td> ${product.category} </td>
  </tr>
  `
}
const getProduct = async () => {
  const response = await axios.get("http://localhost:3000/products");
  const htmlRender = response.data.map(rawHTML).join("");
  listProduct.innerHTML =htmlRender

};

getProduct();
