
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

// function saihi() {
//     alert(this)

// // }
// let user = {
//     name: 'joh'
// }

// let admin = {
//     name: 'admin'
// }


// function sayhiy() {
//     alert(this.name)
// }
// user.f = sayhiy
// admin.f = sayhiy
// admin['f']()
// user['f']()

let foods = { 
    food1 : { 
        id : 1, 
        name : "Pizza", 
        cost : 100 
    }, 
    food2 : { 
        id : 2, 
        name : "Burder", 
        cost : 120 
    }, 
    food3 : { 
        id : 3, 
        name : "Cheeseburger", 
        cost : 80 
    }, 
    food4 : { 
        id : 1, 
        name : "Lagman", 
        cost : 150 
    } 
   } 
 
 
   let customers = { 
    customer1 : { 
        id : 1, 
        food : 2, 
        count : 3, 
        total : function (){ 
            let bill = 0 
            for(let key in foods){ 
                if(foods[key]['id'] == this.food){ 
                    bill = foods[key]['cost'] * this.count 
                } 
            } 
            return bill 
        } 
   }, 
   customer2 : { 
        id : 2, 
        food : 3, 
        count : 5, 
        total : function (){ 
            let bill = 0 
            for(let key in foods){ 
                if(foods[key]['id'] == this.food){ 
                    bill += foods[key]['cost'] * this.count 
                } 
            } 
            return bill 
        } 
   } 
} 
 
 
console.log(customers.customer2.total());