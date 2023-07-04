let ar = ['loh','nur','loh']
ar.forEach((item,index,Array)=>{
console.log(`${item}-${index}-${Array}`)
})
let cat = [
    {
        id:1,
        name:'desert'
    },
    {
        id:2,
        name:'slat'
    },
    {
        id:3,
        name:'drink'
    }
]
function getcat(id) {
    cat.forEach(function(item){
        if(item['id'] == id){
            console.log(item);
        }
    })
}
getcat(2)