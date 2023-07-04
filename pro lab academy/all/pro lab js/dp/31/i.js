let hootel = [
    {
        id: 1,
        name: 'pakoy hana',
        cost: 0,
        cost_per_person: 100,
        cost_per_child: 50,
        catid: 3,
    },
    {
        id: 2,
        name: 'pakoy stalina',
        cost: 150,
        cost_per_person: 190,
        cost_per_child: 100,
        catid: 2,

    },
    {
        id: 3,
        name: 'pakoy whreka',
        cost: 0,
        cost_per_person: 90,
        cost_per_child: 40,
        catid: 1,

    },
];

let categories = [
    {
        id: 1,
        name: 'standart'
    },
    {
        id: 2,
        name: 'eloman'
    },
    {
        id: 3,
        name: 'premium'
    }
];
let custmer = [
    {
        id: 1,
        people: 5,
        children: 2,
        roome_id: 1,
        date__start: '2023-05-21',
        day: 5
    },
    {
        id: 2,
        people: 2,
        children: 2,
        roome_id: 2,
        date__start: '2023-05-20',
        day: 6
    }
]
function loh(people, children, roome_ids, data_start, day) {
custmer = custmer.sort((a, b) => new Date(a.date__start) - new Date(b.date__start))

    for (let items of custmer) {
        for (let item2 of hootel) {

    


                let n = new Date(items.date__start).getTime()

                let e = new Date(data_start)
                e = e.setDate(e.getDate() + day);
                console.log(e);
                for (let itme of categories) {
                    if (item2.catid == itme.id) {

                        custmer.push({
                            id: custmer.length++,
                            children: children,
                            roome_id: roome_ids,
                            people: people,
                            date__start: data_start,
                            day: day

                        })
                    }
                
              
            }

        }
    }
}
loh(5, 2, 1, '2023-05-20', 5)
// function addhootel(catid, data_starts, duration) {
//     let date__start = new Date(data_starts).getTime()////837367343863784
//     console.log('gfdgfdgd', date__start);



//     //   console.log(obj.date_start);

//     let s = new Date(duration).getHours()
//     console.log(s);
//     let date_end = new Date(s.setDate(s.getHours() + new Date(s).getHours()))
//     console.log(date_end);
//     // console.log(new Date(date_end))
//     // console.log(date_end);

//     let proverka = undefined
//     for (let item of hootel) {
//         if (item.date_start >= date__start <= item.date_end) {
//             console.log('false');
//             false
//         }
//         else if (item.date_start > date__start && item.date_end > date__start) {
//             console.log('true');
//             proverka = true
//         }
//         else if (item.date_end > date__start) {
//             console.log('true');
//             proverka = true
//         }
//     }


//     if (proverka) {
//         hootel.push({
//             id: ++hootel.length,
//             catid: catid,
//             data_start: data_starts,
//             date_end: date__start
//         })
//     }
// }
// addhootel(1, '2023-01-02', '02:30',)
// console.log(hootel);