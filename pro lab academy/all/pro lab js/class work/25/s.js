let s = []
function fr(arr, calbakc) {
    let o = arr
    for (let item of arr) {
        calbakc(item[0], item[1], o)
    }
}
fr([['hello', ]],(value,kay,map=>{
    console.log(value);
}))