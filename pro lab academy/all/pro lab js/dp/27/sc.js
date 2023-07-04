let obj = new Map([
    ['category1', { id: 1, name: 'desert1' }],
    ['category2', { id: 2, name: 'desert2' }],
    ['category3', { id: 3, name: 'desert3' }],
])
let food = new Map([
    ['category1', { id: 1, name: 'cake1', catid: 1, cost: 100 }],
    ['category2', { id: 2, name: 'kace2', catid: 1, cost: 140 }],
    ['category3', { id: 3, name: 'kkace3', catid: 2, cost: 190 }],
])
let customer=new Map([
    ['customer1',{id:1,foods:[1,2,2,2], date:'20-05-23-T-23-00-00'}],
    ['customer2',{id:2,foods:[1,2,2],  date:'20-05-21-T-23-00-00'}],
    ['customer3',{id:3,foods:[1,2,2,],  date:'20-05-22-T-23-00-00'}],
  ])
  
    function getTopById(){
    let obj = {}
    for(let item of customer){
        item[1]['foods'].forEach(item => {
            for(let item2 of food){
                if(item2[1]['id'] == item){
                    if(item2[1]['catId'] in obj){
                        if(item in obj[item2[1]['catId']]){
                            obj[item2[1].catid][item] += 1
                        }else {
                            obj[item2[1].catid][item] = 1
                        }
                    }else{
                        obj[item2[1].catid] = {
                            [item] : 1
                        }
                   }
                }
            }
        })
    }
        console.log(obj);
    }
    getTopById()
// let objs = new Map()
// for(let objj in obj){
//             for(let obs in obj[objj]){

// obj[objj][obs]
// for(let key in obj){
//     for(let key3 of customer){
//         if(key3[1].id == key){

//             for(let item  of food){
//                 for(let key32 in  obj[key]){
//                     if(key32 == item[1].id){
//                     objs.set(key3[1],item[1])
//                     }
//                     // console.log(key3[1].foods);
//             }}
//         }
//     // for(let key2 in obj[key]){
//     //     console.log();
//     // }
// }
// }
// console.log(objs);

            // }
        // }


//   function getTopById(){
//     let obj = {}
//     for(let item of customer){
//         item[1]['foods'].forEach(item => {
//             for(let item2 of food){
//                 if(item2[1]['id'] == item){
//                     if(item2[1]['catId'] in obj){
//                         if(item in obj[item2[1]['catId']]){
//                             obj[item2[1].catid][item] += 1
//                             continue
//                         }else {
//                             obj[item2[1].catid][item] = 1

//                         }
//                     }else{
//                         console.log(item2);
//                         obj[item2[1].catid] = {
//                             [item] : 1
//                         }
//                    }
//                 }
//             }
//         })
//     }
//         console.log(obj);
// // let objs = new Map()
// // for(let objj in obj){
// //             for(let obs in obj[objj]){

// // obj[objj][obs]
// // for(let key in obj){
// //     for(let key3 of customer){
// //         if(key3[1].id == key){

// //             for(let item  of food){
// //                 for(let key32 in  obj[key]){
// //                     if(key32 == item[1].id){
// //                     objs.set(key3[1],item[1])
// //                     }
// //                     // console.log(key3[1].foods);
// //             }}
// //         }
// //     // for(let key2 in obj[key]){
// //     //     console.log();
// //     // }
// // }
// // }
// // console.log(objs);

//             // }
//         // }

// }
// getTopById()
//   console.log(customer);
//   function show() {
//     let news =new Map()
//     let s ={}
//     let s2 ={}
//     for(let item of customer){
//         h =[]
//         for(let itme of food){
//             if(item[1].foods == itme[1].id){
//                 s=itme[1]
//                 s2=item[1]
//                 h.push(itme[1])
//                 news.set(itme[1],h)
//         }
//     }
//     // console.log(news);
//     for(let items of news){
//         console.log(items);
//         // for(let itme of  s[items]){
//         //     console.log(itme);
//         // }
//             // console.log(s.items);
//     }
// }
// // console.log(news);

// }
//   show()
// console.log(food);
// function chs(name) {
//     let ch = false
//     let len = 0
//     for (let itme of obj) {
//         if (itme[1].name == name) {
//             ch = true
//         }
//         len++
//     }
//     if (ch == false) {
//         obj.set('category' + len + 1, { id: len + 1, name: name })
//     }

// }
// chs('cathe')
// console.log(obj);
// function up(id,name,cost) {
//     for(let itme of food){
//         if(itme[1].id == id){
//             console.log();
//             itme={
//                 id:id,
//                 name:name,
//                 cost:cost
//             }
//         }
//     }
// }
// up(3,'helos',2000)
// console.log(food);
// function up(id) {
//     for(let itme of food){
//         if(itme[1].id == id){
//             console.log(itme);
//         }
//     }
// }
// up(3)
// function ups(id) {
//     for (let itme of food) {
//         if (itme[1].id == id) {
//             food.delete(itme[1].cost)
//         }
//     }
// }
// ups(3)
// console.log(food);
// function show() {
//     let nnew = new Map()
//     for (let imte of obj) {
//         let nnew2 = []
   
//         for (let imte2 of food) {
//             if (imte[1].id == imte2[1].catid) {
//                 if(imte2[1].size<){

//                 }
              
//               nnew2.push(imte2[1])
//                 nnew.set(imte[1],nnew2)
//             }
//         }
//     }
    // let s =[]
    // for(let item of nnew){
    //     for(let itmes of item[1]){
            
    //         console.log(item[0]);

    //         console.log(itmes);
    //     }
    // }
    // console.log(nnew);
// }
// show() 

// console.log();