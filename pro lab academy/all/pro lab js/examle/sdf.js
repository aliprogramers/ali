let obj = {
    obj1: {
        id: 1,
        name: 'pancho',
        catid: 1,
        cost: 100
    }, obj2: {
        id: 2,
        name: 'shorva',
        catid: 2,
        cost: 1300
    }
}
let categoris = {
    categoris1: {
        id: 1,
        name: 'delsert'
    }, categoris2: {
        id: 2,
        name: 'obichniy'
    }
}
let total1 = 0

let custmers = {
    custmers1: {
        id: 1,
        food1: {
            1: 2,
            2: 10
        },
        total: function () {
            for (let key in obj) {
                for (let key2 in custmers.custmers1['food1']) {
                    total1 += obj[key]['cost'] * custmers[key2]

                }
            }
        }
    }
}
console.log(custmers.custmers1.total(), total1);
console.log(total1);

function cread1(name, catid, cost) {
    let length = 0
    for (let key in obj) {
        length++
    }
    obj['obj' + (length + 1)] = {
        id: (length + 1),
        name: name,
        catid: catid,
        cost: cost
    }
}
cread1('lgman', 3, 900)
function delete1(id) {

    for (let key in obj) {
        if (obj[key]['id'] == id) {
            delete obj[key]
        }
    }

}
delete1(3)
function cread2(name) {
    let length = 0
    for (let key in categoris) {
        length++
    }
    categoris['categoris' + (length + 1)] = {
        id: (length + 1),
        name: name,
    }
}
cread2('lgman')
function delet21(id) {

    for (let key in categoris) {
        if (categoris[key]['id'] == id) {
            delete categoris[key]
        }
    }

}
delet21(3)
function cread1(name, catid, cost) {
    let length = 0
    for (let key in obj) {
        length++
    }
    obj['obj' + (length + 1)] = {
        id: (length + 1),
        name: name,
        catid: catid,
        cost: cost
    }
}
cread1('lgman', 3, 900)
function delete1(id) {

    for (let key in obj) {
        if (obj[key]['id'] == id) {
            delete obj[key]
        }
    }

}
delete1(3)
console.log(obj);
console.log(custmers);
console.log(categoris);
function gettops(id) {
    let yours = {}
    let yours2 = {}
    for (let key in custmers) {
        for (let key3 in custmers[key]) {
            for (let key2 in custmers[key3]['food1']) {
                for (let key3 in obj) {
                    if (obj[key3]['id'] == key2) {
                        yours[key3] = obj[key3]
                    }
                }
            }
        }
    }
    for (let key in yours) {
        if (Object.keys(yours2).length == 0) {
            yours2[key] = yours[key]
            continue
        }
        if (Object.keys(yours2)[0] < yours2[key]) {
            delete yours2[Object.keys(yours2)[0]]
            yours2[key] = yours[key]
        }
    }
    console.log(yours);
    console.log(yours2);
}
gettops(1)