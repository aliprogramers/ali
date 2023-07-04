


// let bil = 0

// let moneys = 1000


// let fosfd = 0
let categories = {
    category: {
        id: 1,
        name: "fast foood",
        foods: {
            food: {
                id: 1,
                name: "burger",         
                // name1: "mini burger",
                // name2: "big burger",
                price: 38,
                discount: 20,
            },
            food2: {

                id: 2,
                name: "lavash",
                // name1: "mini lavash",
                // name2: "big lavash",
                price: 68,
                discount: 40,




            }
        }
    }


,
    category2: {
        id: 2,
        name: "altin",
        foods: {
            food: {
                id: 1,
                name: "shashlik",
                // name1: "mini burger",
                // name2: "big burger",
                price: 140,
                discount: 20,
            },
            food2: {

                id: 2,
                name: "samsa",
                // name1: "mini lavash",
                // name2: "big lavash",
                price: 180,
                discount: 40,




            }
        }
    }



}
let customers = {
    customer1:{
        id:2,
        food:1,
        count:3,
    },
    customer2:{
        id:1,
        food:1,
        count:7,
    },
    custome3:{
        id:1,
        food:1,
        count:10,
    },
}




let customers2 = {
    customer1:{
        id:2,
        food:1,
        cost:3,
    },
    customer2:{
        id:1,
        food:1,
        cost:7,
    },
    custome3:{
        id:1,
        food:1,
        cost:10,
    },
}



let customers3 = {
    customer1:{
        id:2,
        food:1,
 
    },
    customer2:{
        id:1,
        food:1,

    },
    custome3:{
        id:1,
        food:1,
     
    },
}


// function AddNewCustomers(CatId){
//     for(let key in categories){
//         if(categories[key]['id'] == CatId){
         
//             for(let key2 in categories[key]['foods']){
              
//                 customers.customer1 = categories[key]['foods'][key2]  
//                   delete categories.category.foods.food.price
//                 delete categories.category.foods.food.name
//                 console.log(customers.customer1);
//             }
//         }
//         else if(categories[key['id'] != CatId]){
//             console.log('liya ti krisa');
//             break
//         }

//     }
// }
// AddNewCustomers(1)




function talang(you) {
    if(you == 1){
function AddNewCustomers(CatId){
    for(let key in categories){
        if(categories[key]['id'] == CatId){
         
            for(let key2 in categories[key]['foods']){
              
                delete categories.category.foods.food.price
                delete categories.category.foods.food.name
                customers.customer1 = categories[key]['foods'][key2]  
               
                console.log(customers.customer1);
            }
        }
        else if(categories[key['id'] != CatId]){
            console.log('liya ti krisa');
            break
        }

    }
}
AddNewCustomers(1)
    }
else if(you == 2){


function AddNewCustomers(CatId){
    for(let key in categories){
        if(categories[key]['id'] == CatId){
         
            for(let key2 in categories[key]['foods']){
              delete categories[key]['foods'][key2]['price'] 
              
                customers3.customer1 = categories[key]['foods'][key2]  

                console.log(customers3.customer1 );
            }
        }
        else if(categories[key['id'] != CatId]){
            console.log('liya ti krisa');
            break
        }

    }
}
AddNewCustomers(1)

}
else if(you == 3){
function AddNewCustomers(CatId){
    for(let key in categories){
        if(categories[key]['id'] == CatId){
         
            for(let key2 in categories[key]['foods']){
              delete categories[key]['foods'][key2]['price'] 
              delete categories[key]['foods'][key2]['discount'] 

                customers3.customer1 = categories[key]['foods'][key2]  

                console.log(customers3.customer1);
            }
        }
        else if(categories[key['id'] != CatId]){
            console.log('liya ti krisa');
            break
        }

    }
}
AddNewCustomers(2)
}

}
talang(1)


// categories['category'] = categors['category1']
// categories['category'] = categors['category2']
// let  categors = {
//     category1:{
        
//         id:1,
//         fd:1,
//         count:5 
//       },
//     category2:{
//         id:1,
//         fd:1,
//         count:7
//     }
// }
// console.log(categories);


// function fooods(fod) {

//     if (fod == 1) {
//         console.log(categories.category.foods.food.name);
//         // console.log(categories.category.foods.food.name1);
//         // console.log(categories.category.foods.food.name2);

//         function fo(fodr) {

//          if(fodr == 1){

//             console.log('cotegory1');
//             console.log('id', categories.category.foods.food.id);
//             console.log(categories.category.foods.food.discount);
//         }
//         else if(fodr == 2){
        
