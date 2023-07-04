// let foods = {
//     food1: {
//         id: 1,
//         name: "Pepperoni",
//         categoryId: 1,
//         cost: 150,
//     },
//     food2: {
//         id: 2,
//         name: "4 sezona",
//         categoryId: 1,
//         cost: 200,
//     },
//     food3: {
//         id: 3,
//         name: "Borsh",
//         categoryId: 2,
//         cost: 400,
//     },    food4: {
//         id: 4,
//         name: "Pepperoni",
//         categoryId: 1,
//         cost: 150,
//     },
//     food5: {
//         id: 5,
//         name: "4 sezona",
//         categoryId: 1,
//         cost: 200,
//     },
//     food6: {
//         id: 6,
//         name: "Borsh",
//         categoryId: 2,
//         cost: 400,
//     },
// };

// let users = {
//     user1: {
//         id: 1,
//         name: "Nurzoid",
//         status: "Povar",
//     },
//     user2: {
//         id: 2,
//         name: "Luy",
//         status: "Konditer",
//     },
//     user3: {
//         id: 3,
//         name: "Bektur",
//         status: "Shef",
//     },
//     user4: {
//         id: 4,
//         name: "LuHELLOy",
//         status: "KHWLLOonditer",
//     },
//     user5: {
//         id: 5,
//         name: "BekBYtur",
//         status: "BYSD",
//     },
// };
// let categoryes = {
//     category1: {
//         id: 1,
//         name: "Pizza",
//     },
//     category2: {
//         id: 2,
//         name: "Sup",
//     },
//     category3: {
//         id: 3,
//         name: "Desert",
//     },
//     category4: {
//         id: 4,
//         name: "Salat",
//     },
// };
// let statuses = {
//     status1: {
//         id: 1,
//         name: "Su-shef",
//     },
//     status2: {
//         id: 2,
//         name: "Povar",
//     },
//     status3: {
//         id: 3,
//         name: "Uborshiki",
//     },
//     status4: {
//         id: 4,
//         name: "Kanditer",
//     },
//     status5: {
//         id: 5,
//         name: "KanEEEEEditer",
//     },
// };
// let customers = {
//     customer1: {
//         id: 1,
//         foodId: 1,
//         count: 4,
//         total: function () { },
//     },
//     customer2: {
//         id: 2,
//         foodId: 3,
//         count: 5,
//         total: function () { },
//     },
// };
//   function getFoodWithCategory() {
//     let foodCat = {};
//     for (let key in foods) {
//       for (let key2 in categoryes) {
//         if (foods[key]["categoryId"] == categoryes[key2]["id"]) {
//           if (categoryes[key2]['name'] in foodCat) {
//             let size = Object.keys(foodCat[categoryes[key2]['name']]).length
//             foodCat[categoryes[key2]['name']]['food' + (size + 1)] = foods[key]['name']
//           }else {
//             foodCat[categoryes[key2]['name']] = {'food1': foods[key]['name']}
//           }
//         }
//       }
//       console.log(foodCat);
//     }
//   }
//   getFoodWithCategory();








// function updete(workerid, cost) {
//     for (let key in foods) {
//         for (let key2 in users) {
//             if (foods[key]['categoryId'] == 1 || foods[key]['categoryId'] == 2) {
//                 if (foods[key]["cost"] != cost) {
//                     if (workerid == foods[key]['id']) {
//                         foods[key]['cost'] = cost
//                         console.log(foods);
//                         continue
//                     }
//                 }
//             }
//             else {
//                 break
//             }
//         }
//     }
// }
// updete(2, 3003);




// function deletes(workerid) {
//     for (let key in foods) {
//         if (foods[key]['categoryId'] == 1 || foods[key]['categoryId'] == 3) {
//             if (workerid == foods[key]['id']) {
//                 delete foods[key]
//                 continue
//             }
//         }
//         else if (foods[key]['categoryId'] == 3 ) {
//             break
//         }
//     }

// }
// deletes(2);
// console.log(foods);






// function getFoodWithCategory() {
//     let foodCat = {};
//     for (let key in users) {
//             for (let key2 in statuses) {
//                 if (users[key]["id"] == statuses[key2]["id"]) {
//                     if (statuses[key2]['name'] in foodCat) {
//                         let size = Object.keys(foodCat[statuses[key2]['name']]).length
//                         foodCat[statuses[key2]['name']]['food' + (size + 1)] = users[key]['name']
//                     } else {
//                         foodCat[statuses[key2]['name']] = { 'user': users[key]['name'] }
//                     }   
//                 }
//         }
//     }
//     console.log(foodCat);
// }
// getFoodWithCategory();


let foods = {
    food1: {
        id: 1,
        name: 'Piperoni',
        categoryId: 1,
        cost: 150
    },
    food2: {
        id: 2,
        name: '4 sezona',
        categoryId: 1,
        cost: 200
    },
    food3: {
        id: 3,
        name: 'Borsh',
        categoryId: 2,
        cost: 400
    },
    food4: {
        id: 4,
        name: 'Mastava',
        categoryId: 1,
        cost: 400
    },
}


let users = {
    user1: {
        id: 1,
        name: 'Aziz',
        statusId: 1
    },
    user2: {
        id: 2,
        name: 'Baibolot',
        statusId: 2
    },
    user3: {
        id: 3,
        name: 'Oroz',
        statusId: 3
    },
    user4: {
        id: 4,
        name: 'Nurik',
        statusId: 4
    },
    user5: {
        id: 5,
        name: 'Kanat',
        statusId: 5
    },
}

// console.log(users);

let categories = {
    cat1: {
        id: 1,
        name: 'Pizza'
    },
    cat2: {
        id: 2,
        foodId: 2,
        name: 'Sup'
    },
    cat3: {
        id: 3,
        foodId: 3,
        name: 'Desert'
    },
    cat4: {
        id: 4,
        foodId: 4,
        name: 'Salat'
    },
}

let customers = {
    customer1: {
        id: 1,
        foodId: 1,
        count: 4,
        total: function getTotal() {

        }
    },
    customer2: {
        id: 2,
        foodId: 3,
        count: 3,
        total: function getTotal() {

        }
    },
}

let statuses = {
    status1: {
        id: 1,
        name: 'Su-shef'
    },
    status2: {
        id: 2,
        name: 'Povar'
    },
    status3: {
        id: 3,
        name: 'Uborshik'
    },
    status4: {
        id: 4,
        name: 'Konditer'
    },
    status5: {
        id: 5,
        name: 'Shef'
    },
}


let ask = {}

function askfood() {

    for (let key in foods) {
        for (let key2 in categories) {
            if (foods[key]['categoryId'] == categories[key2]['id']) {
                if (categories[key2]['name'] in ask) {
                    let askk = Object.keys(ask[categories[key2]['name']]).length
                    ask[categories[key2]['name']] += 1
                }
                else {
                    ask[categories[key2]['name']] = 1
                }

            }

        }
        // console.log(ask);
    }

}


askfood()
let top1 = {}
function tos() {
    for (let key in ask) {
        if(Object.keys(top1).length == 0){
            top1[key]= ask[key]
            continue
        }
        if(top1[Object.keys(top1)[0]] < ask[key]){
            delete top1(Object.keys(top1)[0])
            top1[key] = ask[key]
            
        }
console.log(top1);
        
    }
}
tos()