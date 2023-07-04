
let food = [
    {
      id: 1,
      name: 'burger',
      cost: '320r'
    },
    {
      id: 2,
      name: 'cheseburgeer',
      cost: '250$'
    },
    {
      id: 3,
      name: 'apple',
      cost:'100e'
    },
    {
      id: 4,
      name: 'cake',
      cost: '300e'
    },
  ]
  let custamers = [
    {
      id: 1,
      food: [1, 1, 4, 2, 2],
      date: '2024-03-02'
    },
    {
      id: 2,
      food: [1, 2, 2, 3],
      date: '2023-03-02'
    },
    {
      id: 3,
      food: [2, 2, 3, 3],
      date: '2024-03-01'
    },
  ]

// function oumap(arr,calbak) {
//     let newmap=[]
//     for(let itms of custamers){
//     for(let i =0 ;i<arr.length ; i++){
//         newmap.push(calbak[arr[i],i ,arr])
//     }
// }
// console.log(newmap);

// return newmap
// }
// console.log(oumap(itms,(itme=>{
//     for(let  items of itme ){
//     for(let item2 of food){
//         if(item2.id == items){
//             return item2.cost
//         }
//     }
// }
// })))
function changefods() {


    custamers.forEach(item=>{
        let total = 0
        item.food.forEach(item2=>{
         item2 = food.map(itme=>{
                if(item2 == itme.id){
                    if(itme.cost.endsWith('e')){
                        return parseInt(itme.cost) * 92
                    }
                   else if(itme.cost.endsWith('$')){
                        return parseInt(itme.cost) * 87
                    }
                  
                  else  if(itme.cost.endsWith('r')){
                        return parseInt(itme.cost) * 2
                    }
                }
            })
        
        })
    })
}
changefods()
console.log(custamers);
// function atttta() {
    
// }