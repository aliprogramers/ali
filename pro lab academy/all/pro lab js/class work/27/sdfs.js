let user = [
    {
        id: 1,
        name: 'majid'
    },
    {
        id: 2,
        name: 'ibrohim'
    },
    {
        id: 1,
        name: 'ism'
    },
    {
        id: 2,
        name: 'at'
    },
    {
        id: 1,
        name: 'name'
    },
    {
        id: 2,
        name: 'sfsdf'
    },
    {
        id: 3,
        name: 'sfqwesdf'
    },
    {
        id: 3,
        name: 'sfqwesdf'
    },
    {
        id: 3,
        name: 'sfqwesdf'
    },
    {
        id: 2,
        name: 'sfsqwdf'
    },
    {
        id: 4,
        name: 's3fsdf'
    },

]
// function nasd() {
//     let us = []
//     let uss = []
//     for(let item of user){
//         if(item in us){
//             us = item
//             uss = item
//         }
//         else{
//             us = item
//             uss = item.id
//         }
//        item  = us
//     }

// }
// nasd()
// let s  = new Date('2023-01-23')
// console.log(s);
let month =[
    {
        id:0,
        name:'yanvar'
    },
    {
        id:1,
        name:'fevral'
    },
    {
        id:2,
        name:'mart'
    },
    {
        id:3,
        name:'aprel'
    },
    {
        id:4,
        name:'may'
    },
    {
        id:5,
        name:'iyl'
    },
    {
        id:6,
        name:'iun'
    },
    {
        id:7,
        name:'avgus'
    },
    {
        id:8,
        name:'sen'
    },
    {
        id:9,
        name:'actya'
    },
    {
        id:10,
        name:'nayabr'
    },
    {
        id:11,
        name:'dekaber'
    },
]

let day =[
    {
        id:0,
        name:'panidenik'
    },
    {
        id:1,
        name:'vtornik'
    },
    {
        id:2,
        name:'sreda'
    },
    {
        id:3,
        name:'chetverk'
    },
    {
        id:4,
        name:'pyatnisa'
    },
    {
        id:5,
        name:'subota'
    },
    {
        id:6,
        name:'vaskriseniya'
    },
]
function days(dates) {
    let ars=[]

    let s = dates.split('-')
    let y = new Date().getFullYear(s[0])
    let d = new Date().getDay(s[1])
    let m = new Date().getMonth(s[2])
for(let item of month){
    if(item.id == m){
        m = item.name
        for(let itemw of day){
            if(itemw.id == d){
                d = itemw.name
            
ars.push(`${}god`,m,d)

            }
        }
    }
}
console.log(ars);
}
days('202-01-23')
let d = new Date(2023, 0, 23);
    let weekdays = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
    let months = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ];

    let formattedDate =
      weekdays[d.getDay()] +
      ", " +
      months[d.getMonth()] +
      ", " +
      d.getFullYear();



// console.log(user);
// function sdf() {
//     let i = 0
//     let i2 = 1
//     let s = []
//     let y = []

    // for (let item of user) {

// console.log( item.id.sort())
    
     

//     }
//     console.log(s);
// }
// sdf()
