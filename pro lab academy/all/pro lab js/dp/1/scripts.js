let muvies = {
    movie1: {
        id: 1,
        name: "не шутите с зохоном",
        duration: 2,
        seanses: {
            seans1: {
                id: 1,
                cost: 25.65,
                time: {
                    hour: 12,
                    minute: 30,
                }
            },
            seans2: {
                id: 2,
                cost: 30.65,
                time: {
                    hour: 18,
                    minute: 30,
                }
            }
        }
    },
    movie2: {
        id: 2,
        name: "не шутkhм",
        duration: 2,
        seanses: {
            seans1: {
                id: 1,
                cost: 45.65,
                time: {
                    hour: 2,
                    minute: 30,
                }
            },
            seans2: {
                id: 2,
                cost: 10.65,
                time: {
                    hour: 8,
                    minute: 30,
                }
            }
        }
    }
}
// function getseansHour(movieId, seansId) {
//     for (let key in muvies) {
//         if (muvies[key]['id'] == movieId) {
//             for (let key2 in muvies[key]['seanses']) {
//                 if (muvies[key]['seanses'][key2]['id'] == seansId) {
//                     console.log(muvies[key]['seanses'][key2]);
//                 }
//                 else {
//                     console.log('kdjfkldf');
//                 }
//             }
//         }
//     }
// }
// getseansHour(1, 1)
let kes = {}
function getseans(movid, price, hour, minute) {
let length = 0

    for (let key in muvies['id']) {

        if (muvies[key]['id'] != 3) {
            length++

           
        }
        if (muvies[key] != length++) {
            length = movid
            movid = kes
            
            
        }

    }
    console.log( kes,'id', movid, 'cost', price, 'hour', hour, 'minute', minute);


}

getseans(34, 878783, 23, 23)