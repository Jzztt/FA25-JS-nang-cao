// function là nơi thực hiện 1 hành động ( khai báo hàm + gọi hàm)
// Declare function ( function + tên hàm(){ logic hàm})
function printName(){
    console.log('LVH');
}

printName();

// expression function

const printAge = function(){
    console.log('18');
}
printAge();


// arrow function
const printMssv = () => {
    console.log('GPH3368');
}

printMssv();

// Tham số và đối số của hàm
// tham số
const printAddress = (city)=> {
    console.log(city);
}
// đối số
printAddress('Hà Nội');
printAddress('Vĩnh Phúc');


