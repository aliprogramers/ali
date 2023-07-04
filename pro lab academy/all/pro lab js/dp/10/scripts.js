let categorys = {
    category: {
        id: 1,
        name: 'fast food',
    }, category2: {
        id: 2,
        name: 'desert',
    }
}
let foods = {
    food1: {
        id: 1,
        name: "burger",
        catid: 1,
        cost: 100
    },
    food2: {
        id: 2,
        name: 'pudding',
        catid: 2,
        cost: 100
    }
}
let customers = {
    custmer1: {
        id: 1,
        foods1: {
            1: 5,
            2: 10,
        },
        total: function () {
            let war3 = 0
            for (let key2 in this.foods1) {
                for (let key3 in foods) {
                    if (foods[key3]['id'] == key2) {
                        war3 += customers.custmer1.foods1[key2] * foods[key3]['cost']
                    }
                }
            }
            return war3
        }



    }
}
function cared1(food) {
    let lskd = 0
    for (let key in customers) {
        lskd++
    }

    let chieck = 0
    for (let key in food) {
        for (let key2 in foods) {
            if (foods[key2]['id'] == key) {
                chieck += 1
            }
        }
        if (Object.keys(food).length == chieck) {
            customers['custmer' + (lskd + 1)] = {
                id: (lskd + 1),
                food: {
                    1: 2,
                    2: 4
                },
                total: function () {

                    let war = 0
                    for (let key2 in this.foods1) {
                        for (let key3 in foods) {
                            if (foods[key3]['id'] == key2) {
                                war += customers.custmer1.foods1[key2] * foods[key3]['cost']
                            }
                        }
                    }
                    return war
                }

            }
        }
    }

}
cared1({ 1: 2, 2: 4 })
console.log(customers);
