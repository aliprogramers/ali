let user = [
    {
        id: 1,
        name: 'majid',
        surname: 'kamilov'
    }, {
        id: 2,
        name: 'loh',
        surname: '2'

    },
    {
        id: 3,
        name: 'ma4lohid4jid',
        surname: '3'

    }, {
        id: 4,
        name: 'l3oh',
        surname: '4'

    },


]
function foolname(fulname) {
    let s = fulname.split(' ')
    user.push({
        id: user.length + 1,
        name: s[0],
        surname: s[1]
    })

}
foolname('nurllo bakalov')
console.log(user);
// function deleted(start, end) {
//     let s =end - start
//     let st =[]
// let ss = 0
//     while(s == ss){
//         st.push('deleted')
//         console.log('s');
//         ss++
// }
// // console.log(s);
//     user.splice(start-1,end-1, st)
// }
// deleted(2, 3)
// console.log(user);