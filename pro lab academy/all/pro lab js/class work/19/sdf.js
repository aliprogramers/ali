// let arrrr = [1, '+', 9, '*', 9]
// let total = arrrr[0];
// for (let i = 0; i < arrrr.length; i++) {
//     if (arrrr[i] == '+') {
//         total += arrrr[i + 1]
//     } if (arrrr[i] == '-') {
//         total -= arrrr[i + 1]
//     } if (arrrr[i] == '*') {
//         total *= arrrr[i + 1]
//     }
//     if (arrrr[i] == '/') {
//         total /= arrrr[i + 1]
//     }
// }
// // Molabu = [2, '+', 4, "-", 2] 
// // console.log(total);
// // console.log(arrr[2].length);
// // let arrrs = new arrray('helo')
// // console.log(arrrs);
// // arrr[0] = 'helo world'
// // arrr.unshift('hello world aboror')
// // arrr.shift()
// for(let key of arrr){
//     console.log(key);
// }
// console.log(arrr);
// let k = {}
// for (let keu of arrr) {
//     if (  keu in k) {
//         k[keu] = {
//             length: (k+=1)
//         }
//     }
//     else {
//         k = arrr[keu]
//     }
// }
// console.log(k);
// // arrr.push('helo world')
// // arrr[0] = ' hello oalsdf'
// // arrr.pop()
// // console.log(arrr);


// let categoreis = [
//     {
//         id: 1,
//         name: 'deser'
//     }, {
//         id: 2,
//         name: 'drink'
//     }, {
//         id: 3,
//         name: 'fast food'
//     },
// ]
// let foods = [
//     {
//         id: 1,
//         name: 'chocolate',
//         catid: 1,
//         cost: 100
//     }, {
//         id: 2,
//         name: 'cake',
//         catid: 1,
//         cost: 200
//     }, {
//         id: 3,
//         name: 'burger',
//         catid: 3,
//         cost: 300
//     }
// ]
// let custmers = [
//     {
//         id: 1,
//         foods: [1,]
//     },
//     {
//         id: 2,
//         foods: [1, 2, 3]
//     }
// ]

// function getttt(id) {
//     let sort = {}
//     let sort2 = {}
//     for (let item of custmers) {
//         if (item['id'] == id) {
//             for (let item2 of item['foods']) {
//                 for (let item3 of foods) {
//                     if (item3['id'] == item2) {
//                         if (item2 in sort) {
//                             sort[item2] += 1
//                         }
//                         else{
//                             sort[item2] = 1

//                         }
//                     }
//                 }
//             }
//         }
//     }
//     console.log(sort);
//     for(let key in sort){
//         if(Object.keys(sort2).length == 0){
//             sort2[key] = key
//             continue;
//         }
//         if(sort2[Object.keys(sort2)[0] <key] ){
//         delete sort2[Object.keys(sort2)[0]]
//             sort2[key] = key
//         }
//     }
//     console.log(sort2);
// }

// getttt(2)



// function searchCategory(word) {
//     for (let item in categoreis) {
//         if(item['name'].includes(word)){
//             console.log(word['name']);
//         }

//     }
// }
// searchCategory('d')

// function gettotal(masiv, discount) {
//     let total =0
//     for (let itme2 of masiv) {
//         for (let item of foods) {
//             if (item['id'] == itme2) {
//                total += item['cost'] - (item['cost'] / discount * 100)
//                item['cost'] = total
//             }
//         }
//     }
// }
// gettotal([1,2,3], 100)
// console.log(foods);

// let total = 0
// function tt(id) {
//     for (let key in custmers) {
//         for (let key3 in foods)
//             for (let key2 of custmers[key]['foods']) {
//                 if (id == custmers[key]['id']) {
//                     if (key2 == foods[key3]['id']) {
//                         total += foods[key3]['cost']
//                     }
//                 }
//             }
//     }

// }
// tt(2)
// console.log(total);
// function tops() {

//     let ke = 0
//     let obj2 = {}
//     let obj = {}
//     for (let item of custmers) {
//         for (let itme2 of item['foods']) {
//             for (let itme3 of foods) {
//                 if (itme2 in obj) {
//                     obj[itme2] += 1
//                 }
//                 else {
//                     obj[itme2] = 1

//                 }
//             }
//         }
//     }
// }
// console.log(obj);
// for (let key in obj) {
//     for (let item3 of foods) {
//         // if(){

//         // }
//         console.log(foods[key]);
//      console.log(ke , foods[key] , item3['cost']);
//     }
// }

// console.log(obj);
// let u = 0
//     for(let key in obj){
//         for(let item of foods){

//             if(item['id'] == key){
//               u += key = item['cost']
//               console.log(key);
//             }
//         }
//     }
//     // console.log(u);
//     for (let key in u) {
//         if (Object.keys(obj2).length == 0) {
//             obj2[key] = u[key]
//         }
//         if(Object.keys(obj2)[0] < u[key]){
//             delete obj2[Object.keys(obj2)[0]]
//             obj2[key] = u[key]

//         }
//     }
//     console.log(u);
//     // console.log(ke);
// }
// tops()
// function tops(id) {
//     let obj = {}
//     let tops1 = 0
//     let tops2 = 0
//     let tops3 = 0
//     for (let item3 of foods) {

//         for (let item of custmers) {
//             for (let item2 of item['foods']) {
//                 if (item['id'] == id) {
//                     tops1 = item2

//                     if (Object.keys(obj).length == 0) {
//                         obj[item3] = item3['cost']
//                     }
//                     if (Object.keys(obj)[0] < item3['cost']) {
//                         obj.splice(0, 0)

//                         obj[item3] = item3['cost']

//                     }
//                 }
//             }

//         }
//     }
//     console.log(obj);
// }
// tops(1)







// let arrr = [6,6,6,6,1,6,6,]
// // let ar = [a,a,a,b,a,a,a]
// let you = {}
// for(let item  of arrr){
//     if(item in  you){
//         you[item] += 1
//     }   
//     else{
//         you[item] =1
//     }
// }
// // console.log(you);
// let you1 = 0

// for(let key in you){
//     if(Object.keys(you1).length == 0){
//         you1 = key
//     }
//     if(Object.keys(you1)[0]> key){
//         delete Object.keys(you1)[0]
//         you1 = key

//     }
// }
// console.log(you1);
// let a = ['a', 'b', 'v']
// let b = ['c', 'd', 'e']

// let br = a.concat(b)

// for (let key of a ) {
//         br += key 
// }
// for (let key2 of b) {
//     br +=  key2
// }
// console.log(br);
// let arr = [[1, 2,], [2, 4,]]
// for(let item  of arr){
//     let c = c.concat(item)

// }
// let reuslt = []
// for(let item2  of c ){
//     if(! reuslt.includes(item2)){
//         reuslt.push(item2)
//     }
// }

let a = [1, 2, 3, 4, 5]
let b = []

function getslice(start, and) {

    for (let i = start; i < a.length; i++) {
        if (i == and) {
            break;
        }
        b.push(a[i])
    }
    console.log(b);
}
getslice(0, 2)
