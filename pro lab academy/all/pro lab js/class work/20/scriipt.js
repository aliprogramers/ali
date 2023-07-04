let arr = ['llo', true, ['mol'], false, ['kal bosh'],]
let cat = [
    {
        id: 1,
        name: 'desert'
    }, {
        id: 2,
        name: 'salat'
    }, {
        id: 3,
        name: 'fast food'
    },
]
// function detst(id) {
//     cat.forEach((item, index) => {
//         if (item['id'] == id) {
//             console.log('sd');
//             cat.splice(index, 1)
//         }
//     });
// }
// detst(2)
// console.log(cat);
let food = [
    {
        id: 1,
        catid: 1,
        name: 'cake',
        cost: 100
    }, {
        id: 2,
        catid: 2,
        name: 'sezar',
        cost: 150
    }, {
        id: 3,
        catid: 3,
        name: 'burger',
        cost: 200
    },
]
let custmers = [
    {
        id: 1,
        food: [1, 2, 3,]
    }
]
function namfood() {
    let vits = []
    vits = custmers.food
    custmers.forEach((item) => {
        for (let key of food) {
            for (let times of item) {
                if (item['id'] == key['id']) {
                    console.log('s');
                    times = key['name']
                    
                }
            }
        }
    });
}
namfood()

console.log(custmers);
