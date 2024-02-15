
class product{

    constructor( n, p, d, i ){
        console.log("loggin This Befour Allocating Values", this);

        this.pruductName = n;
        this.price = p;
        this.description = d;
        this.image = i;
        this.rating = 0;

        console.log("Creating an Object",this);

    }

    byproduct (){
        console.log("ought new product");
    }
}

const obj = new product();

console.log(obj);

const obj2 =new product("s23", 90000, "Samsang Galaxy", "Some images");

console.log(obj2);

