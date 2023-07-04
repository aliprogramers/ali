// let category = [
//     {
//         id: 1,
//         name: "Horror"
//     },
//     {
//         id: 2,
//         name: "Comedy"
//     },
//     {
//         id: 3,
//         name: "Action"
//     }

// ]


// let movie = [
//     {
//         id: 1,
//         catId: 1,
//         id: 2,
//         catId: 1,
//         name: "Five days of Teddy",
//         duration: "2:30:60"
//     },
//     {
//         id: 3,
//         catId: 3,
//         name: "Jhon Wick",
//         duration: "2:45:60"
//     },
//     {
//         id: 4,
//         catId: 3,
//         name: "Jhon Wick",
//         duration: "1:35:60"
//     },
// ]

// let halls = [
//     {
//         id: 1,
//         places: 20
//     },
//     {
//         id: 2,
//         places: 30
//     },
//     {
//         id: 3,
//         places: 15
//     }
// ]

// let seanses = [
//     {
//         id: 1,
//         movieId: 4,
//         hallId: 2,
//         cost: "100E",
//         startTime: "2023-01-03T20:30:50"
//     },
//     {
//         id: 2,
//         movieId: 3,
//         hallId: 1,
//         cost: "200$",
//         startTime: "2023-01-03T14:30:50"
//     },
//     {
//         id: 3,
//         movieId: 3,
//         hallId: 1,
//         cost: "100R",
//         startTime: "2023-01-03T09:30:50"
//     }
// ]


// let custometrs = [
//     {
//         id: 1,
//         tickets: [1, 2, 2, 2, 3, 3],
//     },
//     {
//         id: 2,
//         tickets: [1, 2, 2, 2, 3, 3],
//     },
//     {
//         id: 3,
//         tickets: [1, 2, 2, 2, 3, 3],
//     },
// ]


// function ss() {
//     let keys = {}
//     for (let item of custometrs) {
//         for (let item2 of item) {
//             console.log(item.tickets);
//             if (item2 in keys) {
//                 keys += 1
//             }
//             else {
//                 keys = 1
//             }
//         }
//     }
//     console.log(ss);

// }
// ss()
// // function anems() {
// //     let ar = {}
// //     for (let item111 of seanses) {
// //         for (let item12 of halls) {
// //             for (let itemsf of movie) {
// //                 for (let your of category) {
// //                     if (itemsf.catId == your.id) {
// //                         if (item111['hallId'] == item12['id']) {
// //                             ar[your.name] = {
// //                                 movie: itemsf.name
// //                             }
// //                         }
// //                     }
// //                 }
// //             }
// //         }
// //     }
// //     console.log(ar);
// // }
// // anems()
// // function sf() {
// //     seanses.map(item => {
// //         if (item.cost.endsWith('E')) {
// //             item.cost = parseInt(item.cost) * 96

// //         }
// //         else if (item.cost.endsWith('$')) {
// //             item.cost = parseInt(item.cost) * 86

// //         }
// //         else if (item.cost.endsWith('R')) {
// //             item.cost = parseInt(item.cost) * 1.7

// //         }



// //     })
// // }
// // sf()
// // console.log(seanses);


let category = [
    {
        id: 1,
        name: 'ujastik'
    }
]
let films = [
    {
        id: 1,
        catid: 1,
        name: 'zvonik'
    }
]
let hall = [{
    id: 1,
    placy:20
}
]
let seanses=[
    {
        id:1,
        filmid:1,
        hallid:1,
        startdate:'2023',
        enddate:'2024'
    }
]
let custmer = [
    {
        id:1,
        seansesid:1,
        tikate:3
    }
]
function chek() {
    for(let item of seanses){
        for(let   item2 of custmer){
            for(let item3 of hall){
                if(item.id == item2.seansesid){
                    if(item.hallid == item3.id){
                        if(item.startdate[0] != item.startdate[1]){
                            item3.placy -= item2.tikate
                        }
                    }
                }
            }
        }
    }
}
chek()
console.log(hall);

function chekhello(seansesid,tikate) {
    let c = custmer.length
for(let item of seanses){
    for(let item2 of hall){
        if(item.id == seansesid){
            if(item2.placy > tikate){
                custmer.push({
                    id:c+1,
                    seansesid:seansesid,
                    tikate:tikate
                })
            }
        }
    }
}
}
chekhello(1,9)
console.log(custmer);