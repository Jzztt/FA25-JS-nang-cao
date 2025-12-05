const id = location.search.split("=")[1];
const getProductById = async () => {
  if (!id) return;
  const { data } = await axios.get("http://localhost:3000/products/" + id);
  document.getElementById("title").value = data.title;
  document.getElementById("image").value = data.image;
  document.getElementById("price").value = data.price;
  document.getElementById("quantity").value = data.quantity;
  document.getElementById("category").value = data.category;
};

getProductById();

const handleSubmit = async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const image = document.getElementById("image").value;
  const price = document.getElementById("price").value;
  const quantity = document.getElementById("quantity").value;
  const category = document.getElementById("category").value;

  if (!title || !image || !price || !quantity || !category) {
    return alert("Vui lòng nhập đầy đủ thông tin");
  }
  const payload = {
    title,
    image,
    price: Number(price),
    category,
    quantity,
  };


  axios.put("http://localhost:3000/products/" + id, payload);
  location.href = "/my-project/index.html";
};
