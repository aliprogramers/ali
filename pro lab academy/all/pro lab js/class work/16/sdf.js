let category = {
    0: {
        id: 1,
        mane: 'desert'
    }
}
// function Category(name) {
//     for (let key in category) {
//         this[key] = category
//     }
//     let siz = Object.keys(category).length
//     let lostkey = Object.keys(category).at(-1)
//     this[(lostkey++) + 1] = {
//         id: (siz + 1),
//         name: name
//     }
// }
// category = new Category('holaganin')
// console.log(category);

// function Category(name) {
//     this.name = name
//     return { name: 'helkosdfjlskdfjlksdfjlksjflksfd' }
// }
// let category1 = new Category('sdfjweweweweweweds')
// function Category(name) {
//     this.name = name
//     return 'helkosdfjlskdfjlksdfjlksjflksfd'
// }
// let category2 = new Category('sdfjds')
// console.log(category2);c
let company = {
    disayner: {
        'ux -------- ui': {
            0: {
                id: 1,
                name: 'aziz',
                solary: 1
            }
        }, 'hotion': {
            0: {
                id: 1,
                name: 'nur',
                solary: 2
            }
        },
     
    },
    delelowper: {
        'frontend': {
            0: {
                id: 1,
                name: 'ali',
                solary: 3
            }
        }, 'hotion': {
            0: {
                id: 1,
                name: 'oroz',
                solary:4
            }
        }
    }
}

let methords = {
    'post': function (depeartament,job,name, solary) { 
function Worker(name,solary) {
    this.name=name
    this.solary = solary

}
for(let key in company){
    if(key == depeartament){
        if(job in company[key]){
            let lostkey = Object.keys(company[key][job]).at(-1)
            company[key][job][(+lostkey) + 1]=
            new Worker(((+lostkey)+2),name,solary)
        }
    }
}
    },
    'read': function () { },
    'update': function (id, name, solary) { },
    'delete': function (id) { },
    total: function () {
        let totals1 =0
        for (let key in company) {
            for (let key2 in company[key]) {
                for (let key4 in company[key][key2]) {
                     totals1 += company[key][key2][key4]['solary']
                }
            }
        }
        return totals1
    }
}
console.log(methords.total());
methords.post('disayner','hotion','sfdsf','300')
console.log(company.disayner.hotion);
// function NewCategory(name) {
//     let size = Object.keys(category).length
//     function Category(catname) {
//         this.id = size + 1
//         this.name = catname
//     }
//     let lostkey = Object.keys(category).at(-1)
//     category[(+lostkey) + 1] = new Category(name)

// }
// NewCategory('salat')
// console.log(category);