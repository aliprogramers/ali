let cinema = {
    id: 1,
    movie1: {
        id: 1,
        name: "Ghost",
        space: 4,
        price: 100
    },
    movie2: {
        id: 2,
        name: "Masha and Medved",
        space: 2,
        price: 200,
    }
}



// let customers = {
//     customer: {
//         id: 1,
//         movieId: 2,
//         tickets: 2,
//         totals: function () {
//             let reust = 0;
//             for (let key in cinema) {
//                 if (cinema[key]['id'] == this.movieId) {
//                     reust = cinema[key]['price'] * this.tickets
//                 }
//             }
//             return reust
//         }
//     }
// }
// Mesta ?? 
let x = 0
function gettickets(movieId, tickets) {
    for (let key in cinema) {
        if (cinema[key]['id'] == movieId) {
            if (tickets != 0) {
                if (cinema[key]['space'] < tickets) {
                    console.log('net mesta');
                    return;
                }



                x = cinema[key]['space'] - tickets
                console.log(x);
            }



        }
    }
}
gettickets(2, 2)

function getname(name, space, price) {
    let lenth = 0
    for (let key in cinema) {
        lenth++
    }
    cinema(['movie1' + (lenth + 1)]) = {
        id: lenth,
        name: name,
        space: space,
        price: price
    }
}
getname('dostlar', 5, 200)
console.log(cinema);
// console.log(customers['customer']['totals']());