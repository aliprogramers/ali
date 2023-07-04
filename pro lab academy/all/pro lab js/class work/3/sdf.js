let foods = {
    food1: {
        id: 1,
        name: "Burger",
        cost: 20000
    },
    food2: {
        id: 2,
        name: "CheeseBurger",
        cost: 30000
    },
    food3: {
        id: 3,
        name: "Sandwich",
        cost: 1212212121
    }
}

let customer = {
    customer1: {
        id: 1,
        foodId: 2,
        count: 2,
    },
    customer2: {
        id: 1,
        foodId: 1,
        count: 2,
    },
    customer3: {
        id: 2,
        foodId: 3,
        count: 2,
    },
    customer4: {
        id: 2,
        foods: 3,
        count: 2,
    }
}


function getBill(id) {
    for (let key in customer) {
        if (customer[key]['id'] == id) {

            for (let key2 in foods) {
                if (foods['food1']['id'] == customer['customer2']['foodId']) {
                    let result = foods['food1']['cost'] * customer['customer2']['count']
                    console.log(result);
                }
            }

        }
    }


}

getBill(1)
function getTotal() {
    let result = 0
    for (let key in customer) {

        for (let key2 in foods) {
            if (customer[key]['foodId'] == foods[key2]['id']) {
                result += foods[key2]['cost'] * customer[key]['count']
            }
        }

    }

    console.log(result);
}

getTotal()





function getClient() {
    let couns = 0
    for (let key in foods) {
        if (foods[key]['cost'] > couns) {
            couns = foods[key]['cost']
        } else if (foods[key]['cost'] < couns) {
            couns = foods[key]['cost']
        }else if (foods[key]['food1']['cost'] >foods[key]['food2']['cost'] >foods[key]['food3']['cost']  )
        couns = foods[key]['cost']
    
        console.log(couns);

}
getClient()


}
