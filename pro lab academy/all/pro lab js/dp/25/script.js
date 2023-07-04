let categories = [
    { id: 1, name: "Horror" },
    { id: 2, name: "Comedy" },
    { id: 3, name: "Action" },
];
let films = [
    { id: 1, name: "Rush Hour", catId: 3, duration: "2:40:30" },
    { id: 2, name: "Anabel", catId: 1, duration: "2:30:40" },
    { id: 3, name: "3 lishniy", catId: 2, duration: "2:10:00" },
    { id: 4, name: "Mehanick", catId: 3, duration: "1:45:00" },
];
let hall = [
    { id: 1, places: 20 },
    { id: 2, places: 15 },
];
let foods = [
    { id: 1, name: "Pop Corn", cost: 50 },
    { id: 2, name: "Cucuruza", cost: 60 },
    { id: 3, name: "Cola", cost: 70 },
    { id: 4, name: "Fanta", cost: 70 },
];
let seances = [
    {
        id: 1,
        filmId: 1,
        hollId: 1,
        cost: 100,
        startDate: "2022-02-20T12:20:00",
        endDate: "2022-02-20T15:00:30",
    },
    {
        id: 2,
        filmId: 2,
        hollId: 2,
        cost: 300,
        startDate: "2022-02-21T13:30:00",
        endDate: "2022-02-21T15:00:40",
    },
    {
        id: 3,
        filmId: 3,
        hollId: 2,
        cost: 100,
        startDate: "2022-02-22T10:00:00",
        endDate: "2022-02-22T11:45:00",
    },
];
let customer = [
    { id: 1, seans: [1, 1, 1, 3, 3], food: [2, 2, 3, 3], date: "22-02-10" },
    { id: 2, seans: [2, 2, 2, 2], food: [4, 4, 4], date: "22-06-05" },
];

function sortByDay() {
    customer.sort(
      (a, b) =>
        b.date.split("-")[0] - a.date.split("-")[0] ||
        b.date.split("-")[1] - a.date.split("-")[1] ||
        b.date.split("-")[2] - a.date.split("-")[2]
    );
    console.log(customer);
  }
  sortByDay();
// function checost(id,cost) { 
//     let s = 0
// customer.every(item =>{
//     for(let itme2 of seances){
//         for(let items of item.seans){
//         if(items == itme2.id&&item.id == id){
//             if(itme2.cost >= cost){
                
//                 console.log( true)
//             }
//             else{
//            console.log( false)
//             }
//         }
//     }
// }
// })
// }
// checost(2,20)
// function cinema(id, category) {
//     let user = customer.find(item=>item.id==id)
//     return user.seans.every(seancesId=> {
//     let film = films.find(film=>film.id =seancesId)
//     let cat = categories.find(category=>category.id== film.catId)
//     if(cat.name==category){
//         return true
//     }
//     })

//     }
//     console.log(cinema(3,'Comedy'));




// console.log(categories.length);
// ---------------------------------------every------------------------------//
// function ournam(arr,calbakck) {
//     let arrs = arr
// let letngt = arrs.length
// let index = 0
// while(index<letngt){
//     let result = calbakck(arrs[index],index,arrs)
//     if(!result){
//         return false 
//     }
//     index++

// }
// return true
// }
// console.log(ournam([2,2],(item=>item == 2)));
// ----------------------------------------some------------------------------//
// function oursome(arr,calbakck) {
//     let ar = arr
//     let len = ar.length
//     let s = 0
//     while(s<len){
//         let result = calbakck(ar[s],s,ar)
//         if(result){
//             return true
//         }
//         s++
//     }
//     return false
    
// }
// console.log(oursome([1,2,43,5,4,3,4,4,4,],(itme=>itme == 1)))
// ----------------------------------------some------------------------------//
// function chekcategoryes(id,category) {
//     let user = customer.find(item => item.id == id)
//     return user.seans.every(item2 =>{
//         let arr = seances.find(seancesId=> item2 == seancesId.id)
//         let b = films.find(elem=>elem.id == arr.filmId)
//         let c = categories.find(itme3=> b.catId == itme3.id)
//         if(c.name !== category){
//             return true
//         }
//     })
// }
// console.log(chekcategoryes(2,"Action"))
// function cusss() {
//     let lent = 0
//     let s = []
//     for(let ss  of customers){
//         if(s in ss.seans){
//             s2q  w
//         }
//     }
//     let totl = 0
//     for(let itme of customers){
//         for(let item of seanses){
//     for(let itm2 of itme.seans){
//         if(itm2 == item.id){
//             totl += item.cost
//             console.log('s');
//         }
//     }
// }
// }
// console.log(totl);
// }
// cusss()


// function map() {
//     for (let itme of films) {
//         for (let item of categories) {
//             if (itme['catId'] == item.id) {
//                 itme.catId = item.name
//             }
//         }
//     }
// }
// map()
// console.log(films);