let fods = {
    food1: {
        id: 1,
        name: 'piperoni',
        category: 'pizza',
        catid: 1,
        cost: 150
    }, food2: {
        id: 2,
        name: 'sezar',
        category: 'pizza',
        catid: 2,
        cost: 150
    }, food3: {
        id: 3,
        name: 'borsh',
        category: 'sup',
        catid: 3,
        cost: 150
    },
}
let users = {
    user1: {
        id: 1,
        name: 'muhammad zohid',
        statusid: 1,
        shous: 'povar',
    }, user2: {
        id: 2,
        name: 'lui',
        shous: 'dondeter',
        statusid: 2,


    }, user3: {
        id: 3,
        name: 'bokepr',
        shous: 'shef',
        statusid: 3,


    },
}
let cutemter = {
    cutemter1: {
        id: 1,
        foodid: 1,
        count: 4,
        total: function () {

        }
    }, cutemter2: {
        id: 2,
        foodid: 2,
        count: 4,
        total: function () {

        }
    }
}
let categories = {
    cotegory1: {
        id: 1,
        name: 'piperoni',


    }, cotegory2: {
        id: 2,


    }, cotegory3: {
        id: 3,
        name: 'desert',

    }, cotegory4: {
        id: 4,
        name: 'salat',

    },
}

let status = {
    status1: {
        id: 1,
        name: 'sushef',
    }, status2: {
        id: 2,
        name: 'povar',
    }, status3: {
        id: 3,
        name: 'uborshik',
    }, status4: {
        id: 4,
        name: 'konduter',
    }
}





// function niw(workerid, catids,name,costst) {
//     let length = 0
//     for (let key2 in fods) {
//         for (let key in users) {
//             for (let key3 in categories) {
//                 if (catids == fods[key2]['catid'] && categories[key3]['id'] == workerid && users[key]['statusid'] == workerid ) {
//                     // function names(name, consst) {
//                         fods['foood' + (length + 1)] = {
//                             id: (length + 1),
//                             name: name,
//                             cost: costst,
//                         }
//                     }
//                     // names('hellowsdfsdfdsaf', 233)
//                 }
//             }
//         }
//     }
// // }



// niw(1, 3,'helos',3244)
// console.log(fods);







function createNewFood(worker, catId, name, cost) {
    let size = Object.keys(fods).length

    for (let key in users) {
        if (users[key]['id'] == worker) {
            if (users[key]['statusId'] == 1  users[key]['statusId'] == 2  users[key]['statusId'] == 4 || users[key]['statusId'] == 5) {
                for (let key2 in categories) {
                    if (categories[key2]['id'] == catId) {
                        if(users[key]['statusId'] == 4 && catId == 3) {
                            fods['food' + (size+1)] = {
                                id: size + 1,
                                name: name,
                                categoryId: catId,
                                cost: cost,
                            }
                        }else if (catId != 3 && users[key]['statusId'] != 4) {
                            fods['food' + (size+1)] = {
                                id: size + 1,
                                name: name,
                                categoryId: catId,
                                cost: cost,
                            }
                        } else {
                            console.log('You can not add');
                            return;
                        }
                    }

                }
            }
        } 
    }
}


createNewFood(2, 2, 'Pelmen', 100)

console.log(fods);