let foods = {
    food1: {
        id: 1,
        name: "Pepperoni",
        categoryId: 1,
        cost: 150,
    },
    food2: {
        id: 2,
        name: "4 sezona",
        categoryId: 2,
        cost: 200,
    },
    food3: {
        id: 3,
        name: "Borsh",
        categoryId: 3,
        cost: 400,
    }, food4: {
        id: 4,
        name: "Pepperoni",
        categoryId: 4,
        cost: 150,
    },
    food5: {
        id: 5,
        name: "4 sezona",
        categoryId: 5,
        cost: 200,
    },
    food6: {
        id: 6,
        name: "Borsh",
        categoryId: 6,
        cost: 400,
    },
};

let users = {
    user1: {
        id: 1,
        name: "Nurzoid",
        status: "Povar",
    },
    user2: {
        id: 2,
        name: "Luy",
        status: "Konditer",
    },
    user3: {
        id: 3,
        name: "Bektur",
        status: "Shef",
    }, user4: {
        id: 4,
        name: "konfeter",
        status: "konfet",
    },
    user5: {
        id: 5,
        name: "shkolad",
        status: "sholader",
    },
    user6: {
        id: 6,
        name: "tertertert",
        status: "ertertert",
    },
};
let categoryes = {
    category1: {
        id: 1,
        name: "Pizza",
    },
    category2: {
        id: 2,
        name: "Sup",
    },
    category3: {
        id: 3,
        name: "Desert",
    },
    category4: {
        id: 4,
        name: "Salat",
    },
};
let statuses = {
    status1: {
        id: 1,
        name: "Su-shef",
    },
    status2: {
        id: 2,
        name: "Povar",
    },
    status3: {
        id: 3,
        name: "Uborshiki",
    },
    status4: {
        id: 4,
        name: "Kanditer",
    },
};
let customers = {
    customer1: {
        id: 1,
        foodId: 1,
        count: 4,
        total: function () { },
    },
    customer2: {
        id: 2,
        foodId: 3,
        count: 5,
        total: function () { },
    },
};
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
function getFoodWithCategory() {
    let foodCat = {};
    for (let key in users) {
        for (let key3 in foods) {
            for (let key2 in categoryes) {
                if (foods[key3]['categoryId'] == users[key]['id']) {
                    if (foods[key3]["categoryId"] == users[key]["id"]) {
                        if (categoryes[key2]['name'] in foodCat) {
                            let size = Object.keys(foodCat[categoryes[key2]['name']]).length
                            foodCat[categoryes[key2]['name']]['food' + (size + 1)] = foods[key3]['name']
                        } else {
                            foodCat[categoryes[key2]['name']] = { 'user': users[key]['name'] }
                        }
                    }
                }
            }
        }
    }
    console.log(foodCat);

}



getFoodWithCategory();

