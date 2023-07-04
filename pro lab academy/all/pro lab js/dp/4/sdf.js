let tops = {
    b: 1,
    re2: -1,
    re1: -2,
    re21: 10,
    re3: -12,
}
function getTop3() {
    let top1 = -Infinity
    let top1key = ''
    let top2 = -Infinity
    let top2key = ''
    let top3 = -Infinity
    loop1: for (let key in tops) {
        if (tops[key] > top1) {
            top1 = tops[key]
            top1key = key
        }
        else {
            continue loop1
        }
    }
    loop2: for (let key2 in tops) {
        if (top1 == tops[key2]) {
            delete tops[top1key]
        }
        if (top2 < tops[key2]) {
            top2 = tops[key2];
            top2key = key2
        }
        else {
            continue loop2
        }
    }
    loop3: for (let key3 in tops) {
        if (top2 == tops[key3]) {
            delete tops[top2key]
        } if (top3 < tops[key3]) {
            top3 = tops[key3];
        } else {
            continue loop3
        }
    }
    console.log(top1);
    console.log(top2);
    console.log(top3);
}
getTop3()
console.log(tops);
