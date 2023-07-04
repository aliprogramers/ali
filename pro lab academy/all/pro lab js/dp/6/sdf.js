// let foods = {
//     food1: {
//         id: 1,
//         name: "Peperoni",
//         categoryid: 1,
//         cost: 150,
//     },
//     food2: {
//         id: 2,
//         name: "medovik",
//         categoryid: 3,
//         cost: 200,
//     },
//     food3: {
//         id: 3,
//         name: "borw",
//         categoryid: 2,
//         cost: 400,
//     },
//     food4: {
//         id: 4,
//         name: "cezar",
//         categoryid: 4,
//         cost: 400,
//     },  food5: {
//         id: 5,
//         name: "shakarap",
//         categoryid: 4,
//         cost: 500,
//     },
// };

// let category = {
//     category1: {
//         id: 1,
//         name: "pizza",
//     },
//     category2: {
//         id: 2,
//         name: "sup",
//     },
//     category3: {
//         id: 3,
//         name: "desert",
//     },
//     category4: {
//         id: 4,
//         name: "salad",
//     },
// };

// let customers = {
//     customer1: {
//         id: 1,
//         foodId: 1,
//         count: 1,
//     },
//     customer2: {
//         id: 2,
//         foodId: 4,
//         count: 6,
//     },
//     customer3: {
//         id: 3,
//         foodId: 2,
//         count: 14,
//     },
//     customer4: {
//         id: 4,
//         foodId: 3,
//         count: 5,
//     },

// };
// let total = 0
// function getsss(id) {
//     let keys = {}
//     for (let key in category) {
//         for (let key2 in foods) {
//             if (foods[key2]['id'] == id) {
//                 if (category[key]['id'] == foods[key2]['categoryid']) {
//                     if (category[key]['name'] in keys) {
//                         let size = Object.keys(category[key]['name']).length
//                         keys[category[key]['name']]['food' + (size + 1)] =
//                             foods[key2]['name']
//                     }
//                     else {
//                         keys[category[key]['name']] = {
//                             food: foods[key2]['name']
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     console.log(keys);
// }

// getsss(5)

// function totals(id) {
//     for (let key in customers) {
//         for (let key2 in foods) {
//             if (foods[key2]['id'] == customers[key]['foodId']) {
//                 if (foods[key2]['id'] == id) {
//                     return total = customers[key][['count']] * foods[key2]['cost']
//                 }

//             }

//         }
//     }
// }

// totals(3)
// console.log(total);







