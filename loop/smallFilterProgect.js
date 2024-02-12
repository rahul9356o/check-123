

const book = [
    {
        tital: 'Book1', genre: 'Friction', Publish: 1982,
        edition: 2004
    },

    {
        tital: 'Book2', genre: 'Histry', Publish: 1992,
        edition: 2008
    },

    {
        tital: 'Book3', genre: 'non-Friction', Publish: 1999,
        edition: 2007
    },

    {
        tital: 'Book4', genre: 'Friction', Publish: 1989,
        edition: 2010
    },

    {
        tital: 'Book5', genre: 'Histry', Publish: 2009,
        edition: 2014
    }
]


const userBooks = book.filter( (bk) => bk.genre === 'Friction')

// console.log(userBooks);



const userBooks2 = book.filter( (bk) =>{

    return bk.Publish >= 2000

} )

// console.log(userBooks2);


const userBooks3 = book.filter( (bk) => bk.genre === 'Histry' && bk.edition <= 2010 )

console.log(userBooks3); 