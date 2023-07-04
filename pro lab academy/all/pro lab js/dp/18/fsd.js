let obj = [
  {
    id: 1,
    name: "Tashmat",
    surname: "Kokulov",
    job: 'web desenter',
    solary: '1000$'
  },
  {
    id: 2,
    name: "Mukhammed",
    surname: "Altynbekov",
    job: 'web desenter1',
    solary: '1001$'
  },
  {
    id: 3,
    name: "Ali",
    surname: "Kokoev",
    job: 'web desenter2',
    solary: '1002$'
  },
  {
    id: 4,
    name: "Nur",
    surname: "Askarov",
    job: 'web desenter3',
    solary: '1003$'
  },
  {
    id: 5,
    name: "Oma",
    surname: "Kamchiev",
    job: 'web desenter4',
    solary: '1004$'
  },
  {
    id: 6,
    name: "Bekzat",
    surname: "Ravshanbekov",
    job: 'web desenter5',
    solary: '1005$'
  },
  {
    id: 7,
    name: "Farik",
    surname: "Nazarbaev",
    job: 'web desenter6',
    solary: '1006$'
  },
  {
    id: 8,
    name: "Jah",
    surname: "Khalib",
    job: 'web desenter7',
    solary: '1007$'
  },
  {
    id: 9,
    name: "Manas",
    surname: "Kokoev",
    job: 'web desenter8',
    solary: '1008$'
  },
  {
    id: 10,
    name: "Murat",
    surname: "Azatov",
    job: 'web desenter9',
    solary: '1009$'
  },
];





function jobstop() {
  let array = {}
  let i = 0
  let c = 0
  for (let item of obj) {
    if (item['solary']) {
      c += parseInt(item['solary'])
      c *= 89
      item['solary'] = c
      c = 0
    }
  }

if(i <= 3){
    for (let   in obj) {
        if (Object.keys(array).length == 0) {
          console.log('s');
          array[item.name] = item['solary']
          i++
          continue;
        }
        if (Object.keys(array)[i] < item['solary']) {
          console.log(i);
  
          array.splice(i, 1)
          array[item.name] = item['solary']
        
      }
    }
  }
  console.log(array);
  
}
jobstop()



// console.log(parseInt(obj[0]['solary']));
// console.log(obj);







// function findUser(surname, name) {
//     let result = obj.filter((item, index, array) => {
//       if (typeof item["surname"] == "string") {
//         if (typeof item["name"] == "string") {
//           if (item["surname"].startsWith(surname)) {
//             if (item["name"].startsWith(name)) {
//               return item;
//             }
//           }
//         }
//       }
//     });
//     console.log(result);
//   }
//   findUser("", "");