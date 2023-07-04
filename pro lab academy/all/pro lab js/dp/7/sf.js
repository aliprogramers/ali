let category = {
    category1: {
        id: 1,
        name: 'vip'
    }, category2: {
        id: 2,
        name: 'sredniy'
    }, category3: {
        id: 3,
        name: 'ekanom'
    },
}
let ruims = {
    rooom1: {
        id: 1,
        name: 'k',
        catid: 1,
        cost: 100,
        correpresoon: 110
    }, rooom2: {
        id: 2,
        name: 'kaku sultan suleymana',
        catid: 3,
        cost: 0,
        correpresoon: 330
    }, rooom3: {
        id: 3,
        name: 'kaku sultan gitlera',
        catid: 2,
        cost: 0,
        correpresoon: 220
    }, rooom4: {
        id: 4,
        name: 'kaku sultan nurullo',
        catid: 1,
        cost: 100,
        correpresoon: 100
    }, rooom5: {
        id: 5,
        name: 'kaku sultan televizora',
        catid: 3,
        cost: 0,
        correpresoon: 300
    }, rooom6: {
        id: 6,
        name: 'kaku sultan ssha',
        catid: 2,
        cost: 0,
        correpresoon: 220
    }
}
let grer = {}
let length = 0
let length2 = 0
// function cread(id, name, catid, cost, correpresoon) {


//     for (let key in category) {
//         for (let key2 in ruims) {
//             if (category[key]['id'] == id)
//                 if (ruims[key2]['catid'] == category[key]['id']) {
//                     grer[key] = ruims[key2]
//                 }
//         }
//     }
//     for (let key2 in ruims) {
//         length++
//     }
//     for (let key in ruims) {
//         if (ruims[key]['name'] == name) {
//             console.log('est takoi');
//             return;
//         }
//         else if (ruims[key]['name'] != name) {
//             ruims['rooom' + (length + 1)] = {
//                 id: (length + 1),
//                 name: name,
//                 catid: catid,
//                 cost: cost,
//                 correpresoon: correpresoon
//             }
//         }

//     }
// }
// cread(1, 'kererfd', 1, 1200, 150)
// console.log(ruims);
function updete(id, name, catid, cost, correpresoon) {


    for (let key in category) {
        for (let key2 in ruims) {
            if (category[key]['id'] == id)
                if (ruims[key2]['catid'] == category[key]['id']) {
                    grer[key] = ruims[key2]
                }
        }
    }
    for (let key2 in ruims) {
        length2++
    }
    for (let key in ruims) {
   
         if (ruims[key]['id'] == id) {
            ruims[key]['name'] = name;
            ruims[key]['catid'] = catid;
            ruims[key]['cost'] = cost;
            ruims[key]['correpresoon'] = correpresoon

        }

    }
}
updete(3, 'k2wlksdjflks', 2, 1234534500, 150987459835)
console.log(ruims);