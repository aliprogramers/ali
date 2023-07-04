
let cotegor6 = {}

let cotegorys = {}
let kotegory = {
    cotegory: {
        id: 1,
        name: 'hello world',
        move: {

            id: 1,
            name: 'bir',

            price: 100,
            calcUltimatePrice: ' ',


        },
        move2: {

            id: 2,
            name: 'ikki',

            price: 200,
            calcUltimatePrice: ' ',


        }



    },
    cotegory2: {
        id: 2,
        name: 'hello world',
        move: {

            id: 1,
            name: 'uch',

            price: 200,
            calcUltimatePrice: ' ',


        },
        move2: {

            id: 2,
            name: 'tort',

            price: 150,
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
        cotegoryid: 2,
        count: 2,
        total: 0,
        name: ' '
    }
}
for (let keys in kotegory) {


if(cocumbers.cotegorys2.id == 1){

if(cocumbers.cotegorys2.count ==1){
    Object.assign(cotegor = cocumbers.cotegorys2.cotegoryid = kotegory.cotegory.move.id)
}
else if(cocumbers.cotegorys2.count ==2){
    Object.assign(cotegor = cocumbers.cotegorys2.cotegoryid = kotegory.cotegory.move.id)
}
    Object.assign(cotegor2 = cocumbers.cotegorys2.count)
    Object.assign(cotegor3 = cocumbers.cotegorys2.id = kotegory.cotegory.id)
    Object.assign(cotegor4 = cocumbers.cotegorys2.total = kotegory.cotegory.move.price / 100 * 10 * cocumbers.cotegorys2.count)
    Object.assign(cotegor5 = cocumbers.cotegorys2.name = kotegory.cotegory.move.name)
} else if(cocumbers.cotegorys2.id == 2){
    if(cocumbers.cotegorys2.count ==1){
        Object.assign(cotegor = cocumbers.cotegorys2.cotegoryid = kotegory.cotegory2.move.id)
    }
    else if(cocumbers.cotegorys2.count ==2){
        Object.assign(cotegor = cocumbers.cotegorys2.cotegoryid = kotegory.cotegory.move.id)
    }
    Object.assign(cotegor2 = cocumbers.cotegorys2.count )
    Object.assign(cotegor3 = cocumbers.cotegorys2.id = kotegory.cotegory2.id)
    Object.assign(cotegor4 = cocumbers.cotegorys2.total = kotegory.cotegory2.move.price / 100 * 10 * cocumbers.cotegorys2.count)
    Object.assign(cotegor5 = cocumbers.cotegorys2.name = kotegory.cotegory2.move.name)

}

}
console.log('foodid',cotegor,'count',cotegor2,'id',cotegor3,'total',cotegor4,'name',cotegor5);