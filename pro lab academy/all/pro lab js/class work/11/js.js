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
        categoryId: 2,
        cost: 400
    },
}


let users = {
    user1: {
        id: 1,
        name: 'Aziz',
        statusId: 1,
        selaris: 1900
    },
    user2: {
        id: 2,
        name: 'Baibolot',
        statusId: 2,
        selaris: 150
    },
    user3: {
        id: 3,
        name: 'Oroz',
        statusId: 3,
        selaris: 200
    },
    user4: {
        id: 4,
        name: 'Nurik',
        statusId: 4,
        selaris: -100
    },
    user5: {
        id: 5,
        name: 'Kanat',
        statusId: 5,
        selaris: '?????'
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



// function askfood() {
//     let ask = {}
//     for (let key in foods) {
//         for (let key2 in categories) {
//             if (foods[key]['categoryId'] == categories[key2]['id']) {
//                 if (categories
//                 [key2]['name'] in ask) {
//                     let askk = Object.keys(ask[categories[key2]['name']]).length
//                     ask[categories[key2]['name']] += 1
//                 }
//                 else {
//                     ask[categories[key2]['name']] = 1
//                 }
//             }
//         }
//     }
//     console.log(ask);
// }

// askfood()

function topas() {
    let top1 = {}
    for (let key in users) {
        if (Object.keys(top1[0] == 0)) {
            top1[key] = users[key]['selaris']
            continue
        }
        if (Object.keys(top1[0] < users[key]['selaris'])) {
            delete top1[Object.keys(top1[0])]
            top1[key] = users[key]['selaris']
        }
    }
    console.log(top1);
}
topas()
function updete(workerId, id, cost) {
    for (let key3 in statuses) {
        for (let key in users) {
            if (users.user5.id == workerId) {
                if (users[key]['id'] == workerId) {
                    for (let key2 in foods) {
                        if (users[key]['id'] == id) {
                            if (users.user5['selaris'] > cost) {
                                users[key]['selaris'] = cost
                            }
                        }
                    }
                }
            }
        }
    }
}
updete(5, 3, 3313)
console.log(foods);
console.log(statuses);
console.log(users);
