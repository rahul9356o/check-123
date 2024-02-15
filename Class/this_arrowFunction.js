


const obj = {
    x: 10,
    y: 20,

    nested: {
        z: 30,
        y: 22,
       
        displayFromInner: () => {
            // this.x = 33;
            console.log(`value of x is ${this.x} and value of y is ${this.y}`);
        }

        //jabhi arrow function ata heto value exiss karnekeliye vaha value this. se likhi hui honi chahiye 

    },


    displayFromInner2: function () {

        console.log(`value of x is ${this.x} and value of y is ${this.y}`);
    },

}

// in arrow function this is lesical scoping will do =>pahile swthala chack karel then warcha perental then warchya .... ki koni this keyword variabl value  aheki nahi 

obj.nested.displayFromInner();

obj.displayFromInner2();