// function gettop1() {
//     let grade = {}
//     let top1 = {}
//     for (let key in customers) {
//         for (let key2 in foods) {
//             if (customers[key]['foodId'] == foods[key2]['id']) {
//                 for (let key3 in category) {
//                     if (foods[key2]['categoryid'] == category[key3]['id']) {
//                         if (category[key3]['name'] in grade) {
//                             grade[category[key3]['name']] += customers[key]['count']
//                         }
//                         else {
//                             grade[category[key3]['name']] = customers[key]['count']
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     for (let key in grade) {
//         if (Object.keys(top1).length == 0) {
//             top1[key] = grade[key]
//             continue
//         }
//         if (top1[Object.keys(top1)[0]] < grade[key]) {
//             delete top1[Object.keys(top1)[0]]
//             top1[key] = grade[key]
//         }
//     }
//     console.log(top1);
// }
// gettop1()



// function gets() {
//     let get = {}
//     let get2 = {}
//     for (let key in customers) {
//         for (let key2 in foods) {
//             if (customers[key]['foodId'] == foods[key2]['id']) {
//                 if (customers[key]['name'] in get) {
//                     get[foods[key2]['name']] += customers[key]['count']
//                 }
//                 else { 
//                     get[foods[key2]['name']] = customers[key]['count'] 
//                 }
//             }
//         }
//     }
//     for (let key in get) {
//         if (Object.keys(get2).length == 0) {
//             get2[key] = get[key]
//             continue
//         }
//         if (get2[Object.keys(get2)[0]] < get[key]) {
//             delete get2[Object.keys(get2)[0]]
//             get2[key] = get[key]
//         }
//     }
//     console.log(get2);
// }
// gets()
// // let grade = {}
// // let grade2 = {}

// // function getmovie4() {
// //     for (let key in customers) {
// //         for (let key2 in category) {
// //             if (customers[key]['foodId'] == category[key2]['id']) {
// //                 if (customers[key]['name'] in grade) {
// //                     let size = Object.keys(grade[customers[key]['name']]).length
// //                     grade[customers[key]['name']]['customers' + (size + 1)] = customers[key]['name'], customers[key]['count']
// //                 }
// //                 else {
// //                     grade[category[key2]['name']] = {
// //                         category: category[key2]['name'],
// //                     }

// //                 }
// //             }
// //         }
// //     }
// //     console.log(grade);
// //     // function topas() {
// //     //     let top1 = {}
// //     //     for (let key3 in grade) {
// //     //         for (let key in customers) {
// //     //             for (let key2 in category) {
// //     //                 if (customers[key]['foodId'] == category[key2]['id']) {
// //     //                     if (Object.keys(top1[0] == 0)) {
// //     //                         top1[key] = grade[key3]
// //     //                         top1[key] = customers[key]['count']
// //     //                         continue
// //     //                     }
// //     //                     if (Object.keys(top1[0] < customers[key]['count'])) {
// //     //                         delete top1[Object.keys(top1[0])]
// //     //                         top1[key] = grade[key3]
// //     //                         top1[key] = customers[key]['count']
// //     //                     }
// //     //                 }
// //     //             }
// //     //         }
// //     //     }
// //     //     // console.log(top1);
// //     // }
// //     // topas()
// //     for (let key in grade) {
// //         for (let key2 in customers) {
// //             if (Object.keys(grade2)[0] == 0) {
// //                 grade2[key] = grade[key].length
// //                 grade2[key] = customers[key2]['count']

// //                 // grade2['count1']={

// //                 //    'hello:': grade2[key2] = customers[key2]['count'],
// //                 //     'hello': grade2[key2] = grade[key].length
// //                 // }

// //                 continue
// //             }
// //             if (Object.keys(grade2[0] < customers[key2]['count'])) {
// //                 delete Object.keys(grade2)[0]
// //                 delete Object.keys(grade2)[1]
// //                 grade2['categor']
// //                 grade2[key] = grade[key].length
// //                 grade2[key] = customers[key2]['count']

// //             }
// //         }
// //     }
// //     // }
// //     console.log(grade2);
// // }

// // getmovie4()

let category = {
    category1: {
        id: 1,
        name: 'vip'
    }, category2: {
        id: 2,
        name: 'sredniy'
    }, category3: {
        id: 3,
        name: 'ekanom'
    },
}
let ruims = {
    rooom1: {
        id: 1,
        name: 'kaku sultan shaha',
        catid: 1,
        cost: 100,
        correpresoon: 110
    }, rooom2: {
        id: 2,
        name: 'kaku sultan suleymana',
        catid: 3,
        cost: 0,
        correpresoon: 330
    }, rooom3: {
        id: 3,
        name: 'kaku sultan gitlera',
        catid: 2,
        cost: 0,
        correpresoon: 220
    }, rooom4: {
        id: 4,
        name: 'kaku sultan nurullo',
        catid: 1,
        cost: 100,
        correpresoon: 100
    }, rooom5: {
        id: 5,
        name: 'kaku sultan televizora',
        catid: 3,
        cost: 0,
        correpresoon: 300
    }, rooom6: {
        id: 6,
        name: 'kaku sultan ssha',
        catid: 2,
        cost: 0,
        correpresoon: 220
    }
}
function top2(id) {
    let toproom = {}
    for (let key in category) {
        for (let key2 in ruims) {
            if (category[key]['id'] == id) {
                if (ruims[key2]['catid'] == category[key]['id']) {
                    toproom[key2] = ruims[key2]
                }
            
        }
        }
    }
    console.log(toproom);
    let top1 = {}
    for(let key in toproom) {
        if(Object.keys(top1).length  == 0){
            top1[key] = toproom[key]['correpresoon'] 

        continue
        }
        if(top1[key] < toproom[key]['correpresoon']){
            delete top1[Object.keys(top1.hellos)]
            console.log('sdf');
  top1[key] = toproom[key]['correpresoon'] 
        }
    }
    console.log(top1);
}
top2(1)