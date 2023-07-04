let history = ""
let borsh = ""
let borsh2 = ""
let chay = ""
let chay2 = ""
let bishteks = ""
let bishteks2 = ""
let history2 = ""
let money = 1000
while (true) {
    function vibaor(v, vi, vis) {
        let vi = confirm()
        if (vi) {
            function kinos(jjj) {
                if (confirm(jjj)) {
                    let ok = "horosho vas 20$"
                    alert(ok)
                }
            }
            alert(kinos("kino"))
        }
        else if (confirm(vis)) {


                function kofes(ss) {
                    let kofet = prompt(" 1)горячие блюда \n2) напитки\n3) корзина \n 4)Что купил ")
                    if (prompt(kofet)) {
                        if (kofet == 1) {
                            function goriy(tt) {
                                let kk = prompt(`1)veberiyte bluda \n 2)bishteks\nborsh`)

                                if (kk == 1) {
                                    let s = confirm("s kornirom")
                                    borsh = `\nbishteck`
                                    if (s == true) {
                                        alert(`${history}`)
                                        borsh += " gornirom"
                                    }

                                }
                                else if (kk == 2) {
                                    let s = confirm("s kornirom")
                                    history = `\nborsh`
                                    if (s == true) {
                                        alert(`${history}`)
                                        history = " gornirom"
                                    }

                                }

                            }


                            alert(goriy("goriyashiy bluda"))
                        }else if (kofet == 2) {
                            function goriy1(tt1) {
                                let kk = prompt(`1)veberiyte bluda \n 2)kofe\n chay`)

                                if (kk == 1) {
                                    let s1 = confirm("s saharom")

                                }
                                else if (kk == 2) {

                                    let s1 = confirm("s saharom")



                                }
                            }


                            alert(goriy1("na pitkiy"))
                        }else if (kofet == 3) {
                            alert(`${history}`)
                            // function goriy2(tt3) {
                            //     let kk = prompt(`1)veberiyte bluda \n 2)bishteks\nborsh`)

                            //     if (kk == 1) {
                            //         let s = "s kornirom"
                            //     }
                            //     else if (kk == 2) {
                            //         let s = "s kornirom"
                            //     }
                            // }


                            // alert(goriy2("na korziya?"))
                        }else if (kofet == 4) {

                            // function goriy11(t4) {
                            //     let kk = prompt(`1)veberiyte bluda \n 2)bishteks\nborsh`)

                            //     if (kk == 1) {
                            //         let s = "s kornirom"
                            //     }
                            //     else if (kk == 2) {
                            //         let s = "s kornirom"
                            //         alert(s)
                            //     }
                            // }


                            // alert(goriy11("chto kupiliy"))
                        }
                    }

                }

                alert(kofes("kofe?"))
            
        }
    }
    alert(vibaor(`kino: ok\nkofe:censel`, " kino", " kofe"));
}