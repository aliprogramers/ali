// let s =[]
// function ourcustomrfill(arr,value,start,end) {
//     let o = arr
//     let len = o.length
//     let ourstart = start<0 ? 
//     Math.max(len  ,start,0):
//     Math.min(start,len)
//     let ourend= end < 0 ? 
//     Math.max(len  ,start,0):
//     Math.min(start,len)
//     while(ourstart < ourend){
//         o[ourstart] = value
//         ourstart++
//     }
//     o[3] = '$'
//     console.log(o);
// }

// ourcustomrfill([1,'hello',true,'$',6])
let users = [
    {
        id: 1,
        name: 'majid',
        surname: 'kamilov'
    },
    {
        id: 2,
        name: 'tinibek',
        surname: 'janibekov'
    },
    {
        id: 3,
        name: 'eldos',
        surname: 'almazulu'
    },
    {
        id: 4,
        name: 'nurullo',
        surname: 'badalov'
    },
    {
        id: 5,
        name: '1majid',
        surname: '1kamilov'
    },
    {
        id: 6,
        name: 't6inibek',
        surname: 'janibekov'
    },
    {
        id: 7,
        name: 'eledos',
        surname: 'almazulu'
    },
    {
        id: 8,
        name: 'ewer',
        surname: 'badalov'
    },
]
function filluser(startid, endid) {
    for (let item of users) {
        if (startid == item['id']) {

            users.fill('deleted', startid - 1, endid - 1)
        }
    }

    console.log(users);
}
filluser(2, 4)
