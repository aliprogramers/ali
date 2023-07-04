let foods = {
    food1: {
        id: 1,
        name: "Pizza",
        cost: 100
    },
    food2: {
        id: 2,
        name: "Burder",
        cost: 120
    },
    food3: {
        id: 3,
        name: "Cheeseburger",
        cost: 80
    },
    food4: {
        id: 4,
        name: "Lagman",
        cost: 150
    }
}



function all(one,tu,thisi,four) {
    



// zadaniya(c)
let creads = {
    creads1: {
        
        food: 'your loh ',
    }
}
function one(crut) {
    
    for (let keys in foods) {
        if(crut == 1){
            foods.food1.name = creads.creads1.food
           

        }
       else if(crut == 2){
            foods.food2.name = creads.creads1.food

        }
       else if(crut == 3){
            foods.food3.name = creads.creads1.food

        }
       else if(crut == 4){
            foods.food4.name = creads.creads1.food
        }
}
}
one(3)
console.log(foods);





// zadaniya(r)
function tu(reats) {
    if(reats==1){
        console.log(foods.food1);
    } 
    else if(reats==2){
        console.log(foods.food2);
    }
   else if(reats==3){
        console.log(foods.food3);
    }
   else if(reats==4){
        console.log(foods.food4);
    }
}
tu(2)








// zadaca(u)
let creads2 = {
    creads1: {
        
        count: 98349384,
    }
}
function thisi(crut) {
    
    for (let key in foods) {
        if(crut == 1){
            foods.food1.cost = creads2.creads1.count


        }
       else if(crut == 2){
            foods.food2.cost = creads2.creads1.count


        }
       else if(crut == 3){
            foods.food3.cost = creads2.creads1.count


        }
       else if(crut == 4){
            foods.food4.cost = creads2.creads1.count

        }
}
}
thisi(4)
console.log(foods);














// zadacha(d)
function four(delet) {
    if(delet == 1){
        delete foods.food1
    }
  else  if(delet == 2){
        delete foods.food2
    }
   else if(delet == 3){
        delete foods.food3
    }
   else if(delet == 4){
        delete foods.food4
    }
}
four(2)
console.log(foods);
}
all(1,2,2,2)