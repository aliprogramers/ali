let categoryis = {
    category1: {
        id: 1,
        name: 'desert'
    }, category2: {
        id: 2,
        name: 'desert'
    }
}
let foods = {
    food1: {
        id: 1,
        catid: 2,
        name: "burger",
        cost: '100 $'
    },
    food2: {
        id: 1,
        catid: 1,
        name: 'pizza',
        cost: '100 £'
    }
}
let cutmers = {
    custemer: {
        id: 1,
        foods: {
            0: 1,
            1: 2,
            2: 1
        }
    }, custemer2: {
        id: 2,
        foods: {
            0: 2,
            1: 2,
            2: 1
        }
    }
}
let total = 0
function gettotal(id) {
    for (let key in foods) {
        for (let key2 in cutmers) {

        if (cutmers[key2]['id'] == id) {
                for (let key3 in cutmers[key2]) {
                    if (foods[key]['cost'].includes('$') ) {
                        total += parseInt( foods[key]['cost'] * cutmers[key2][key3]['cost'] * 82)
                    }
                    else if (foods[key]['cost'].includes('£')) {
                        total += parseInt(foods[key]['cost'] * cutmers[key2][key3]['cost'] * 97)
                    }
                    
                }
            }
        }
    }
}
gettotal(1)
console.log(total);