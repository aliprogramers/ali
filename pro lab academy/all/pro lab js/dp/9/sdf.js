food = {
    food1: {
        id: 1,
        name: 'borhs',
        cost: 100,
        catid: 1
    }, food1: {
        id: 2,
        name: 'shrva',
        cost: 100,
        catid: 2
    }
}
let categoryes = {
    category: {
        id: 2,
        name: 'se'
    }, category2: {
        id: 1,
        name: 'daserst'
    }
}
let custemst = {
    cutumers1: {
        id: 1,
        foods: {
            1: 200,
            2: 36,
        }
    }, cutumers13: {
        id: 2,
        foods: {
            1: 200,

        }
    }
}
function gettopfoods(id) {
    let obj = {}
    // let top1 = 0
    for (let key in custemst) {
        if (custemst[key]['id'] == id) {
            for (let key2 in custemst[key]['foods']) {
                if (Object.keys(obj).length == 0) {
                    obj[key] = custemst[key2]
                }
                if (Object.keys(obj[0] <  custemst[key2]) ) {
                    delete obj[Object.keys(obj)[0]]
                    obj[key] =  custemst[key2]
                }
            }
        }
    }

        for (let key6 in custemst) {
        for (let key3 in custemst[key6]['foods']) {
            for (let key2 in food) {
                if(custemst[key6]['id'] == id){
                    if(food[key2]['id'] == custemst[key6]['id']){


                if (key3 == food[key2]['id']) {
                    console.log(food[key2]['name']);
                }
            }}
            }
            }
        
    }
    // console.log(obj);
}
gettopfoods(1)