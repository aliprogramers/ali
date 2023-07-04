// // let categories = [
// //     { id: 1, name: "Desert" },
// //     { id: 2, name: "Salat" },
// //     { id: 3, name: "Drinkes" },
// // ];
// // let foods = [
// //     { id: 1, catId: 1, name: "Chocolate Come", cost: 100 },
// //     { id: 2, catId: 1, name: "Monchmepo", cost: 50 },
// // ];


// // let customer = [{
// //     id: 1,
// //     foods: [1, 2, 2, 1],
// //     total: function () {
// //         let total = 0
// //         for (let itme2 of this.foods) {
// //             for (let itme of foods) {

// //                 if (itme.id == itme2) {
// //                     total += itme.cost
// //                 }
// //             }
// //         }
// //         return total

// //     }
// // }];
// // function redu() {
// //     let c = customer.reduce((_acc, item) => {
// //         let s = {}
// //         item.foods.forEach(item1 => {
// //             foods.forEach(imte2 => {
// //                 if (imte2.id == item1) {
// //                     categories.forEach(itm3 => {
// //                         if (imte2.catId == itm3.name) {
// //                             if(s in itm3.name){
// //                                 s[itm3.name] += imte2.cost

// //                             }
// //                             else{
// //                             s[itm3.name] = imte2.cost

// //                             }
// //                             // console.log(s);
// //                         }
// //                     })
// //                 }
// //             })
// //         })
// //         // console.log(s);
// //     })
// // console.log(c);
// // }
// // redu()
// // console.log(customer[0].total())
// // function gettottal() {
// //     let y = {}
// //     for(let itme of customer){
// //         for(let imte1 of itme.foods){
// //             for(let itme2 of foods ){
// //                 if(imte1 == itme2.id){
// //                     for(let imte3 of categories){
// //                         if(itme2.catId == imte3.id){
// //                             y[imte3.name] = itme2.cost
// //                         }
// //                     }
// //                 }
// //             }
// //         }
// //     }
// //     console.log(y);
// // }
// // gettottal()
// // let arr = [10, [20, 390], [40], 5, 6]
// // // let s = []
// // arr.reduce((itme,s=>{
// //     console.log(s);
// //     itme.find(imte2=>{


// //         s=[itme,imte2]
// //         console.log(s);
// //     })

// // }))
// // console.log(s);
// let cagory = [
//     {
//         id: 1,
//         name: 'horor'
//     },
//     {
//         id: 2,
//         name: 'comedy'
//     }
// ]
// let films = [
//     {
//         id: 1,
//         catid: 1,
//         name: 'anobel',
//         duraction: '2:30:00'
//     },
//     {
//         id: 2,
//         catid: 2,
//         name: 'trety lishniy',
//         duraction: '1:30:00'
//     }
// ]
// let hall = [
//     {
//         id: 1,
//         plaus: 15
//     },
//     {
//         id: 2,
//         plaus: 16
//     }
// ]
// let seanses = [
//     {
//         id: 1,
//         filmid: 1,
//         hallid: 2,
//         cost: 100,
//         startDate: '2022-01-24T13:00:00',
//         endtDate: '2022-01-26T15:00:00'
//     },
//     {
//         id: 2,
//         filmid: 2,
//         hallid: 1,
//         cost: 150,
//         startDate: '2022-02-02T12:00:00',
//         endtDate: '2022-02-02T13:30:00'
//     },

// ]
// let customer = [
//     {
//         id: 1,
//         tickts: [1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
//         dat: '2022-01-25'
//     },
//     {
//         id: 2,
//         tickts: [1, 1, 1, 2],
//         dat: '2022-01-27'
//     }
// ]
function top() {

    let s = {}
    let k = 0
    customer.forEach(customer => {
        customer.tickts.forEach(id => {
            let seans = seads.find(seanse => seanse.id == id)
            let film = film.find(film => film.id == seans.filmid)
            if (film['name'] in s) {
                s[film['name']] += 1
            } else {
                s[film['name']] = 1
            }
        })
    })
    let ss = {}
    for (let key in s) {
        if (Object.keys(ss).length == 0) {
            ss = s[key]
        }
        if (Object.keys(ss)[0] < s[key]) {
            console.log(ss[key]);
            delete ss[Object.keys(ss)[0]]
            ss = s[key]
        }
    }
    console.log(ss);
}
top()










// console.log('toop-------------------------------------------------------------');



// // function filmlong() {
// //     let  s =''
// //     let t = 0
// //     films.forEach(itme=>{
// //         // console.log(itme.duraction);
// //         for(let item of itme.duraction){

// //     s += item.split('-')
        
// //             // console.log(String(s)    );
// //     }
// // })
// //     console.log(s);
// // }
// // filmlong(1)
// console.log('net-------------------------------------------------------------');

// function bil() {
//     totl = 0
//     customer.forEach(itme=>{
//         seanses.forEach(itme2=>{
//             itme.tickts.forEach(itme1=>{
//                 if(itme1==itme2.id){
//                     totl += itme2.cost
//                 }
//             })
//         })
//     })
//     console.log(totl);
// }
// bil()

// console.log('bil-------------------------------------------------------------');






// function sortByDay() {
//     seanses.sort(
//       (a, b) =>
//         b.startDate.split("-")[0] - a.startDate.split("-")[0] ||
//         b.startDate.split("-")[1] - a.startDate.split("-")[1] ||
//         b.startDate.split("-")[2] - a.startDate.split("-")[2]
//     );
//     console.log(seanses);
//   }
//   sortByDay();
// console.log('sort-- seanses-----------------------------------------------------------');

// function sortByDays() {
//     customer.sort(
//       (a, b) =>
//         b.dat.split("-")[0] - a.dat.split("-")[0] ||
//         b.dat.split("-")[1] - a.dat.split("-")[1] ||
//         b.dat.split("-")[2] - a.dat.split("-")[2]
//     );
//     console.log(customer);
//   }
//   sortByDays();
// console.log('sort-- custmer-----------------------------------------------------------');





// function ttoa() {
//     let obj = {}

//     let st =0
//     customer.forEach(itme=>{
//     let totlal = 0

//         itme.tickts.forEach(itme1=>{
//             films.forEach(itme2=>{
//                 if(itme2.id == itme1){
//                     seanses.forEach(itme3=>{
//                         if(itme2.id == itme3.filmid){
//                             totlal+= itme3.cost
//                         }
//                     })

//                 }
//             })
//         })
//         // console.log(totlal);
//         obj[st] = totlal
//         st++
//     })
//     console.log(obj);
//     let s ={}
//     for(let item in obj){
//         console.log(obj[item]);
//         if(Object.keys(s).length ==0 ){
//             s = obj[item]
//             continue
//         }
//         if(Object.keys(s)[0] < obj[item] ){
//             delete Object.keys(s)[0]
//             s = obj[item]
//         }
//     }
//     console.log(s);
// }
// ttoa()
// console.log('total bill sort-----------------------------------------------------------');

