// // let user = [
// //     {
// //         id: 1,
// //         name: 'muhammaer',
// //         suname: 'altinbekov',
// //         age: 21
// //     },
// //     {
// //         id: 2,
// //         name: 'mamahi',
// //         suname: 'kashilov',
// //         age: 29
// //     },
// //     {
// //         id: 1,
// //         name: 'aziz',
// //         suname: 'bedurdulov',
// //         age: 45
// //     },
// //     {
// //         id: 4,
// //         name: 'abaror',
// //         suname: 'opa',
// //         age: 10
// //     },

// // ]
// // function ched(age) {


// //     let result = new Map()
// //     let users = user.filter(itme => {
// //         if (itme.age >= age) {
// //             return itme
// //         }
// //     })
// //     result.set(users, users.length)
// //     console.log(result);


// // }
// // ched(20)
// let workers = {
//     developers: {
//         fonted: [
//             {
//                 id: 1,
//                 name: 'abdulhay',
//                 solary: 10000
//             },
//             {
//                 id: 2,
//                 name: 'aziz',
//                 solary: 20000
//             },
//         ],
//         bekernd: [
//             {
//                 id: 1,
//                 name: 'oroz',
//                 solary: 30000
//             },
//             {
//                 id: 2,
//                 name: 'almen',
//                 solary: 10000
//             },
//         ]
//     },
//     desiners: {
//         mothion: [
//             {
//                 id: 1,
//                 name: 'nuraka',
//                 solary: 25000
//             },
//             {
//                 id: 2,
//                 name: 'den',
//                 solary: 36000
//             },
//         ],
//         uxiyu: [
//             {
//                 id: 1,
//                 name: 'ali',
//                 solary: 2700
//             },
//             {
//                 id: 2,
//                 name: 'jeniya',
//                 solary: 4600
//             },
//         ]
//     }
// }
// function s() {
//     let u = new Map()
//     let total = 0
//     for (let key in workers) {
//     for (let key2 in workers[key]) {
//     let len = 0

//             for (let itme of workers[key][key2]) {
//                 len++
//                 total += itme.solary
//             }
//             let result = total / len
//             u.set(key2, result)
//         }
//     }

//     // console.log(u);
//     console.log([...u].sort((a, b)=>b[1] - a[1])[0]);
// }
// s()
let tax = [
    { id: 1, name: "Koshka", tax: "32$" },
    { id: 2, name: "Ko2shka", tax: "30e" },
    { id: 3, name: "Ko3shka", tax: "30r" },
    { id: 4, name: "Ko4shka", tax: "30s" },
]
function dollarstop() {
    let os = {}
    let so = []
    for (let itme of tax) {
        if (itme.tax.endsWith('r')) {
            itme.tax = parseInt(itme.tax) * 2 / 87
            itme.tax += '$'
        }
        else if (itme.tax.endsWith('s')) {
            itme.tax = parseInt(itme.tax) / 87
            itme.tax += '$'
        }

        else if (itme.tax.endsWith('e')) {
            itme.tax = parseInt(itme.tax) * 92 / 87
            itme.tax += '$'

        }
    }
    for (let itme of tax) {
        so.push(itme.tax)
    }
    so = parseInt(so.sort())
    // os = so.sort()
    // console.log(os);
    let s = so.at()
    let boj = {}
    for (let item of tax) {
        if (s == item.tax) {
            boj = item
        }
    }
    console.log(boj);
}
dollarstop()
console.log(tax);