let users = [
    {
        id: 1,
        name: 'akjol',
        status: 1,
        solary: 1000,
        bonus: 5,
        pasword: 002
    },
    {
        id: 2,
        name: 'akjol2',
        status: 3,
        solary: 1500,
        bonus: 15,
        pasword: 1223
    }, {
        id: 3,
        name: 'akjol3',
        status: 4,
        solary: 100,
        bonus: 5,
        pasword: 080
    }

]
let statuss = [
    {
        id: 1,
        title: 'admin',
    },
    {
        id: 2,
        title: 'subatent',
    },
    {
        id: 3,
        title: 'ali',
    },
    {
        id: 4,
        title: 'aji bashi',
    },
]


function s() {
    let s = 0
    let sunam = prompt('vedite username')
    let pasword = prompt('vedite pasword')
    for (let itme of users) {
        for (let itme2 of statuss) {
            
            if (itme.status == itme2.id) {
             
            loop: while (true) {
               
               
                    if (itme.pasword == `${pasword}` && itme2.title == `${sunam}`) {
                        alert('togri')
                        sunam = 0
                        pasword = 0
                        if(true){
                            return true
                        }
                        
                    }
                else {
                  ler:while(s<3){
                        alert('no togri')
                        s++
                        break ler
                    }
                    }
                }
            }
        }
    }
    console.log(s);
}
s()