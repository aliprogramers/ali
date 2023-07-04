let users = {
    users1: {
        id: 1,
        name: 'bares',
        auts: 'baner',
        status: 1
    }, users2: {
        id: 2,
        name: 'lohes',
        auts: 'baner',
        status: 2
    }, users3: {
        id: 3,
        name: 'eldos',
        auts: 'pover',
        status: 3
    }, users4: {
        id: 4,
        name: 'aziz',
        auts: 'admin',
        status: 4
    }
    , users5: {
        id: 5,
        name: 'eldos',
        auts: 'pover',
        status: 5
    }, users6: {
        id: 6,
        name: 'aziz',
        auts: 'admin',
        status: 6
    }
}
function ges() {
    let obj= ''
    let obj2= ''
  let lengthobj2 = 0
    let obj3= ''
    let obj4= ''
    for(let key in users){
        if(users[key]['auts']){
            users
        }
        else{
            function s(mento) {
                
            
            users['users' + (length + 1)]={
                id:length+1,
                name:mento
            }
                s()
            }
        }

        // if(users[key]['auts'] != obj2){
        //    obj2 = users[key]['auts'] 
        //     obj = users[key]['auts'] 
        //     lengthobj2++
        //    continue
        // }
        // if(users[key]['auts'] != obj3){
        //     obj3 = users[key]['auts'] 
        //     for(let key2 in users[key]){

        //     if(users[key][key2]['auts']){

        //     lengthobj2++
        //     }
        // }
        //     continue
        //  }
         
    }
    console.log(obj3,obj2,lengthobj2);
}
ges()
console.log(users);
let foods = {
    food1: {
        id: 1,
        food: 'burger',
        cost: 100
    },
    food2: {
        id: 2,
        food: 'chesburger',
        cost: 200
    }
}
let druhes = {
    druh1: {
        id: 1,
        food: 'pepsi',
        cost: 60
    },
    druh2: {

        id: 2,
        food: 'fanta',
        cost: 50
    }
}

// function newdrinks(ids, food, cost) {
//     let length = 0

//     for (let key in users) {
//         if (users[key]['id'] == ids) {

//             if (users[key]['auts'] == 'admin') {
//                 for (let key in druhes) {
//                     length++
//                 }
//                 druhes['druh' + (length + 1)] = {
//                     ids: (length + 1),
//                     food: food,
//                     cost, cost
//                 }
                    



//             }
//         }
//     }


//     console.log(druhes);
// }
// newdrinks(4,'ehe',70)
// function qnewdrinks(ids, food, cost) {
//     let length = 0

//     for (let key in users) {
//         if (users[key]['id'] == ids) {

//             if ( users[key]['auts'] == 'baner') {
//                 for (let key in foods) {
//                     length++
//                 }
//                 foods['food' + (length + 1)] = {
//                     ids: (length + 1),
//                     food: food,
//                     cost, cost
//                 }



//             }
//         }
//     }


//     console.log(foods);
// }
// qnewdrinks(1,'ehe',70)








// for(let key in users){

// if(users[key]['auts'] == 'pover'){
//     users[key]['id']++
//     console.log('helo world');
//     console.log(users);
// }
// }

// function izminit() {
//     let top1 = 0
//     for (let key in users) {
//         if (top1 == 0) {
//             top1 = users[key]
//             continue
//         }
//         if (top1 < users[key]['status']) {
//             delete top1[Object.keys(top1)[0]]
//             top1 = users[key]['status']    

//         }
//     }
//     console.log(top1);

// }
// izminit()
// function getTopSaler() {
//     let getTop = {}
//     for(let key in users){
//         if(Object.keys(getTop).length == 0){
//             getTop[key] = users[key]
//             continue;
//         }
//         if(getTop[Object.keys(getTop)[0]]["sale"] < users[key]["sale"]){
//             delete getTop[Object.keys(getTop)[0]]
//             getTop[key] = users[key]
//             continue;
//         }
//     }


//     for(let key2 in users){

//         if(key2 == Object.keys(getTop)[0]){
//             continue;
//         }

//         if(Object.keys(getTop).length == 1){
//             getTop[key2] = users[key2]
//             continue;
//         }
//         if(getTop[Object.keys(getTop)[0]]["sale"] < users[key2]["sale"]){
//             delete getTop[Object.keys(getTop)[0]]
//             getTop[key2]=users[key2]
//             continue;
//         }
//     }

//     for(let key3 in users){
//         if(key3 == Object.keys(getTop)[0] || key3 == Object.keys(getTop)[1]){
//             continue;
//         }

//         if(Object.keys(getTop).length == 2){
//             getTop[key3] = users[key3]
//             continue;
//         }
//         if(getTop[Object.keys(getTop)[2]]["sale"] < users[key3]["sale"]){
//             delete getTop[Object.keys(getTop)[1]]
//             getTop[key3]=users[key3]
//         }
//     }
//     console.log(getTop)
// }