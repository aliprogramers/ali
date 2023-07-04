let foods = {
    food1: {
        id: 1,
        name: "Burger",
        money: 10000
    },
    food2: {
        id: 2,
        name: "Sandwich",
        money: 20
    },
    food3: {
        id: 3,
        name: "Ice-creame",
        money: 330
    },
    food4: {
        id: 4,
        name: "Cake",
        money: 10900
    }
}

// let customers = {
//     customer1: {
//         id: 1,
//         food: 1,
//         count: 5
//     },
//     customer2: {
//         id: 2,
//         food: 2,
//         count: 5
//     },
//     customer3: {
//         id: 3,
//         food: 2,
//         count: 5
//     },
//     customer4: {
//         id: 4,
//         food: 3,
//         count: 5
//     },
//     customer5: {
//         id: 5,
//         food: 3,
//         count: 5
//     },
//     customer6: {
//         id: 6,
//         food: 3,
//         count: 5
//     },
// }

function getMini() {
    let miniCost = 0
    let iteration = 0
    for (let key in foods) {
        iteration++
        if (iteration == 1 ) {
            miniCost = foods[key]['money']
            continue;
        }
       else if (miniCost < foods[key]['money']) {
            miniCost = foods[key]['money']
        } 
    }
    console.log(miniCost);

}

getMini()