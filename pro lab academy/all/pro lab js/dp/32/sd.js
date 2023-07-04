// let category = [
//     {
//         id: 1,
//         name: 'horor',
//     }, {
//         id: 2,
//         name: 'comedy'
//     },
//     {
//         id: 3,
//         name: 'dramma'
//     }
// ]
// let moveis = [
//     {
//         id: 1,
//         name: 'anbal',
//         catid: 1,
//         duraction: '01:40:00',
//     },
//     {
//         id: 2,
//         name: 'zohan',
//         catid: 2,
//         duraction: '02:40:40',
//     },
//     {
//         id: 2,
//         name: 'gta',
//         catid: 3,
//         duraction: '01:30:60',
//     }
// ]
// let hall = [
//     {
//         id: 1,
//         place: 20,
//     },
//     {
//         id: 1,
//         place: 30,
//     }, {
//         id: 1,
//         place: 15,
//     }

// ]
// let senses = [
//     {
//         id: 1,
//         mvied: 1,
//         date_start: '2023-05-01T12:00:00',
//         date_end: '2023-05-01T13:30:30',
//         hallid: 1
//     }
// ]
// function sessesseeswrw3r(moveisid, date_start, hallid) {
//     let s = 0
//     let startfunc = new Date(date_start).getTime()
//     senses = senses.sort((b, a) => new Date(

//         a.date_start) - new Date(b.date_end))

//     let p = 0;
//     let hour = moveis[p++].duraction.split(":");
//     let sq = 0
//      sq =  sq= 21600000
//     let hourr = hour[0] * 3600000 + hour[1] * 60000 + hour[2] * 1000;
//     let e = 0;
//     e += startfunc + hourr 
//     // console.log(e);

//     // console.log(e);
//     let is =  0
//     is+=startfunc + hourr 
//     is+= sq 
//     let o = new Date(is)
//     let st = false

//     moveis.forEach(item => {

//         let end = new Date(item.duraction)
//         end.setHours(end.getHours() + end);

//         if (item.id == moveisid) {
//             senses.forEach(item2 => {
//                 if (item2.mvied == moveisid) {
//                     st = true
//                     return
//                 }

//             }
//             )

//         }
//     })

//     let len = ++senses.length

//     // console.log(st);
//     let i = 0;
//     let startsens = new Date(senses[i++].date_start).getTime()
//     let j = 0;
//     let endsens = new Date(senses[j++].date_end).getTime();
//     console.log(startsens / 6e9);
//     console.log(startfunc / 6e9);
//     // console.log(e); 
//     console.log(endsens / 6e9);
//     console.log(e / 6e9);
//     if (st) {


//         if (startfunc < startsens && e < startsens && s == 0) {
//             console.log('s1');
//             s++
//             senses.push({
//                 id: len,
//                 moveisid: moveisid,
//                 date_start: date_start,
//                 date_end: o.toJSON(),
//                 hallid: hallid

//             })
//             return true
//         }
//         else if (startfunc > endsens && e > startsens && s == 0) {
//             console.log('a2');
//             s++
//             senses.push({
//                 id: len,
//                 moveisid: moveisid,
//                 date_start: date_start,
//                 date_end: o.toJSON(),

//                 hallid: hallid
//             })
//             return true
//         }
//         else if (startfunc > endsens && s == 0) {
//             console.log('a3');
//             s++
//             senses.push({
//                 id: len,
//                 moveisid: moveisid,
//                 date_start: date_start,
//                 date_end: o.toJSON(),

//                 hallid: hallid

//             })
//             return true
//         }


//     }
//     else if (st == false) {
//         console.log('a4');
//         senses.push({
//             id: len,
//             moveisid: moveisid,
//             date_start: date_start,
//             date_end: o.toJSON(),

//             hallid: hallid

//         })
//         return senses
//     }
// }
// sessesseeswrw3r(1, '2023-05-01T10:00:00', 1)
// senses = senses.sort((a, b) => new Date(a.date_start) - new Date(b.date_end))

// senses = senses.filter(item=>item != null||item == undefined)

// console.log(senses);
// // let name= 'hell'
// // let pas = '0202'
// // function sd(dasd,pas) {
// //     if(name == asd&&pas == pas){
// //         console.log('ti asdministrator');
// //     }
// //     else{
// //         console.log('net dostupa');
// //     }
// // }
// // sd('hell','0202')
