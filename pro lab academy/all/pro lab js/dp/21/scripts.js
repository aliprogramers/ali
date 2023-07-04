let categoreis = [
    {
        id: 1,
        name: 'desert'
    },
    {
        id: 2,
        name: 'salat'
    },
    {
        id: 3,
        name: 'fast food'
    }
]
let food = [
    {
        id: 1,
        catid: 1,
        name: 'emler',
        cost: '100$'
    },
    {
        id: 2,
        catid: 2,
        name: 'sezar',
        cost: '200e'
    },
    {
        id: 3,
        catid: 3,
        name: 'burger',
        cost: '150r'
    },
]
let custmer = [
    {
        id: 1,
        food: [1, 1, 2, 2, 3, 3]
    },
    {
        id: 2,
        food: [1, 1, 2, 2]
    },
    {
        id: 3,
        food: [1, 1, 1, 1, 3, 3]
    },

]
function lovercae() {
    let i = 0
    food= food.map(itme=>{
        i++
        if(i <= 3){
            return itme.name[i].toUpperCase()
            
        }
        })
}
lovercae()
function lovercae2() {
    let i = categoreis.length
    let s = categoreis.forEach(itme2=>{
        itme2.name = itme2.map(itme=>{
            i--
            if(i <= 3){
                return itme2.name = itme.name[i].toUpperCase()
                
            }
            })
    })
    
}
lovercae2()
// console.log(food);
console.log(categoreis);

// function checagemany() {
//     food = food.map(item => {
//         if (item.cost.endsWith('$')) {
//             item.cost = parseInt(item.cost) * 86
//         }
//         else if (item.cost.endsWith('e')) {
//             item.cost = parseInt(item.cost) * 97
//         }
//         else if (item.cost.endsWith('r')) {
//             item.cost = parseInt(item.cost) * 1.2
//         }
//         return item
//     })
// }

// // checagemany()
// function chatagecatgory() {
//     food = food.map(item => {
//         item.catid = categoreis.find(itme2 => item.catid == itme2.id)['name']
//         return item

//     })

// }
// chatagecatgory()

// // function chngenamgategory() {
// //     food = food.map(itme => {
// //         itme.catid = categoreis.find(itme2 => itme2.id == itme.catid)
// //         return itme

// //     })
// // }
// // chngenamgategory()
// // function checname() {
// //     categoreis = categoreis.map(category=>
// //         category.name = category.name.toUpperCase())
// // }
// // checname()
// // function chncecustmer() {
// //     custmer = custmer.map(itme => {
// //         let total = 0
// //         itme.food = itme.food.map(itme2 => {
//             let versol = food.find(food => {
//                 if (food.id == itme2) {
//                     // console.log(food);
//                     total += food.cost
//                     return food.name
//                 }
//             })
//             custmer['toal'] = total
//             return custmer
//         })
//     })
// }
// chncecustmer()
// console.log(food);
