

const obj = {

    x: 10,
    y: 20,



    display: function () {
        console.log(`value of x is ${this.x} and value of y is ${this.y}`);

        //upar ki this.x and this.y Ki Value Inner ke andarke Arrow Function Ko jA Rahi he 

        const innerobj = {
            x: -1,
            y: -2,

            inner: () => {
                
                console.log(`value of x is ${this.x} and value of y is ${this.y}`);

            }
        }

        innerobj.inner();


    },

}


obj.display();