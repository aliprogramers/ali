let obj ={
    category1:{
        id:1,
        name:'sdf'
    }
}
function foood(name) {
    this.name =name
}
let  ob2j = new foood('hello')
 console.log(obj);
 function Obj(name) {
  let lenght = 0
    for(let key in obj){
        this[key] = obj[key]
        lenght++
    }  
    this['category' + (lenght + 1)]={
        id:lenght+1,
        name:name
    }
 }
  obj = new Obj('hello world')
 console.log(obj);
 