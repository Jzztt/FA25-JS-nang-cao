const listProduct = document.getElementById("listProduct");
// listProduct.innerHTML = "<tr> <td>1</td> <td>Ao Nam</td> </tr>";
const rawHTML = (product) => {
  return `
  <tr>
    <td> ${product.id} </td>
    <td> ${product.title} </td>
    <td> <img src="${product.image}" width="100" alt=""></td>
    <td> ${product.price} </td>
    <td> ${product.quantity} </td>
    <td> ${product.category} </td>
    <td>
        <button onClick="handleDelete(${product.id})" class="btn btn-danger"> Delete </button>
        <a class="btn btn-primary" href="update.html?id=${product.id}">Update </a>
    </td>
  </tr>
  `;
};
const getProduct = async () => {
  const response = await axios.get("http://localhost:3000/products");
  const htmlRender = response.data.map(rawHTML).join("");
  listProduct.innerHTML = htmlRender;
};

getProduct();

const handleDelete = async (id) => {
  const isConfirm = confirm("Bạn có chắc chắn muốn xóa không");
  if (!isConfirm) return;
  await axios.delete("http://localhost:3000/products/" + id);
};
