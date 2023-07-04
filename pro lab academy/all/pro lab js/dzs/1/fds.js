let ar = [10," + ",9 ,"-", 8 ,"*" ,5]
let yt = 0
for(let item of ar){
    if(ar.includes('+')){
        console.log('p');
        if(item == Number){
            yt += ar[0] + item
        }
    }
   else if(ar.includes('-')){
        if(item == Number){
             yt -=item
        }
    }
   else if(ar.includes('*')){
        if(item == Number){
            yt *= item
        }
    }
    
}
// console.log(yt);