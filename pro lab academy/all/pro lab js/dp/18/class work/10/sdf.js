

// let users = {
//     user1: {
//         id: 1,
//         name: "Barbek",
//         status: "Barmen",
//         salary: 1500
//     },
//     user2: {
//         id: 2,
//         name: "Eldos",
//         status: "Povar",
//         salary: 10000
//     },
//     user3: {
//         id: 3,
//         name: "Aziz",
//         status: "Admin",
//         salary: 20000
// },
//     user4: {
//         id: 4,
//         name: "Baibolot",
//         status: "Mentor",
//         salary: 30000
//     },
//     user5: {
//         id: 5,
//         name: "Ulanbek",
//         status: "Frontend",
//         salary: 15000
//     },
//     user6: {
//         id: 6,
//         name: "Muhammed",
//         status: "beckend",
//         salary: 25000
//     },
// }
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

//   function deteleusers(workerid,id) {
//     if(workerid != id){
//         for(let key in users){
//             if(users[key]['statusId'] == 1 && )
//         }
//     }
//   }
// let users = {
//     user1: {
//         id: 1,
//         name: "Nurzoid",
//         status: ` \n         Povar `,
//         statusId: 1

//     },
//     user2: {
//         id: 2,
//         name: "Luy",
//         status: ` \n         supovar`,
//         statusId: 2

//     }, user3: {
//         id: 3,
//         name: "Luy",
//         status: `          sdfsdfdss`,
//         statusId: 3

//     }, user4: {
//         id: 4,
//         name: "sfsfsdfsdfsfsdfs",
//         status: `          sdf`,
//         statusId: 4

//     },
//     user5: {
//         id: 5,
//         name: "Bektur",
//         status: `         Shef \n`,
//         statusId: 5
//     },
// };
// function deteleusers(workerId, id) {
// if(workerId != id){
//     for (let key in users) {
//         if (users[key]['id'] != workerId) {
//             if (users[key]['statusId'] == 1 || users[key]['statusId'] == 5) {
//                 if (users[key]['statusId'] == 1|| users[key]['statusId'] == 5) {
//                     for(let key2 in users){
//                         if(users[key2]['id'] == id){
//                             if(users[key2]['statusId'] ==1 && users[key2]['statusId'] == 5) {
//                                 console.log('You can not add new shef');
//                                 return;
//                             }
//                             delete users[key2]
//                         }
//                     }
//                     }
//                 }
//             }
//         }
//     }
// }
// deteleusers(1, 5)
// console.log(users);

// let foods = {
//     food1: {
//         id: 1,
//         name: "              Pepperoni",
//         category: "pizza",
//         catid: 1,
//         cost: 150,
//     },
//     food2: {
//         id: 2,
//         name: "          4 sezona",
//         category: "Pizza",
//         catid: 1,

//         cost: 200,
//     },
//     food3: {
//         id: 3,
//         name: "          Borsh",
//         category: "Sup",
//         catid: 2,

//         cost: 400,
//     }, food4: {
//         id: 4,
//         name: "          salat",
//         category: "seza",
//         catid: 2,

//         cost: 400,
//     },
// };
// function updete(workerId, id, cost) {
//     for (let key in users) {
//         if (users[key]['statusId'] == workerId) {
//             for (let key2 in foods) {
//                 if (foods[key2]['id'] == id) {
//                     foods[key2]['cost'] = cost
//                 }
//             }
//         }
//     }
// }
// updete(1, 5905803489)
// console.log(foods);
// let foodss = {}
// function foodwidthcategory() {
//     for (let key in foods) {
//         for (let key2 in users) {
//             if (foods[key]['catid'] == users[key2]['statusId']) {
//                 // Object.assign(foodss,users[key2]['status'],foods[key]['category'],foods[key]['name'])
//                 foodss += users[key2]['status']
//                 foodss += foods[key]['category']
//                 foodss += foods[key]['name']
//                         // console.log(foodss)


//             }
//         }
//     }
// }
// foodwidthcategory()
// console.log(foodss);

// function updete(workerId, id) {
//     for (let key in users) {
//         if (users[key]['statusId'] == workerId) {
//             if (users[key]['statusId'] == 5) {  
//                 for (let key2 in foods) {
//                     if (foods[key2]['id'] == id) {
//                         console.log(foods[key2])
//                     }
//                 }
//             }
//         }
//     }
// }
// updete(1, 3)

