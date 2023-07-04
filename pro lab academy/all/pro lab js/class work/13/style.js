let food = {
    food1: {
        id: 1,
        catid: 1,
        name: 'burger',
        cost: 100
    }, food2: {
        id: 2,
        catid: 1,
        name: 'shurma',
        cost: 100
    }, food3: {
        id: 3,
        catid: 2,
        name: 'punding',
        cost: 100
    },
}
let categoriys = {
    category: {
        id: 1,
        name: 'fast food'
    }, category2: {
        id: 2,
        name: 'desert'
    }
}
let customers = {
    categor: {
        id: 1,
        foods: {
            '1': 10,
            '2': 10
        }
    }, categor2: {
        id: 2,
        foods: {
            '2': 10
        }
    }
}
function gettotal(id) {
    let top1 = {}
    let total = 0
    for (let key in food) {
            for (let key3 in customers) {
            for (let key4 in customers[key3]['foods']) {
              if(customers[key3]['id'] == id){
                if(food[key]['id'] == key4){
            for (let key5 in customers[key3]['foods'][key4]) {
                    total += (food[key]['cost'] * customers[key3]['foods'][key4][key5])
                }
            }
              }
            }       
        }
     return  top1[key] = total
    }
    for(let key in top1){
        if(Object.keys(total).length == 0){
            total[key]= top1[key]
            continue
        }
        if(Object.keys(total)[0] < top1[key]){
            delete total[Object.keys(total)[0]]
            total[key]= top1[key]
        }
    }
    console.log(total);
    console.log(top1);

}
gettotal(1)

// function gettotal2() {
//     let total = {}
//     for (let key in customers) {
//         let size = Object.keys(customers[key]['foods']).length
//         total[key] = size
//     }
//     let tops = {}
//     for (let key in total) {
//         if (Object.keys(tops).length == 0) {
//             tops[key] = total[key]
//             continue
//         }
//         if (Object.keys(tops)[0] < total[key]) {
//             delete tops[Object.keys(tops)[0]]
//             tops [key]= total[key]
    
//         }
//     }
//     console.log(total);
// }
// gettotal2()


