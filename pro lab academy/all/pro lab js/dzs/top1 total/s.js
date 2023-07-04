// let objs = {

//     obj: {
//         food1: {
//             id: 1,
//             name: 'burger',
//             cost: 100
//         }, food3: {
//             id: 2,
//             name: 'chisburger',
//             cost: 500
//         }, food4: {
//             id: 3,
//             name: 'pizza',
//             cost: 100
//         }

//     },
//     obj2: {
//         food1: {
//             id: 2,
//             name: 'burger',
//             cost: 100
//         }, food3: {
//             id: 2,
//             name: 'chisburger',
//             cost: 400
//         }, food4: {
//             id: 3,
//             name: 'pizza',
//             cost: 100
//         }

//     }
// }

// let total = 0

// let costuber = {
//     costuber1: {
//         id: 1,
//         foodid: 2,
//         count: 2,
//         totals: function () {
//             for (let key in objs) {
//                 for (let key2 in objs[key]) {
                    
//                     if (Object.keys(total) != 0) {
//                         total += this.count * objs[key][key2]['cost']
//                         total = objs[key]
//                         continue
//                     }
//                     if (total < objs[key][key2]['cost']) {
//                         delete total[Object.keys(total)]
//                         total = objs[key]

//                     }

//                 }
//             }

//             return total
//         }
//     }
// }
// console.log(costuber.costuber1.totals());
// function hello(foodid,count) {
//   let  length = 0
//     for(let key in costuber){
//         length++
//     }
//     costuber['costuber' + (length + 1)]={
//         foodid:foodid,
//         count:count,
//         id:length + 1
//     }
//    console.log( length);
// }
// hello(2 , 400)

let obj = { 
    food1: { 
      id: 1, 
      name: "burger", 
      cost: 1000, 
    }, 
    food2: { 
      id: 2, 
      name: "chesburger", 
      cost: 550, 
    }, 
    food3: { 
      id: 3, 
      name: "pizza", 
      cost: 150, 
    }, 
  }; 
  let customer = { 
    customer1: { 
      id: 1, 
      foodId: 1, 
      count: 4, 
      total: function () { 
        let total = 0; 
        for (let key in obj) { 
          if (obj[key]["id"] == this.foodId) { 
             total += this.count * obj[key]["cost"]; 
             if (Object.keys(total) != 0) {
                                        total += this.count * obj[key]['cost']
                                        total = obj[key]
                                        continue
                                    }
                                    if (total < obj[key]['cost']) {
                                        delete total[Object.keys(total)]
                                        total = obj[key]
                
                                    }
             return total 
          } 
        } 
        console.log(total); 
      }, 
    }, 
    customer2: { 
      id: 2, 
      foodId: 2, 
      count: 2, 
      total: function () { 
        let total = 0; 
        for (let key in obj) { 
          if (obj[key]["id"] == this.foodId) { 
            total += this.count * obj[key]["cost"]; 
            if (Object.keys(total) != 0) {
                total += this.count * obj[key]['cost']
                total = obj[key]
                continue
            }
            if (total < obj[key]['cost']) {
                delete total[Object.keys(total)]
                total = obj[key]

            }
            return total 
          } 
        } 
        console.log(total); 
      }, 
    }, 
  }; 
  customer["customer1"]["total"](); 
  customer["customer2"]["total"]();
