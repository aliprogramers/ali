let category = [
    {
        id: 1,
        name: "Salat"
    },
    {
        id: 2,
        name: "Drinks"
    },
    {
        id: 3,
        name: "Hot dish"
    },
    {
        id: 4,
        name: "Pudding"
    },
]

let foods = [
    {
        id: 1,
        catId: 1,
        name: "Cezar",
        cost: "100$",
    },
    {
        id: 2,
        catId: 2,
        name: "Coca",
        cost: "100s"
    },
    {
        id: 3,
        catId: 2,
        name: "Pepsi",
        cost: "30r"
    },
    {
        id: 4,
        catId: 2,
        name: "Fanta",
        cost: "100s"
    },
    {
        id: 5,
        catId: 3,
        name: "Mastava",
        cost: "120s"
    },
    {
        id: 6,
        catId: 3,
        name: "Mastava",
        cost: "120s"
    },
    {
        id: 7,
        catId: 3,
        name: "Borsh",
        cost: "120s"
    },
    {
        id: 8,
        catId: 3,
        name: "Ash",
        cost: "1000s"
    },
    {
        id: 9,
        catId: 4,
        name: "Cake",
        cost: "1000s"
    },
]

let customers = [
    {
        id: 1,
        foods: [1, 2, 2, 4, 4, 9],
        total: function () {
            let total = 0
            let num = 0
            for (let item of this.foods) {
                for (let item2 of foods) {
                    if (item == item2['id']) {
                        for (let item3 of category) {
                                if (item3.id == 4) {
                                    num++;
                                    console.log(num);
                                }
                        }

                        //    else if (item2['cost'].includes("$")) {
                        //         let amazing = parseInt(item2['cost']) * 86;
                        //         console.log(item2);
                        //         total += amazing
                        //         console.log( amazing + ' Dollar');
                        //     } else if (item2['cost'].includes("r")) {
                        //         let amazing = parseInt(item2['cost']) * 1.3;
                        //         console.log(item2);
                        //         total += amazing
                        //         console.log(amazing + ' rubliya');
                        //     }else if (item2['cost'].includes("s")) {
                        //         let amazing = parseInt(item2['cost']);
                        //         console.log(item2);
                        //         total += amazing
                        //         console.log(amazing + ' som');

                        //     }


                    }
                }

            }
            console.log(num);
            // console.log("All summa " + total + '  som');

        }
    },
    {
        id: 2,
        foods: [1, 2, 2, 4, 4, 1, 5, 5, 5, 5],
        total: function () {
            let total = 0
            for (let item of this.foods) {
                for (let item2 of foods) {
                    for (let item3 of category) {
                        if (item3['id'] == item2['catId'] && item == item2['id']) {
                            if (item2['cost'].includes("$")) {
                                let amazing = parseInt(item2['cost']) * 86;
                                console.log(item2);
                                total += amazing
                                console.log(amazing + ' Dollar');
                            } else if (item2['cost'].includes("r")) {
                                let amazing = parseInt(item2['cost']) * 1.3;
                                console.log(item2);
                                total += amazing
                                console.log(amazing + ' rubliya');
                            } else if (item2['cost'].includes("s")) {
                                let amazing = parseInt(item2['cost']);
                                console.log(item2);
                                total += amazing
                                console.log(amazing + ' som');
                            }

                        }
                    }
                }
            }
            console.log("All summa " + total + ' som');

        }
    }

]
console.log(customers[0]['total']());
function totalSum() {

}

function topClient() {

}