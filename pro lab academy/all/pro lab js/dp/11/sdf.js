let obj ={
    sdkf:{
        id:1,
        name:'pizza'
    },   sdkwf:{
        id:2,
        name:'pęwizza'
    },
}
function Obj(name) {
 this.name = name   
}
obj = new Obj('ksdjf')

function Obj(name) {
    let res = 0
    for(let key in obj){
        this[key] = obj[key]
        res++
    }
    this['category' + (res + 1)]={
        id:(res + 1),
    name:name
}

}
obj = new Obj('lskdjfklsdjlksdj')
// console.log(obj);
// console.log(new Boolean (12));
// console.log('her');
 let a = 'ERTERRET'
 console.log(a.toUpperCase());