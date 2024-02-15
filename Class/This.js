
const obj = {
    x: 10,
    y: 20,

    nested: {
        z: 30,
        y: 22,

        displayFromInner: function () {
            console.log(`value of x is ${this.x} and value of y is ${this.y}`);
        }

    },

    displayFromInner2: function () {
        console.log(`value of x is ${this.x} and value of y is ${this.y}`);
    },

}



obj.nested.displayFromInner();

obj.displayFromInner2();
