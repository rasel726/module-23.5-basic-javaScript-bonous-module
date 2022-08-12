const nayok = {
    name: 'Sakib Khan',
    id: 121,
    address: 'movie chinema',
    isSingle: true,
    friends: ['Apu', 'Raaz', 'Salman', 'Aamir'],
    movies: [{name: 'no. 1', year: 2015}, {name: 'kinng Khan', year: 2028}],
    act: function(){
        console.log('Acting like Sakib Khan');
    },
    car: {
        brand: 'Tesla',
        price: 50000000,
        made: 2025,
        manifacturar: {
            name: 'Tesla',
            ceo: 'Elon Mask',
            country: 'USA'
        }
    }
}

// console.log(student.car);
console.log(nayok.act);
nayok.act();