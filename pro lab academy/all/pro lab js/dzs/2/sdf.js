let kol = 0
kol++
kol++
kol++
let money = 1000
let bil = 0
let categories = {
    category: {
        id: 1,
        name: "Hot Dish",
        foods: {
            food: {
                id: 1,
                name: "Bifshteks",
                price: 38,
                discount: 20,
                count: 4,
                calcUltimatePrice: function () {
                    return (this.price / 100) * this.discount

                }
                

            },
            food2: {
                
                id: 2,
                name: "Pelmen",
                price: 68,
                discount: 40,
                count: 7,
                calcUltimatePrice: function () {
                    bil += discount
                    money -= bil
                    console.log(money);

                    return (this.price / 100) * this.discount
                }
            }
        }
    },
    category2: {
        id: 2,
        name: "Desert",
        foods: {
            food: {
                id: 1,
                name: "Pudding",
                price: 28,
                discount: 10,
                count: 3,
                calcUltimatePrice: function () {
                    bil += discount
                    money -= bil
                    console.log(money);

                    return (this.price / 100) * this.discount
                }
            },
            food2: {
                id: 2,
                name: "Marshmello",
                price: 100,
                discount: 50,
                count: 8,
                calcUltimatePrice: function () {
                    bil += discount
                    money -= bil
                    console.log(money);

                    return (this.price / 100) * this.discount
                }
            }
        }
    }
}

function addcategory(name,name2,count,discount,price,){
    for(let key in categories){
        let size = Object.keys(categories).length;
        let size2 = Object.keys(categories[key]['foods']).length; 
        categories['category' + (size + 1)] = {
            id:size + 1,
            name:name,
            foods:{
                id:size2 + 1,
                name:name2,
                count:count,
                discount:discount,
                price:price,
                calcUltimatePrice: function (){
                    bil += discount
                    money -= bil
                    console.log(money);
    
                    return (this.price / 100) * this.discount
                }
            }
        }
       
    }
}
function update(id, name, surname,age,job) {
    for(let key in categories){
        if(id == categories[key]['id']){
            categories[key]['name']= name,
            categories[key]['suname']= surname,
            categories[key]['age']= age,
            categories[key]['job']= job
        }
    }
}
console.log(categories.category);
delet(1,'huy','djfkldf',23,'dfjdlkj')
function dletetcategories(id) {
    for(let key in categories){
        if(id == categories[key]['id']){
            delete categories[key]
        }
    }
}
addcategory("salom","Hot-dog",4,20,12)
function foodss() {
    for(let key in categories){
        for(let key2 in categories[key]['foods']){
            bil = categories[key]['foods'][key2]['price'];
            money -= bil
        }
    }
    return money
}


foodss()
// console.log(money);
// console.log(categories.category);
// console.log(categories.category2);


dletetcategories(1)
console.log(categories);