// Kiểu dữ liệu
// Kiểu dữ liệu đơn giản
// "" => string
var stringVariable = "demo";
console.log(typeof stringVariable);
// 18 => number
var numberVariable = 18;
console.log(typeof numberVariable);
// true/False => boolean
var booleanVariable = true;
console.log(typeof booleanVariable);
// undefine => undefine
var undefineVariable;
console.log(typeof undefineVariable);
// null => object
var nullVariable = null;
console.log(typeof nullVariable);

// Kiểu dữ liệu phức tạp
// Array
const arr = [1, 2, 3, 4, 5];
console.log(typeof arr); // object
// Object ( Phương thức  và thuộc tính)
const obj = {
  // key: value
  name: "Nguyen Van A",
  age: 18,
  printName: function () {
    console.log(this.name);
  },
};
console.log(typeof obj);

// function
const getName = () => {
    console.log('lvh');

}
console.log(typeof getName);


