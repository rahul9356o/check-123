
// const a = new Set ([ 2, 3, 1, 1, -1 ]);
// console.log(a);

// // set karneke badha koibhi ripit nahi hotahe 1, 1 => 1

// a.add(10);

// console.log(a);





function Product(name, price) {
    this.name = name;
    this.price = price;
}

const p = new Product("Iphone", 1200000);
console.log(p);

Product.prototype.display = function () {
    console.log("Details of product are", this);
}

p.display();

// if you want to access Product.prototype from p,
console.log(p.__proto__);