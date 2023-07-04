let cinema = {
    id:1,
    movie1: {
        id: 1,
        name: "Ghost",
        space: 4
    },
    movie2: {
        id: 2,
        name: "Masha and Medved",
        space: 2
    }
}

// let customer = {
//     customer1: {
//         id: 1,
//         movieId: 2,
//         tickets: 2,
//         total: function () {
//             let x = 0
//             for (let key in cinema) {
//                 for (let key2 in cinema[key]) {
//                     x += customer.customer1.tickets * cinema[key][key2]
//                     console.log(x);
//                 }

//             }
//             console.log(x);

//         }
//     }
// }

let customer2 = {
    customer1: {
        id: 1,
        movieId: 2,
        tickets: 2,
        total: function hellos() {
            let x = 0
            for (let key in cinema) {
                if (cinema[key].id == customer2.customer1.id) {
                    console.log(cinema[key]['id']);
                }

            }
            console.log(cinema[key]);

        }
    }
}


let customers= {
    customer:{
        id:1,
        movieId:2,
        tetris:4,
        totals: function() {
            for(let key in cinema){
                if(customers.customer.id == cinema['id']){
                    console.log(cinema[key]);
                }
            
            
            
            
            

              else  if(customers.customer.movieId == cinema[key]['id']){
                console.log(cinema[key]);
            }
            
              else  if(customers.customer.id == cinema[key]['id']){
                    console.log(cinema[key]);
                }
            }
            console.log(cinema[key]);

        }
    }
}