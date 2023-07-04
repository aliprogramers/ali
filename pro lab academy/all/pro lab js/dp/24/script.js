// let categories = [
//     {
//       id: 1,
//       name: "Harror",
//     },
//     {
//       id: 2,
//       name: "Kamedia",
//     },
//     {
//       id: 3,
//       name: "Raman",
//     },
//   ];
//   let films = [
//     {
//       id: 1,
//       catId: 1,
//       name: "Zvonok",
//       duration: "2:30:00",
//     },
//     {
//       id: 2,
//       catId: 2,
//       name: "3 lishniy",
//       duration: "2:30:00",
//     },
//     {
//       id: 3,
//       catId: 3,
//       name: "3 metra",
//       duration: "2:30:00",
//     },
//   ];
//   let hall = [
//     {
//       id: 1,
//       plaus: 20,
//     },
//     {
//       id: 2,
//       plaus: 30,
//     },
//     {
//       id: 3,
//       plaus: 25,
//     },
//   ];
//   let seans = [
//     {
//       id: 1,
//       filmId: 1,
//       hallId: 2,
//       cost: 250,
//       startDate: "2023-03-01T22:01:06:600",
//       endDate: "2023-03-01T24:31:06:600",
//     },
//     {
//       id: 2,
//       filmId: 3,
//       hallId: 3,
//       cost: 200,
//       startDate: "2023-03-03T18:01:06:600",
//       endDate: "2023-03-03T20:31:06:600",
//     },
//     {
//       id: 3,
//       filmId: 2,
//       hallId: 4,
//       cost: 200,
//       startDate: "2023-03-04T18:01:06:600",
//       endDate: "2023-03-04T20:31:06:600",
//     },
//     {
//       id: 4,
//       filmId: 2,
//       hallId: 2,
//       cost: 200,
//       startDate: "2024-03-03T18:01:06:600",
//       endDate: "2023-03-03T20:31:06:600",
//     },
//   ];
//   let custamers = [
//     {
//       id: 1,
//       seansId: 1,
//       tickes: 4,
//     },
//     {
//       id: 2,
//       seanseId: 2,
//       tickes: 2,
//     },
//   ];
// function filetsdfjsdf(year,month) {
//     let se =  seans.filter(item=>{
//         let a = item.startDate.split('-')[0]
//         let aw = item.startDate.split('-')[1]
//         if(aw.includes(month) && a.includes(year)){
//             return item
//         }
//     })
//     console.log(se);
// }
// filetsdfjsdf(2024,03)
// let keys = [
//   {
//     id: 1,
//     name: 'majid',
//     solary: '1000 $'
//   },
//   {
//     id: 2,
//     name: 'aziz',
//     solary: '50e'
//   },
//   {
//     id: 3,
//     name: 'eldos',
//     solary: '1500r'
//   },
//   {
//     id: 4,
//     name: 'hamza',
//     solary: '150_000_000_000_000$'
//   }
// ]
// console.log(keys);
// console.log(keys.sort((b,a)=>a.solary-b.solary))
// let s = 0

// let u =keys.sort((b, a) => {
//   if (a.solary.endsWith('$')) {
//    s = parseInt(a.solary)
//     a.solary =   s *= 86
//   }
//   else if (a.solary.endsWith('e')) {
//    s = parseInt(a.solary)
//    a.solary = s *= 92
//   }
//   else if (a.solary.endsWith('r')) {
//    s = parseInt(a.solary)
//    a.solary =s *= 1.7
//   }
// console.log(s);
// })

// function getsdate() {
//   let i = 0
//   let ss = 0
//   for(let item of  custamers){
//     let s = item['date'].split('-')
//     for(let item2 of  s){
//       if(item2[0] == item2[i]){
//   console.log(s);
//   ss =  s.sort()
//         i++
//       }
//     }
//   }
//   console.log(ss);
// }
// getsdate()
// function foodss() {
//   let tottal = 0
//   let i = 0
//   let ii = 0
//   let s = {}
//   let ss = {}
//   for (let item of food) {
//     for (let item2 of custamers) {
//       for (let item3 of item2.food) {
//         if (item['id'] == item3) {
//     custamers.food.map(items=>{
//       tottal += item['cost'] 
//       items =  tottal
//     })
//         }
//       }
//     }
//   }

