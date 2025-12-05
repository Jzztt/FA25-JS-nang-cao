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

  axios.post("http://localhost:3000/products", payload);
  location.href = "/my-project/index.html";
};
