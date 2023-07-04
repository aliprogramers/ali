// let b = {
// }
// let a = {
// name: 'abdulhay',
// surname: 'bakirganov',
// fulname: function () {
//   console.log();


// }

// }

// function allkeys() {


// for (let key in a) {
//   console.log(a[key]);
// }

// }
// allkeys()
// let r = {
// y: {
//   c: 100,
//   v: 200
// },
// w: {
//   c: 200,
//   v: 200
// },

// }
// function our() {
// let t = 0

// for (let key in r) {
//   for (let key2 in r[key]) {
//   t += r[key][key2]


//   }
// }
// console.log(t);

// }


// our()
// let k = 0
// let people = {
// peotpel: {
//   id: 1,
//   name: 'abdulhay',
//   surname: 'bakirganov',
//   total: 200

// },
// peotpel2: {
//   id: 2,
//   name: 'ibrohim',
//   surname: 'bakirgasdfksnov',
//   total: 100
// }
// }
// function getpeoplefulname() {
// for (let key in people) {
//   k += people[key]['total']
// }
// console.log(k);

// }
// getpeoplefulname()






// let k = 0
// let people = {
// peotpel: {
//   id: 1,
//   name: 'abdulhay',
//   surname: 'bakirganov',
//   total: 200

// },
// peotpel2: {
//   id: 2,
//   name: 'ibrohim',
//   surname: 'bakirgasdfksnov',
//   total: 100
// }
// }
// function getitem(id) {
// for(let key in people){
// if(people[key]['id'] == id){
//   console.log(people[key]);
// }
// }

// }
// getitem(1)












// let k1 = 0
// let people2= {
// peotpel: {
//   id: 1,
//   name: 'abdulhay',
//   surname: 'bakirganov',
//   total: 200

// },
// peotpel2: {
//   id: 2,
//   name: 'ibrohim',
//   surname: 'bakirgasdfksnov',
//   total: 100
// }
// }

// function news(name,surname) {
//  let length = 0
// for(let key in people2){
//   length++
// }
//  people2['peotpel' + (length +1)] ={
// id:length,
// name: name,
// surname: surname,

//  }


// }

// news('abdulhay','bakirganov')
// console.log(people2);



// let k1 = 0
// let people2 = {
// peotpel: {
//   id: 1,
//   name: 'abdulhay',
//   surname: 'bakirganov',
//   total: 200

// },
// peotpel2: {
//   id: 2,
//   name: 'ibrohim',
//   surname: 'bakirgasdfksnov',
//   total: 100
// }
// }
// function gets() {
// for (let key in people2) {
//   k1++
// }
// console.log(k1);


// }
// gets()


// function update(id, name, surname) {
// for (let key in people2) {
//   if (people2[key]['id'] == id) {
//   people2[key] = {
//   name: name,
//   surname, surname
//   }
//   }
// }
// }

// console.log(people2);
// update(2, 'abdulasdfadshay', 'sdfadsfddfdfsdsf')