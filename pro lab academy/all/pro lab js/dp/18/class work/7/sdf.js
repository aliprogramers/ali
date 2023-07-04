let obj = {
    food1: {
        id: 1,
        name: 'burger',
        cost: 100
    }, food3: {
        id: 2,
        name: 'chisburger',
        cost: 200
    }, food4: {
        id: 3,
        name: 'pizza',
        cost: 100
    }

}
// function s() {
    

// let total = 0
// for(let key in obj){
//         total += obj[key]['cost']
// }
// console.log(total);
    
// }

// s()

let costuber={
    costuber1:{
        id:1,
        foodid:2,
        count:3,
        total:function () {
            let total = 0
            for(let key in obj){
                if(obj[key ]['id'] == this.foodid){
                    total += this.count * obj[key]['cost']
                }
            }
            return total
        }
    }
}
console.log(costuber.costuber1.total());
function hello(foodid,count) {
  let  length = 0
    for(let key in costuber){
        length++
    }
    costuber['costuber' + (length + 1)]={
        foodid:foodid,
        count:count,
        id:length + 1
    }
   console.log( length);
}
hello(2 , 400)


// console.log(lenght);
// function tops() {
//     let lenght = 0
//     for (let keye in obj['cost']) {
//         if (obj[keye] > lenght) {
//             lenght = obj[keye]
//         }
//     }
// console.log(lenght);
// }
// tops()
// let hello = {}

// let costuner = {
//     costuber: {
//         id: 1,
//         foodid: 1,
//         count: 4,
//         total: function () {
//             for (let key in obj) {
//                 if (obj[key]['id'] == this.id) {

//                      hello += this.total * obj[key]['cost']
//                 }
//                 return hello
//             }

//         }
//     }

// }
// costuner.costuber.total()

// function newfood(name,cost) {
//     let lenghts = 0
//     for(let key in obj){
//         lenghts++
//     }
//     obj['food' + (lenghts)]={
//         id:lenghts,
//         name:name,
//         cost:cost
//     }
// }
// newfood('samsung',1000)
// let objs ={
//     name:'abdullo',
//     surnme:'sulaymenov',
//     age:300
// }
// for(let key in objs){
//     console.log(key);
//     console.log(objs[key]);
// }
