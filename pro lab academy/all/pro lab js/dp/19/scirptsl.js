// let categorys = [
//     {
//         id: 1,
//         name: 'desert'
//     },
//     {
//         id: 2,
//         name: 'salat'
//     },
//     {
//         id: 3,
//         name: 'fast food'
//     },
//     {
//         id: 4,
//         name: 'pizza'
//     }
// ]
// let foods = [
//     {
//         id: 1,
//         name: 'shokolatni veter',
//         catid: 1,
//         cost: 150
//     },
//     {
//         id: 2,
//         name: 'shaurma',
//         catid: 3,
//         cost: 300
//     },
//     {
//         id: 3,
//         name: 'pancho',
//         catid: 1,
//         cost: 100
//     },
//     {
//         id: 4,
//         name: 'perpironi',
//         catid: 4,
//         cost: 420
//     },
//     {
//         id: 5,
//         name: 'sezar',
//         catid: 2,
//         cost: 180
//     },
// ]

// let custmers = [
//     {
//         id: 1,
//         foods: [1, 2, 2, 3]
//     },
//     {
//         id: 2,
//         foods: [2, 2, 3]
//     },
//     {
//         id: 3,
//         foods: [1, 4, 5, 5,]
//     }
// ]

// function findelementsbyId(id) {
//     let array = []
//     for (let item of foods) {
//         if (item['catid'] == id) {
//             array.push(item)
//         }
//     }
//     console.log(array);
// }
// findelementsbyId(1)

// function findelementsbyid(id) {
//     let array = []


//     foods.forEach((item) => {
//         if (item['catid'] == id) {
//             array.push(item)
//         }
//     })
//     console.log(array);
// }
// findelementsbyid(1)
// function findelementscat(id) {
//     let rsutsl = foods.filter((item) => {
//         if (id == item['catid']) {
//             return item
//         }
//     })
//     console.log(rsutsl);
// }
// findelementscat(1)
// function getfasfbyminmax(min, max) {
//     let fustusl = []
//     for (let item of foods) {
//         if (min == item['cost'] || max == item['cost']) {
//             fustusl.push(item)
//         }
//     }
//     console.log(fustusl);
// }
// getfasfbyminmax(100, 300)
// // function getfoodsdbymincmacsoc(min ,max) {
// //     let rusts = foods.forEach((item)=>{
// //         if(min == item['cost'] || max == item['cost']){
// //         rusts.push(item)
// //         }
// //     })
// //     console.log(rusts);
// // }    
// // getfoodsdbymincmacsoc(100,200)
// function getfoodsbyminmaccost(min, max) {
//     let rustult = foods.filter((item) => {
//         if (min == item['cost'] || max == item['cost']) {
//             return item
//         }
//     })
//     console.log(rustult);
// }
// getfoodsbyminmaccost(100, 410)
// function getpoplewoeb(id) {
//     let result = []

//     for (let itme of custmers) {
//         if (itme['foods'].includes(id)) {
//             result.push(itme)
//         }
//     }
//     return result
// }
// getpoplewoeb(1)

let obj = [
    {
        id: 1,
        name: "Usuf",
        salary: "1000r"
    },
    {
        id: 2,
        name: "Sabur",
        salary: "200$"
    },
    {
        id: 3,
        name: "Malik",
        salary: "10$"
    },
    {
        id: 4,
        name: "Sarvinbek",
        salary: "1000som"
    },
    {
        id: 5,
        name: "Mashabek",
        salary: "300$"
    },
    {
        id: 5,
        name: "Gulpiaz",
        salary: "300e"
    },
]

function valuta(min, max) {
   let rustult = obj.filter(item => {
        let money=0
        if (item.salary.endsWith('$')) {
            money +=  parseInt(item.salary) * 82
        }
        else if (item.salary.endsWith('e')) {
            money += parseInt(item.salary) * 95
        }
        else if (item.salary.endsWith('som')) {
            money +=  parseInt(item.salary) * 0.007
        }
        else if (item.salary.endsWith('r')) {
            money += parseInt(item.salary)* 1.3
        }
        if (money >= min && money <= max) {
            return item
        }

    })
    console.log(rustult);
}
valuta(1000, 2000)