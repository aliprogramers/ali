
let cotegor6 = {}

let cotegorys = {}
let kotegory = {
    cotegory: {
        id: 1,
        name: 'hello world',
        move: {

            id: 1,
            name: 'bir',

            price: 300,
            calcUltimatePrice: ' ',


        }



    },
    cotegory2: {
        id: 2,
        name: 'hello worlds',
        move: {

            id: 1,
            name: 'iki',

            price: 232,
            calcUltimatePrice: ' ',


        }



    }
}


let cotegor = {}
let cotegor2 = {}
let cotegor3 = {}
let cotegor4 = {}
let cotegor5 = {}

let cocumbers = {
    cotegorys2: {
        id: 1,
        cotegoryid: 1,
        count: 1,
        total: 0,
        name: ' '
    }
}
function paramtster() {
    for (let keys in kotegory) {
        cotegor = cocumbers.cotegorys2.cotegoryid
        cotegor2 = cocumbers.cotegorys2.id

        cotegor3 = cocumbers.cotegorys2.name





        cotegor4 = cocumbers.cotegorys2.total
        if (cocumbers.cotegorys2.id == 1) {
            Object.assign(cotegor3 = kotegory.cotegory.move.name)

        }
        else {
            Object.assign(cotegor3 = kotegory.cotegory2.move.name)
        }

        Object.assign(cotegor, kotegory.cotegory.id && kotegory.cotegory2.id)
        Object.assign(cotegor2, kotegory.cotegory.move.id && kotegory.cotegory2.move.id)
        Object.assign(cotegor4 = kotegory.cotegory.move.price * 10 / 100 * cocumbers.cotegorys2.count)




        console.log('id', cotegor);
        console.log('food id', cotegor2);
        console.log('name', cotegor3);
        console.log('total', cotegor4);

    }
}
paramtster()