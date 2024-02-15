const mp = new Map();

mp.set('Name', 'rahul')
mp.set('age', '20')
mp.set('hobby', 'coding')

console.log(mp);

for (entry of mp) {
    console.log(entry);
}

// mp.forEach((key) => {
//     console.log(key);
// })

mp.forEach((key, value) => {
    console.log(key, value);
})

