let oal = {
    drinks: {
        drink1: {
            id: 1,
            name: "Pepsi",
            cost: 50
        },
        drink2: {
            id: 2,
            name: "Fanta",
            cost: 60
        }
    },



    foods: {
        drink3: {
            id: 3,
            name: "Burger",
            cost: 100
        },
        drink4: {
            id: 4,
            name: "CheesBurger",
            cost: 150
        }
    }
}

  function cread(name,cost) {
    let length = 0
    for(let key in oal.foods){

            length++


        }

    oal['drink']={
        id:(length+1),
        name:name,
        cost:cost
    }

  }
  cread('lavash',200)
  console.log(oal);

// function reads(id) {
//     for (let key in oal) {
//         for (let key2 in oal[key])
//             if (oal[key][key2]['id'] == id) {
//                 console.log(oal[key][key2])
//             }
//     }
// }
// reads(2)

// function deletes(id) {
//     for (let key in oal) {
//         for(let key2 in oal[key])
//         if (oal[key][key2]['id'] == id) {
//             delete oal[key][key2]
//         }
//     }
// }
// deletes(2)
// console.log(oal)

// function updete(id, name, cost) {
//     for (let key in oal) {
//         for (let key2 in oal[key]) {
//             if (oal[key][key2]['id'] == id) {
//                 oal[key][key2] = oal[key]['drinks'] = {
//                     id: id,
//                     name: name,
//                     cost: cost,
//                 }
//                 delete oal[key][key2]
//             }
//         }
//     }
//     console.log(oal);
// }
// updete(2, 'hehe', 200)
