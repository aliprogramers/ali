let obj ={
    category1:{
        id:1,
        name:'pizza'
    },
}
function Obj(name) {
 this.name = name   
}

let yours = new Obj('ksdjf')
console.log(yours);
function Obj(name) {
    let res = 0
    for(let key in obj){
        this.key = obj[key]
        res++
    }
    this.key['category1']={
        id:(res + 1),
    name:name
}

}