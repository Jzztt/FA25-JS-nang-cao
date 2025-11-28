// 1. DOM Là gì ? ( Document Object Model )
const user = {
  name: "LVH",
  mssv: "GPH3368",
};
// document là đối tượng, getElementbyId là phương thức, innerHTML là thuộc tính

document.getElementById("demo").innerHTML = "Hello";

// 2. Truy cập phần tử HTML
// document.getElementById(id) trả ra đối tượng HTML element
console.log("getElementById", document.getElementById("demo"));

//getElementsByTagName trả ra mảng HTML collection
console.log("getElementsByTagName", document.getElementsByTagName("a"));

// document.getElementsByClassName(name) trả ra mảng HTML collection

console.log(
  "getElementsByClassName",
  document.getElementsByClassName("section")
);


// 3. Thay đổi các phần tử HTML
document.getElementById("demo").style.color= "red";
document.getElementById("demo").setAttribute('class', "mydemo");

// 4. Thêm và xóa phần tử
// Tạo ra element div
const myDiv= document.createElement('div');
const styles = document.createAttribute('style');
styles.value = "color:red";
// thêm giá trị text
myDiv.textContent = "bYe";
myDiv.setAttributeNode(styles);
// thêm thẻ div vào body
document.body.appendChild(myDiv);

