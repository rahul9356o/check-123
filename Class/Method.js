
class product {

    constructor(n, p, d, i) {
   

        this.pruductName = n;
        this.price = p;
        this.description = d;
        this.image = i;
        this.rating = 0;

      

    }

    byproduct() {
        console.log("ought new product");
    }
}

const obj = new product("S23", 20000, "Samsang galaxy", "img");

obj.byproduct();

console.log(obj);
obj.byproduct();