// }
// foodss()
// console.log(custamers);
// function gets() {
//   let s =0
//   for(let item of custamers){
//     for(let item2 of  item['date']){
//     s += item2.split('-')
//    parseInt(s)

//   }
//   }
//   console.log(s);
// }
// gets()
// console.log(u);
let categories = [
  {
      id: 1,
      name: 'Salat'
  },
  {
      id: 2,
      name: 'Desert'
  },
  {
      id: 3,
      name: 'Fast food'
  },
]

let foods = [
  {
      id: 1,
      catId: 1,
      name: 'Shakarap',
      cost: '100$'
  },
  {
      id: 2,
      catId: 3,
      name: 'Burger',
      cost: '50e'
  },
  {
      id: 3,
      catId: 2,
      name: 'Cake',
      cost: '150$'
  }
]

let customers = [
  {
      id: 1,
      food: [1, 1, 2, 2],
      date: '2023-01-02'
  },
  {
      id: 2,
      food: [2, 3, 3],
      date: '2022-12-03'
  },
  {
      id: 3,
      food: [1, 1, 2, 2],
      date: '2023-01-02'
  },
  {
      id: 4,
      food: [2, 3, 3, 3],
      date: '2023-02-12'
  }
]
let seanses =[
    {
        id:1,
        cost:100

    },
        {
        id:2,
        cost:200

    },
        {
        id:3,
        cost:300

    }
    ,    {
        id:4,
        cost:400
    }
]
// function totals() {
    
//       let total = 0
//       customers.forEach(fooid=>{
//         let result = foods.find(itme=>itme.id == fooid.id)
//           total += result.cost
//           })
//                customers.forEach(fooid=>{
//         let result = seanses.find(itme=>itme.id == fooid.id)
//           total += result.cost
//           })
//     }
// totals()

// function changeFood() {
//   customers.forEach(customer => {
//       customer.food = customer.food.map(id => {
//           let result = foods.find(food => food.id == id)
//           return result.cost
//       })
//   })
// }
// changeFood()
// function addtotal() {
//   customers.forEach(item => {
//       let total = 0
//       item.food.forEach(cost => {
//           if (cost.endsWith('$')) {
//               total = parseInt(cost) * 85
//           }
//           else if (cost.endsWith('e')) {
//               total = parseInt(cost) * 95
//           }
//       })
//       item.total = total
//   })
// }
// addtotal()
// console.log(customers);
// function sors() {
//   customers.sort( )
// }
// sors()
//  function sortcustmerbywork() {
//   let s = custamers.sort(function(a,b,c){
//     let first = a.date.split('-')
//     let second = b.date.split('-')
//     let day = (first,second)
//     if(first[0]>second[0]||first[0]==first[1]>second[1]||second[0] == first[1] < day[0]){
//       return 1
//     }
//   else  if(first[0]<second[0]||first[0]==first[1]>second[1]||second[0] == first[1] < day[0]){
//       return -1
//     }
//   else  if(first[0]==second[0]||first[0]==first[1]>second[1]|| second[0] == day[1] < day[0]){
//       return 0
//     }
//   })
//   console.log(s);
// }
// sortcustmerbywork()
// console.log(custamers);
// function sortybill() {
//   custamers.sort(function (a, b) {
//     let bil1 = 0
//     let bil2 = 0
//     a.food.forEach(item => {
//       bil1 += food.find(itme3 => itme3.id == item).cost
//     })
//     b.food.forEach(item2 => {
//       bil2 += food.find(itme4 => itme4.id == item2).cost
//     })
//     if (bil1 > bil2) {
//       return 1
//     }
//     else if (bil1 < bil2) {
//       return -1
//     }
//     else if (bil1 == bil2) {
//       return 0
//     }
//     console.log(bil1);
//     console.log(bil2);
//   }
//   )
// }
// sortybill()
// console.log(custamers);