// getElementById trả ra HTML element
const paragraph = document.getElementById("demo");
console.log("paragraph", paragraph);
// getElementsByClassName trả ra HTML collection
const content = document.getElementsByClassName("container");
console.log("content", content);
// querySelector trả ra element
const myNode = document.querySelector("#demo");
console.log("myNodeList", myNode);
// querySelectorAll trả ra NodeList
const myNodeList = document.querySelectorAll(".container");
console.log("myNodeList", myNodeList);
