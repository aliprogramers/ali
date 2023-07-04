let mentos = {
    0: {
        id: 1,
        name: 'post'
    }, 1: {
        id: 2,
        name: 'put'
    }, 2: {
        id: 3,
        name: 'readeiew'
    }, 3: {
        id: 4,
        name: 'update'
    },
}
let status = {
    0: {
        id: 1,
        name: 'admin',
    }, 1: {
        id: 2,
        name: 'worker',
    }, 2: {
        id: 3,
        name: 'subadmin',
    }
}

let users = {
    0: {
        id: 1,
        name: 'ramazan',
        statusid: 2,
        mentosid: {
            categories: {
                0: 1,
                1: 3
            },
            foods: {
                0: 2,
                1: 3
            }

        },
        solary: 10000
    }, 1: {
        id: 2,
        name: 'oroz',
        statusid: 1,
        mentosid: {
            categories: {
                0: 2,
                1: 1,
                2: 3,
                3: 4,
            },
            foods: {
                0: 1,
                1: 2,
                2: 3,
                3: 4,
            },
            users: {
                salarhy: 200
            }

        },
        solary: 500
    }
}
let categories = {
    0: {
        id: 1,
        name: 'desert'
    }, 1: {
        id: 2,
        name: 'salat'
    },
}
let foods = {
    0: {
        id: 1,
        catid: 1,
        name: 'topt',
        cost: 100
    },
    1: {
        id: 2,
        catid: 2,
        name: 'sezar',
        cost: 200
    },
}
let yt = {
    sdf: {
        sadf: 1,
        sadf1: 2,
        sadf2: 3,
        sadf3: 4,
        sadf4: 5,
        sadf5: 6,
    }
}
// let key1 = 0
// for(let key in yt){
//     for(let key2 in yt[key]){

//  key1 +=    yt[key][key2] 
// }
// }
// console.log(key1);
function ramazan(id, user) {
    for (let key in foods) {
        for (let key2 in users) {
            for (let key6 in users[key2].mentosid.categories) {
                for (let key7 in users[key2].mentosid.categories[key6]) {
                        
                        console.log(users[key2].mentosid.categories);
                        if (users[key2].mentosid.categories[key6][key7] == user) {

                            if (foods[key]['id'] == id) {
                                console.log(foods[key]);
                            }
                        }
                    }
                }

        }
    }
}
raxmazan(2,1)
