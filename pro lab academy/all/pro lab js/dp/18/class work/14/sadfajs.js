// let obj = {
//     food1: {
//         id: 1,
//         name: 'burger',
//         cost: 100
//     }, food2: {
//         id: 2,
//         name: 'chizburgeer',
//         cost: 100
//     },
//     food3: {
//         id: 3,
//         name: 'tort',
//         cost: 100
//     },
// }

// function food() {
//     this.food1 = {
//         id: 1,
//         name: 'burger',
//         cost: 100
//     }, this.food2 = {
//         id: 2,
//         name: 'chizburgeer',
//         cost: 100
//     },
//         this.food3 = {
//             id: 3,
//             name: 'tort',
//             cost: 100
//         }
// }
// food()
// function food(name,cost) {
//     this.name= name
//     this.cost = cost
// }
// food('34',34)
// function creadnewfood(name,cost) {
//     let size = Object.keys(obj).length
//     obj['food']= new food(name,cost)
// }

// creadnewfood('yours',8)
// console.log(obj);

let t = {
    cat1: {
        id: 1,
        name: "vh"
    },
    cat2: {
        id: 2,
        name: "vgsdh"
    },
    cat3: {
        id: 3,
        name: "ytrvh"
    },
    cat4: {
        id: 4,
        name: "opvh"
    },
}
let op = {
    get: {
        1: 2,
        2: 4,
        3: 21,
        4: 1,
    },
    get2: {
        1: 2,
        2: 4,
        3: 21,
        4: 1,
    }
}
let yours = {}
for (let key in op) {
    for (let key2 in op[key]) {
        for (let key3 in t) {
            if (t[key3]['id'] == key2) {

                if (key2 in yours) {
                    yours[key2] += 1
                }
                else {
                    yours[key2] = 1
                }
            }
        }
    }
}
console.log(yours);