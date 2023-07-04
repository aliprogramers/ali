// let r = {
//     y: {
//         c: 100,
//         v: 200
//     },
//     w: {
//         c: 200,
//         v: 200
//     },

// }
// let hello = 0
// // function get() {
// //     for (let key in r) {
// //         for (let key2 in r[key]) {
// //             hello += r[key][key2]

// //         }
// //     }
// //     console.log(hello);


// // }
// // get()










// // let people = {
// // peotpel: {
// //   id: 1,
// //   name: 'abdulhay',
// //   surname: 'bakirganov',
// //   total: 200

// // },
// // peotpel2: {
// //   id: 2,
// //   name: 'ibrohim',
// //   surname: 'bakirgasdfksnov',
// //   total: 100
// // }
// // }
// // function totals() {
// //     for(let key in people){
// //         hello += people[key]['total']



// //     }
// //     console.log(hello);
// // }
// // totals()









// // let people = {
// // peotpel: {
// //   id: 1,
// //   name: 'abdulhay',
// //   surname: 'bakirganov',
// //   total: 200

// // },
// // peotpel2: {
// //   id: 2,
// //   name: 'ibrohim',
// //   surname: 'bakirgasdfksnov',
// //   total: 100
// // }
// // }
// // function ids(id) {
// //     for(let key in people){
// //         if(people[key]['id'] == id){
// //             console.log(people[key]);

// //         }
// //     }
// // }
// // ids(1)












// // let people = {
// //     peotpel: {
// //         id: 1,
// //         name: 'abdulhay',
// //         surname: 'bakirganov',
// //         total: 200

// //     },
// //     peotpel2: {
// //         id: 2,
// //         name: 'ibrohim',
// //         surname: 'bakirgasdfksnov',
// //         total: 100
// //     }
// // }
let people = {
    people:{
        id:1,
        name:'tunive',
        history:{
            day1:100,
            day2:300,
            day3:900,
        }
    },
    person2:{
        id:2,
        name:'sd',
        history:{
            day1:100,
            day2:300,
            day3:900,
        }
    }
}

function names(idss, name, surname) {
    let length = 0
    for (let key in people) {
        length++
    }
    people(['peotpel2' + (length + 1)]) = {
        id: idss,
        name: name,
        surname: surname,
    }




}
console.log(moeny);
// // names('abdulhay','skdjf')
// // console.log(people);








// let people = {
//     peotpel: {
//         id: 1,
//         name: 'abdulhay',
//         surname: 'bakirganov',
//         total: 200

//     },
//     peotpel2: {
//         id: 2,
//         name: 'ibrohim',
//         surname: 'bakirgasdfksnov',
//         total: 100
//     }
// }
// let c = 0
// function gettotal() {
//     for (let key in people) {
//         c += people[key]['total']
//     }
//     console.log(c);
// }




// gettotal()



































// let people = {
//     a: 6,
//     b: "-",
//     c: 5,
//     d: 0
// }


//    if(people.b == '+'){
//        people.d += people['a'] + people['c']

    
//     console.log(    people.d);
    
// }
// else if(people.b == '-'){
    
//     people.d += people['a'] - people['c']

 
//  console.log(    people.d);
 
// }
// else if(people.b == '/'){
//     people.d += people['a'] / people['c']

 
//  console.log(    people.d);
 
// }
// else if(people.b == '*'){
//     people.d += people['a'] * people['c']

 
//  console.log(    people.d);
 
// }









// let moeny = {
//     person:{
//         id:1,
//         name:'tunive',
//         history:{
//             day1:100,
//             day2:300,
//             day3:900,
//         }
//     },
//     person2:{
//         id:2,
//         name:'sd',
//         history:{
//             day1:100,
//             day2:300,
//             day3:900,
//         }
//     }
// }

// function bil(id,day) {
//     let length = 0
//     for(let key in moeny){
//         for(let key2 in moeny){
//         if(moeny[key]['id'] == id){
//             if(moeny[key] == day){
//             length += moeny[key][key2]
//             length += moeny[key][key2]
//             }
//         }
//     }
// return length
// }
// }
// bil(2,2)
// console.log(length);
// function get(id,day) {
//     for(let key in moeny){
//         if(id == moeny[key]['id']){
//             let length = 0;
//             for(let key2 in moeny[key]['history']){
//                 length += moeny[key]['history']
//                 if(day == moeny[key]){
//                     let length = 0;
//                     for(let key3 in moeny[key]['history']){
//                         length += moeny[key]['day3']
//                         return length
//                     }
                  

//                 }

//             }

//         }


//     }


// }
// get(1,2)
// console.log(length);
