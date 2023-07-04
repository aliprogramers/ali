let categories = [
    {
        id: 1,
        name: 'Horror'
    },
    {
        id: 2,
        name: 'Camedy'
    },
    {
        id: 3,
        name: 'Action'
    }
]

let films = [
    {
        id: 1,
        name: 'Rush hour',
        catId: 3,
        durection: '2:40:30'
    },
    {
        id: 2,
        name: 'Aravel',
        catId: 2,
        durection: '1:30:40'
    },
    {
        id: 3,
        name: 'Tretiy liwniy',
        catId: 2,
        durection: '2:10:00'
    },
    {
        id: 4,
        name: 'Mechanic',
        catId: 3,
        durection: '1:45:00' // longduration films
    },

]

let holl = [
    {
        id: 1,
        plous: 20,
    },
    {
        id: 2,
        plous: 15,
    },
]

let foods = [
    {
        id: 1,
        name: 'Pop corn',
        cost: 50
    },
    {
        id: 2,
        name: 'Kukuruza',
        cost: 50
    },
    {
        id: 3,
        name: 'Cola',
        cost: 70
    },
    {
        id: 4,
        name: 'Fanta',
        cost: 70
    },
]

let seanses = [
    {
        id: 1,
        filmId: 1,
        hollId: 1,
        cost: 100,
        date: '2022-02-20T12-20:00', // sort seanse
        endDate: '2022-02-20T15-00:30'
    },
    {
        id: 2,
        filmId: 2,
        hollId: 2,
        cost: 300,
        date: '2022-02-21T13-30:00',
        endDate: '2022-02-21T15-00:40'
    }, {
        id: 3,
        filmId: 2,
        hollId: 2,
        cost: 100,
        date: '2022-02-12T10-00:00',
        endDate: '2022-02-12T11-45:'
    }
]

let customers = [
    {
        id: 1,
        seanse: [2, 2, 3, 3],//top films
        food: [1, 2, 3, 3],
        date: '2022-01-10' // obwiy total
    },
    {
        id: 2,
        seanse: [1, 1, 1, 2],
        food: [1, 4, 4],
        date: '2022-04-15'
    }
]
let ss = new Map()
foods.map(imte=>{
    
    ss = new Map(Object.entries(foods))
})
for(let imte of foods){

}
console.log(ss);

// function ss(id) {
//    for(let itme of s){
//     if(itme[1].id == id){
//         console.log(itme);
//     }
//    } 
// }
// ss(2)\


// function delets(id) {
//     for(let itme of s){
//         if(itme[1].id == id){
//             itme.delete
//         }
//     }
// }
// delets(1)
// console.log(s);



// function name( id,name,cost) {
    
//     for(let item of s){
//         if(item[1].id == id){
//             s.delete(item)
//             s.set(s.size-1,{id:s.size+1,name:name,cost,cost})
//         }
//     }
// }
// name(3,'sf',3)
// console.log(s);