// function getFoodwithcategoryes() {
//     let foodCat = {}
//     for (let key in foods) {
//         for (let key2 in categoryes) {
//             if (foods[key]['categoryesId'] == categoryes[key2]['id']) {
//                 if (categoryes[key2]['name'] in foodCat) {
//                     let size = Object.keys(foodCat[categoryes[key2]['name']]).length
//                     foodCat[categoryes[key2]['name']['food' + (size + 1)]] = foods[key]['name']


//                 } else (
//                     foodCat[categoryes[key2]['name']] = { 'food1': foods[key]['name'] }


//                 )
//             }

//         }
//     }
//     console.log(foodCat);

// }

// getFoodwithcategoryes()





let category = {
    category1: {
        id: 1,
        name: 'ujastik',
    }, category2: {
        id: 2,
        name: 'kamediya',
    }, category3: {
        id: 3,
        name: 'kino',
    }
}
let moves = {
    moves1: {
        id: 1,
        name: 'zvonki',
        const: 100,
        spase: 0,
        moveid: 1
    }, moves2: {
        id: 2,
        name: 'bilbeym',
        const: 100,
        spase: 10,
        moveid: 2
    }, moves3: {
        id: 3,
        name: 'kulgili',
        const: 150,
        spase: 0,
        moveid: 2
    }, moves4: {
        id: 3,
        name: 'kino1',
        const: 150,
        spase: 130,
        moveid: 3
    },
}
let klinets = {
    cleint: {
        id: 1,
        moveid: 1,
        bilets: 5
    }
}

// function clenantss12() {
//     let gets = {}
//     for (let key in moves) {
//         for (let key2 in category) {
//             if (category[key2]['name'] in gets) {
//                 gets[key] = category[key2]['name']
//                 gets[key]['name'] = moves[key]['name']
//             }
//             else {
//                 gets[key]['name'] = category[key2]['name']
//             }
//         }
//     }
//     console.log(gets);

// }
// clenantss12()

// function clenantss() {
//     for (let key in moves) {
//         for (let key2 in klinets) {
//             if (moves[key]['moveid'] == klinets[key2]['moveid']) {
//                 if (moves[key]['id'] == klinets[key2]['id']){
//                     if(moves[key]['spase'] != 0){
//                         console.log(moves[key]);
//                     }
//                 }
//             }
//         }
//     }
// }
// clenantss()
// function clenantss() {
//     for (let key in moves) {
//         // for (let key2 in category) {
//             // if (moves[key]['moveid'] == klinets[key2]['moveid'])  {
//                 // if (moves[key]['id'] == klinets[key2]['id']){
//                     if(moves[key]['spase'] > 0){
//                         console.log(moves[key]);
//                     }
//                 // }
//             // }
//         // }
//     }
// }
// clenantss()
// function getstitst() {
//     let gettops = {}
//     for (let key in category) {
//         for (let key2 in klinets) {
//             for (let key3 in moves) {
//                 if (Object.keys(gettops[0] == 0)){
//                     gettops[key]= 
//                 }
//         }
//         }
//     }
// }
let gets = {}

function getmovie(){ 
    let grade={} 
    for(let key in moves){ 
      for(let key2 in category){ 
        if(moves[key]['moveid']==category[key2]['id']){ 
          if(category[key2]['name'] in grade){ 
            let size= Object.keys(grade[category[key2]['name']]).length 
            grade[category[key2]['name']]['movie'+ (size+1)]= moves[key]['name'] 
          } 
          else{ 
            grade[category[key2]['name']]={ 
              movie1: moves[key]['name'] 
            } 
   
          } 
        } 
      } 
    } 
    console.log(grade); 
  } 
  getmovie()
function getstitst() {
    let gettops = {}
    for (let key in category) {
        for (let key2 in klinets) {
            for (let key3 in moves) {
                for(let key4 in gets){
                    if(Object.keys(gets[key][0] < moves[key3]['spase'])){
                        gettops[key] = moves[key3]['spase']
                    }
                }

                // if (Object.keys(gettops[0] == 0)){
                //     gettops[key]= 
                // }
        }
        }
    }
    console.log(gettops);
}
getstitst()
// console.log(users);