//             console.log('cotegory1');
//             console.log('id', categories.category.foods.food.id);
//             console.log(categories.category.foods.food.name);
//             // console.log(categories.category.foods.food.name1);
//             // console.log(categories.category.foods.food.name2);
//             console.log(categories.category.foods.food.discount);
        
//         }
//         else if(fodr == 3){
//             console.log(categories.category.foods.food.id);
//             console.log(categories.category.foods.food.name);
//         }
//     }
// fo(2)
//         // console.log(categories.category.foods.food.name1);
//         // console.log(categories.category.foods.food.name2);
//     }
//    else if (fod == 2) {
   

//     console.log(categories.category.foods.food2.name);
//     function fos(fods) {

//         // console.log(categories.category.foods.food2.name1);
//         // console.log(categories.category.foods.food2.name2);

//          if(fods == 1){

//             console.log('cotegory1');
//             console.log('id', categories.category.foods.food2.id);
//             console.log(categories.category.foods.food.discount);
//         }
//         else if(fods == 2){
        
//             console.log('cotegory1');
//             console.log('id', categories.category.foods.food2.id);
//             console.log(categories.category.foods.food2.name);
//             // console.log(categories.category.foods.food.name1);
//             // console.log(categories.category.foods.food.name2);
//             console.log(categories.category.foods.food2.discount);
        
//         }
//         else if(fods == 2){
//             console.log(categories.category.foods.food.id);
//             console.log(categories.category.foods.food.name);
//         }
   
//     }
//         fos(3)
//     }

// }

// fooods(2)
// function catid(sdf) {
//     console.log('cotegory',categories.category);
//     console.log('id' ,categories.category.foods.food.id);
// }
// catid(1)
// function yoursss(param) {
//     if(param == 1){
//    if( 1== 1){
//    function idandlog3(yoursr3) {
//        if(yoursr3 ==  1){
//         function coun(ram) {
//            console.log('id',categories.category.foods.food.id);
//            console.log('count',categories.category.foods.food.discount);
//           bil = ram *=categories.category.foods.food.discount
//            moneys -= bil
//            console.log('viy kupili',ram,'money',moneys);
//         }
//             // skolkavam nujno  burger

//         coun(5)

//        }
//       else if(yoursr3 ==  2){
//         function coun(ram) {
//            console.log('id', categories.category.foods.food.id);
//            console.log('name',categories.category.foods.food.name);
//            console.log('count',categories.category.foods.food.discount);
//            bil = ram *=categories.category.foods.food.discount
//            moneys -= bil
//            console.log('viy kupili',ram,'money',moneys);
//         }
//             // skolkavam nujno  burger

//         coun(5)

//        }
//       else if(yoursr3 ==  3){
//         function coun(ram) {
//            console.log( 'id', categories.category.foods.food.id);
//            console.log('price',categories.category.foods.food.price);
//            bil = ram *=categories.category.foods.food.discount
//            moneys -= bil
//            console.log('viy kupili',ram,'money',moneys);
//         }
//             // skolkavam nujno  burger

//         coun(5)
//        }
//    }
//    idandlog3( 2)
//    }
// }
//    else if(param == 2){
//        if(1 == 1){
//        function idandlog4(yoursr) {
//            if(yoursr ==  1){
//             function coun(ram) {
//                console.log('id',categories.category.foods.food2.id);
//                console.log('count',categories.category.foods.food2.discount);
//                bil = ram *=categories.category.foods.food2.discount
//                moneys -= bil
//                console.log('viy kupili',ram,'money',moneys);
//             }
//             // skolkavam nujno  lavash

//             coun(5)

//            }
//           else if(yoursr ==  2){
//             function coun(ram) {
//                console.log('id', categories.category.foods.food2.id);
//                console.log('name',categories.category.foods.food2.name);
//                console.log('count',categories.category.foods.food2.discount);
//                bil = ram *=categories.category.foods.food2.discount
//                moneys -= bil
//                console.log('viy kupili',ram,'money',moneys);
//             }
//             // skolkavam nujno  lavash

//             coun(5)
//            }
//           else if(yoursr ==  3){
//             function coun(ram) {
//                console.log( 'id', categories.category.foods.food2.id);
//                console.log('price',categories.category.foods.food2.price);
//                bil = ram *=categories.category.foods.food2.discount
//                moneys -= bil
//                console.log('viy kupili',ram,'money',moneys);
//             }
//             // skolkavam nujno  lavash
//             coun(5)
//            }
//        }
// //kakoy variyant 
// // 1)id count
// // 2)id name count
// // 3)id price
//        idandlog4(2)
//        }
//    }
// }
// //kakoy id  
// //1)id1
// //2)id2
//    yoursss(1)
// Object.assign()