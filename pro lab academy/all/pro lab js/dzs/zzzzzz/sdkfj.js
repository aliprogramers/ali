let tr = ""
let trr = ""
let tr1 = ""
let tr11 = ""
let tr22 = ""
let tr2 = ""
let tr3 = ""
let tr33 = ""
let money = 1000
while (true) {

    let veberite = confirm(`kino censel  \n ok kofe`)
    if (veberite == true) {
        while(true){
        let promt = prompt(` 1)горячие блюда \n2) напитки \n 3)корзина  \n4)отчёт\n5)break`)
        if (promt == 1) {
            let bluda = prompt(` 1)bishteks \n2) borsh`)
            if (bluda == 1) {
                tr = "bishteks"
            money -= 100

                let ass = confirm("s gornirom")
                if (ass == true) {
                    trr = "gornirom"
                    money -= 100

                }
            }
            else if (bluda == 2) {
                let ass1 = confirm("s gornirom")
                tr1 = "borsh"
                money -= 100

                if (ass1 == true) {
                    tr11 = "gornirom"
                    money -= 100

                }
            }
        }
        else if (promt == 2) {
            let bluda = prompt(` 1)chay \n2) kofe`)
            money -= 100
            if (bluda == 1) {
                tr2 = "chay"
                money -= 100

                let ass2 = confirm("s saharom")
                if (ass2 == true) {
                    tr22 += "saharom"

                }
            }
            else if (bluda == 2) {
                tr3 = "kofe"
                money -= 100

                let as3 = confirm("s saharom")
                if (as3 == true) {
                    tr33 += "saharom"
                    money -= 100

                }
            }
        }
        else if (promt == 3) {
            alert(`${tr} ${trr} \n ${tr1}  ${tr11} \n ${tr2} ${tr22} \n${tr3} ${tr33}`)
        }
        else if (promt == 4) {
            alert(`${tr} ${trr} \n ${tr1}  ${tr11} \n ${tr2} ${tr22} \n${tr3} ${tr33} ${money}`)
        }
        else if(promt == 5) {
            alert("ok")
            break
        }
    }
    }





   else if (veberite == false) {
        while(true){
        let promt = prompt(` 1)futball \n2) basketball   \n3)отчёт\n4)break`)
        if (promt == 1) {
            let bluda = prompt(` 1)kamanda \n2) kamanda`)
            if (bluda == 1) {
                tr = "1kamanda"
            money -= 100

                let ass = confirm("s flagom ")
                if (ass == true) {
                    trr = "1kamanda"
                    money -= 100

                }
            }
            else if (bluda == 2) {
                let ass1 = confirm("s flagom")
                tr1 = "2kamanda"
                money -= 100

                if (ass1 == true) {
                    tr11 = "2kamanda"
                    money -= 100

                }
            }
        }
        else if (promt == 2) {
            let bluda = prompt(` 1)chay \n2) kofe`)
            money -= 100
            if (bluda == 1) {
                tr2 = "chay"
                money -= 100

                let ass2 = confirm("s saharom")
                if (ass2 == true) {
                    tr22 += "saharom"

                }
            }
            else if (bluda == 2) {
                tr3 = "kofe"
                money -= 100

                let as3 = confirm("s saharom")
                if (as3 == true) {
                    tr33 += "saharom"
                    money -= 100

                }
            }
        }
     
        else if (promt == 3) {
            alert(`${tr} ${trr} \n ${tr1}  ${tr11} \n ${tr2} ${tr22} \n${tr3} ${tr33} ${money}`)
        }
        else if(promt == 4) {
            alert("ok")
            break
        }
    }
    }



}