let people = {
    person1: {
        id: 1,
        name: 'hikmatulo',
        surname: 'trasow',
        age: 17,
    },
    person2: {
        id: 2,
        name: 'nogi',
        surname: 'bazuki',
        age: 26,
    },
    person3: {
        id: 3,
        name: 'hello',
        surname: 'world',
        age: 21,
    },
    person4: {
        id: 4,
        name: 'hello',
        surname: 'hi',
        age: 23,
    }
}
function gettop1() {
    let top1 = {}
    for (let key in people) {
        if (Object.keys(top1).length == 0) {
            top1[key] = people[key]
            continue
        }
        if (top1[Object.keys(top1)[0]]['age'] < people[key]['age']) {
            delete top1[Object.keys(top1)[0]]
            top1[key] = people[key]
        }
    }
    for (let key in people) {
        if (key == top1[Object.keys(top1)[0]]) {
            continue
        } else if (Object.keys(top1).length == 1) {
            top1[key] = people[key]
            continue
        } if (top1[Object.keys(top1)[1]]['age'] < people[key]['age']) {
            delete top1[Object.keys(top1)[1]]
            top1[key] = people[key]
        }
    }
    for (let key in people) {
        if (key == top1[Object.keys(top1)[1]]) {
            continue
        } else if (Object.keys(top1).length == 2) {
            top1[key] = people[key]
            continue
        } if (top1[Object.keys(top1)[2]['age']] < people[key]['age']) {
            delete top1[Object.keys(top1)[2]]
            top1[key] = people[key]
        }
    }
    console.log(top1);
}
gettop1()













// let people = {
//     person1: {
//         id: 1,
//         name: 'Majid',
//         surname: 'Kamilov',
//         age: 17,
//     },
//     person2: {
//         id: 2,
//         name: 'Abdulla',
//         surname: 'Sulaimanov',
//         age: 26,
//     },
//     person3: {
//         id: 3,
//         name: 'Baibolot',
//         surname: 'Zakirov',
//         age: 21,
//     },
//     person4: {
//         id: 4,
//         name: 'Ulanbek',
//         surname: 'Ergeshov',
//         age: 23,
//     }
// }
// function gettop1() {
//     let top1 = {}
//     for (let key in people) {
//         if (Object.keys(top1).length == 0) {
//             top1[key] = people[key]
//             continue
//         }
//         if (top1[Object.keys(top1)[0]]['age'] < people[key]['age']) {
//             delete top1[Object.keys(top1)[0]]
//             top1[key] = people[key]
//         }
//     }
//     for (let key in people) {
//         if (key == top1[Object.keys(top1)[0]]) {
//             continue
//         } else if (Object.keys(top1).length == 1) {
//             top1[key] = people[key]
//             continue
//         } if (top1[Object.keys(top1)[1]]['age'] < people[key]['age']) {
//             delete top1[Object.keys(top1)[1]]
//             top1[key] = people[key]
//         }
//     }
//     console.log(top1);
// }
// gettop1()