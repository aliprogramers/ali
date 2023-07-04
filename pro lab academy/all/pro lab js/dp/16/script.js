let categoryids = [
    {
        id: 1,
        name: 'desert'
    }, {
        id: 2,
        name: 'salet'
    }, {
        id: 3,
        name: 'fast food'
    }, {
        id: 4,
        name: 'pizza'
    }, {
        id: 5,
        name: 'ice cream'
    }, 
]
    function your(array){
        for(let i = array[0] -1 ;i < array[1];i++){
            categoryids.splice(i,1,{})
        }
    }
    your([1,4])
console.log(categoryids);
    // {
    //     id: 6,
    //     name: 'prolab'
    // }

// categoryids.splice(1,,'hes')
// function deletecat(array) {
//     let ttt = categoryids
//     let tt =categoryids.length
//     // let t =0
//     // for (let item of array) {
//     //     if(tt){

//     //     console.log(tt);
//     // }
//     if (array[0] > array[1]) {

//             categoryids.splice(array[1] - 1, array[0] - (array[1] - 1),tt = ttt = {})
//             tt -= categoryids.length
//         }
//         else {
//             categoryids.splice(array[1] - 1, array[0] - (array[1] - 1),tt = ttt = {})
//             tt -= categoryids.length
//             console.log(categoryids.length);

//         // }

//     }
// }
// deletecat([2,4])
// console.log(categoryids);
// // function deletecat(array) {
// //     let tt2 = 0
// //     let ttt = 0
// //     let tt  = {}
    
// while(categoryids.length == tt2){
// tt2++

        
//         tt+={}
//     }    

// console.log(tt);
//     for (let itme of array) {

//         if (array[0] > array[1]) {
//             categoryids.splice(array[1] - 1, array[0] - (array[1] - 1),tt)
//             ttt -categoryids.length
//         }
//         else {

//             categoryids.splice(array[0] - 1, array[1] - (array[0] - 1),tt)
//             ttt -= categoryids.length
//         }
//     }
// }
// deletecat([1, 4])
// console.log(categoryids);

