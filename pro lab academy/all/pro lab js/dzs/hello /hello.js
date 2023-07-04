
// function clearnewcotegory(name) {
//     let length = 0
//     for(let key in cotegory){
//         length++
//         if(cotegory['cotegory'+length]['name'] == name){
//             console.log(("ujeest takay kotegorya"));
//             return;
//         }
//     }

// }

// // console.log(cotegory);
// function yeadcotegory(id) {
//     for(let key in cotegory){
//         if(cotegory[key].id == id){
//             delete cotegory[key]

//         }
//     }
// }
// yeadcotegory(9)
// console.log(cotegory);







let cotegory = {
    cotegory1: {
        id: 1,
        name: "ujastik",
        muves: {
            id: 1,
            name: 'astral',
            cost: 100
        },
        muves2: {
            id: 2,
            name: 'zvonik',
            cost: 200
        }
    },
    cotegory2: {
        id: 2,
        name: "ujastik",
        muves: {
            id: 1,
            name: 'astral',
            cost: 100
        },
        muves: {
            id: 2,
            name: 'zvonik',
            cost: 200
        }
    }, cotegory3: {
        id: 3,
        name: "ujastik",
        muves: {
            id: 1,
            name: 'astral',
            cost: 100
        },
        muves: {
            id: 2,
            name: 'zvonik',
            cost: 200
        }
    }
}













// function newdodegory(catid, name, cost) {
//     let length = 0

//     for (let key in cotegory) {
//         length++
//         for (let key2 in cotegory[key]['muves']) {
//             if (cotegory[key]['muves']['name'] == name) {
//                 console.log('uje set takoy name');
//                 return;
//             }

//         }
//     }
//     cotegory['muves' + (length + 1)] = {
//         id: (length + 1),
//         name: name,
//         cost: cost,


//     }

// }
// newdodegory(length, 'zvonik', 200)
// console.log(cotegory);
function newfoods(catid, name, muves3) {

    let length = 0
    let length1 = 0

    for (let key in cotegory) {
        length++
        for (let key2 in cotegory[key]) {
            if (cotegory[key]['muves']['name'] == name) {
                console.log('uje set takoy name');

                // console.log(cotegory);

                yeadcotegory(1)
                console.log(cotegory);
                return

            }

        }
    }
    function deleteid(id) {
        for (let key in cotegory) {
            if (cotegory[key].id == id) {
                delete cotegory[key]

            }
        }
    }
    deleteid(2)

    cotegory['cotegory' + (length + 1)] = {
        id: (length + 1),
        name: name,
        muves3:{
            id: (length1 + 1),
            name: name,
             
            }


    }
}
newfoods(length, 'astr2al', 600)
console.log(cotegory);
