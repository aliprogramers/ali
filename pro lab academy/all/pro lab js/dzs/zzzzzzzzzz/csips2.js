let history = ""
let history2 = ""
let history1 = ""
let history4 = ""
let history5 = ""
let history6 = ""
let history7 = ""
let history8 = ""
let history9 = ""
let h1 = ""
let h2 = ""
let h3 = ""
let h4 = ""
let h5 = ""
let h6 = ""
let h7 = ""
let h8 = ""
let h9 = ""
let money = 1000
let t1 = 0
let t2 = 0
let t3 = 0
let t4 = 0
let t5 = 0
let t6 = 0
let t7 = 0
let t8 = 0
let t9 = 0
let t10 = 0
let t11 = 0
let t12 = 0
let t13 = 0
let t14 = 0
let t15 = 0
let kkk = 0
let kkk1 = 0
let kkk2 = 0
let kkk3 = 0
let ooo1 = 0
let ooo2 = 0
let ooo3 = 0
let bil = 0
let kkk4 = 0
while (true) {
    let jjs = prompt(`veberite\n1) kino or \n2)kofe`)
    if (jjs == 1) {
        let jjj = confirm(`ok nur\nnet sementy`)
        if (jjj == true) {
            let kotegoy = prompt("veberite kotegory\n 1)kino\n2)dramma\n3)ujas")
            if (kotegoy == 1) {

                let dover = confirm("ve doveriniy ")
                while (true) {
                    if (dover == true) {

                        let komp = prompt("vedite liboy kino \n1)kino1\n2)kino2\n3)kino3\n4)korzina\nkupit")
                        if (komp == 1) {
                            let skolka = prompt("skolka va mujen bilet")

                            history1 = `kino1     ${skolka}\n`
                            skolka -= bil
                            money -= bil

                        }
                        else if (komp == 2) {
                            let skolka2 = prompt("skolka va mujen bilet")
                            history2 = `kino2     ${skolka2}\n`


                            skolka2 -= bil

                            money -= bil

                        }
                        else if (komp == 3) {
                            let skolka3 = prompt("skolka va mujen bilet")
                            history = `kino3     ${skolka3}\n`

                            skolka3 -= bil
                            money -= bil


                        }
                        else if (komp == 4) {
                            alert(`${history1}${history2}${history}${history4}${history5}${history6}${history7}${history8}${history9}\n `)
                        }
                        else if (komp == 5) {
                            break
                        }

                        else if (komp == 6) {
                            break
                        }

                    }


                }

            }

            else if (kotegoy == 2) {

                let dover = confirm("ve doveriniy ")
                while (true) {
                    if (dover == true) {


                        let komp = prompt("vedite liboy kino \n1)burger1\n2)burger2\n3)burger3\n4)korzina\nkupit")
                        if (komp == 1) {
                            let skolka = prompt("skolka va mujen bilet")
                            history4 = `ramma1      ${skolka}\n`
                            skolka -= bil
                            money -= bil



                        }
                        else if (komp == 2) {
                            let skolka2 = prompt("skolka va mujen bilet")
                            history5 = `ramma2     ${skolka2}\n`
                            skolka2 -= bil

                            money -= bil



                        }
                        else if (komp == 3) {
                            let skolka3 = prompt("skolka va mujen bilet")

                            history6 = `ramma2     ${skolka3}\n`


                            skolka3 -= bil

                            money -= bil
                        }
                        else if (komp == 4) {
                            alert(`${history1}${history2}${history}${history4}${history5}${history6}${history7}${history8}${history9}\n `)
                        } else if (komp == 5) {
                            break
                        }


                        else if (komp == 6) {
                            break
                        }

                    }
                }

            }
            else if (kotegoy == 3) {

                let dover = confirm("ve doveriniy ")
                while (true) {
                    if (dover == true) {

                        let komp = prompt("vedite liboy kino \n1)ujas1\n2)ujas2\n3)ujas3\n4)korzina\nkupit")
                        if (komp == 1) {
                            let skolka = prompt("skolka va mujen bilet")
                            history7 = `sujas1     ${skolka}\n`

                            skolka -= bil
                            money -= bil


                        }
                        else if (komp == 2) {
                            let skolka2 = prompt("skolka va mujen bilet")
                            history8 = `ujas2     ${skolka2}\n`
                            skolka2 -= bil

                            money -= bil



                        }
                        else if (komp == 3) {
                            let skolka3 = prompt("skolka va mujen bilet")
                            history9 = `ujas     ${skolka3}\n`
                            skolka3 -= bil

                            money -= bil



                        }
                        else if (komp == 4) {
                            alert(`${history1}${history2}${history}${history4}${history5}${history6}${history7}${history8}${history9}\n `)
                        }
                        else if (komp == 5) {
                            break
                        }

                        else if (komp == 6) {
                            break
                        }


                    }
                }

            }
        }

        else if (jjj == false) {
            let kotegoy = prompt("veberite kotegory\n 1)samsung\n2)mac\n3)thigpad")
            if (kotegoy == 1) {

                let dover = confirm("ve doveriniy ")
                while (true) {
                    if (dover == true) {

                        let komp = prompt("vedite liboy kino \n1)mac\n2)samsung\n3)thigpad \n4)korzina\nkupit")
                        if (komp == 1) {
                            let skolka = prompt("skolka va mujen bilet")
                            h1 = `mac     ${skolka}\n`
                            skolka -= bil
                            money -= bil



                        }
                        else if (komp == 2) {
                            let skolka2 = prompt("skolka va mujen bilet")
                            h2 = `samsung     ${skolka2}\n`
                            skolka2 -= bil

                            money -= bil



                        }
                        else if (komp == 3) {
                            let skolka3 = prompt("skolka va mujen bilet")
                            h3 = `thigpad     ${skolka3}\n`
                            skolka3 -= bil

                            money -= bil



                        }
                        else if (komp == 4) {
                            alert(`${h1}${h2}${h3}${h4}${h5}${h6}${h7}${h8}${h9}\n `)
                        }
                        else if (komp == 5) {
                            break
                        }

                        else if (komp == 6) {
                            break
                        }

                    }


                }

            }

            else if (kotegoy == 2) {

                let dover = confirm("ve doveriniy ")
                while (true) {
                    if (dover == true) {


                        let komp = prompt("vedite liboy kino \n1)samsung\n2)thigmpad\n3)mac \n4)korzina\nkupit")
                        if (komp == 1) {
                            let skolka = prompt("skolka va mujen bilet")
                            h4 = `sumsung     ${skolka}\n`


                            skolka -= bil
                            money -= bil

                        }
                        else if (komp == 2) {
                            let skolka2 = prompt("skolka va mujen bilet")
                            h5 = `thingpad     ${skolka2}\n`
                            skolka2 -= bil
                            money -= bil
                        }
                        else if (komp == 3) {
                            let skolka3 = prompt("skolka va mujen bilet")
                            h6 = `mac     ${skolka3}\n`
                            skolka3 -= bil
                            money -= bil
                        }
                        else if (komp == 4) {
                            alert(`${h1}${h2}${h3}${h4}${h5}${h6}${h7}${h8}${h9}\n `)
                        } else if (komp == 5) {
                            break
                        }
                        else if (komp == 6) {
                            break
                        }
                    }
                }
            }
            else if (kotegoy == 3) {
                let dover = confirm("ve doveriniy ")
                while (true) {
                    if (dover == true) {
                        let komp = prompt("vedite liboy kino \n1)sumsugn\n2)mac\n3)thigpad \n4)korzina\nkupit")
                        if (komp == 1) {

                            let skolka = prompt("skolka va mujen bilet")
                            h7 = `sumsung     ${skolka}\n`
                            skolka -= bil
                            money -= bil
                        }
                        else if (komp == 2) {
                            let skolka2 = prompt("skolka va mujen bilet")
                            h8 = `mac     ${skolka2}\n`
                            skolka2 -= bil

                            money -= bil
                        }
                        else if (komp == 3) {
                            let skolka3 = prompt("skolka va mujen bilet")
                            h9 = `thigpad     ${skolka3}\n`
                            skolka3 -= bil

                            money -= bil
                        }
                        else if (komp == 4) {
                            alert(`${h1}${h2}${h3}${h4}${h5}${h6}${h7}${h8}${h9} \n `)
                        }
                        else if (komp == 5) {
                            break
                        }
                        else if (komp == 6) {
                            break
                        }
                    }
                }
            }
        }
    }
    else if (jjs == 2) {
        let jjj = confirm(`ok modonals\nnet burger`)
        if (jjj == true) {
            let kotegoy = prompt("veberite kotegory\n 1)burger\n2)drinks\n3)deserts")
            if (kotegoy == 1) {

                let dover = confirm("ve doveriniy ")
                while (true) {
                    if (dover == true) {

                        let komp = prompt("vedite liboy kino \n1)burger1\n2)burger2\n3)burger3\n4)korzina\nkupit")
                        if (komp == 1) {
                            let skolka = prompt("skolka va mujen bilet")

                            history1 = `burger1     ${skolka}\n`
                            skolka -= bil
                            money -= bil

                        }
                        else if (komp == 2) {
                            let skolka2 = prompt("skolka va mujen bilet")
                            history2 = `burger2     ${skolka2}\n`


                            skolka2 -= bil

                            money -= bil

                        }
                        else if (komp == 3) {
                            let skolka3 = prompt("skolka va mujen bilet")
                            history = `burger3     ${skolka3}\n`

                            skolka3 -= bil
                            money -= bil


                        }
                        else if (komp == 4) {
                            alert(`${history1}${history2}${history}${history4}${history5}${history6}${history7}${history8}${history9}\n `)
                        }
                        else if (komp == 5) {
                            break
                        }

                        else if (komp == 6) {
                            break
                        }

                    }


                }

            }
            else if (kotegoy == 2) {

                let dover = confirm("ve doveriniy ")
                while (true) {
                    if (dover == true) {


                        let komp = prompt("vedite liboy kino \n1)bdrinks1\n2)drinks2\n3)drinks3\n4)korzina\nkupit")
                        if (komp == 1) {
                            let skolka = prompt("skolka va mujen bilet")
                            history4 = `drinks1      ${skolka}\n`
                            skolka -= bil
                            money -= bil



                        }
                        else if (komp == 2) {
                            let skolka2 = prompt("skolka va mujen bilet")
                            history5 = `drinks2     ${skolka2}\n`
                            skolka2 -= bil

                            money -= bil



                        }
                        else if (komp == 3) {
                            let skolka3 = prompt("skolka va mujen bilet")

                            history6 = `drinks3     ${skolka3}\n`


                            skolka3 -= bil

                            money -= bil
                        }
                        else if (komp == 4) {
                            alert(`${history1}${history2}${history}${history4}${history5}${history6}${history7}${history8}${history9}\n `)
                        } else if (komp == 5) {
                            break
                        }


                        else if (komp == 6) {
                            break
                        }

                    }
                }

            }
            else if (kotegoy == 3) {

                let dover = confirm("ve doveriniy ")
                while (true) {
                    if (dover == true) {

                        let komp = prompt("vedite liboy kino \n1)burger1\n2)burger2\n3)burger3\n4)korzina\nkupit")
                        if (komp == 1) {
                            let skolka = prompt("skolka va mujen bilet")
                            history7 = `burger     ${skolka}\n`

                            skolka -= bil
                            money -= bil


                        }
                        else if (komp == 2) {
                            let skolka2 = prompt("skolka va mujen bilet")
                            history8 = `burger     ${skolka2}\n`
                            skolka2 -= bil

                            money -= bil



                        }
                        else if (komp == 3) {
                            let skolka3 = prompt("skolka va mujen bilet")
                            history9 = `burger     ${skolka3}\n`
                            skolka3 -= bil

                            money -= bil



                        }
                        else if (komp == 4) {
                            alert(`${history1}${history2}${history}${history4}${history5}${history6}${history7}${history8}${history9}\n `)
                        }
                        else if (komp == 5) {
                            break
                        }

                        else if (komp == 6) {
                            break
                        }


                    }
                }

            }
        }
        else if (jjj == false) {
            let kotegoy = prompt("veberite kotegory\n 1)samsung\n2)mac\n3)thigpad")
            if (kotegoy == 1) {

                let dover = confirm("ve doveriniy ")
                while (true) {
                    if (dover == true) {

                        let komp = prompt("vedite liboy kino \n1)burger1\n2)burger2\n3)burger3\n4)korzina\nkupit")
                        if (komp == 1) {
                            let skolka = prompt("skolka va mujen bilet")
                            h1 = `jjjjj     ${skolka}\n`
                            skolka -= bil
                            money -= bil



                        }
                        else if (komp == 2) {
                            let skolka2 = prompt("skolka va mujen bilet")
                            h2 = `jjjjjj2     ${skolka2}\n`
                            skolka2 -= bil

                            money -= bil



                        }
                        else if (komp == 3) {
                            let skolka3 = prompt("skolka va mujen bilet")
                            h3 = ` jjjj3    ${skolka3}\n`
                            skolka3 -= bil

                            money -= bil



                        }
                        else if (komp == 4) {
                            alert(`${h1}${h2}${h3}${h4}${h5}${h6}${h7}${h8}${h9}\n `)
                        }
                        else if (komp == 5) {
                            break
                        }

                        else if (komp == 6) {
                            break
                        }

                    }


                }

            }

            else if (kotegoy == 2) {

                let dover = confirm("ve doveriniy ")
                while (true) {
                    if (dover == true) {

                        let komp = prompt("vedite liboy kino \n1)burger1\n2)burger2\n3)burger3\n4)korzina\nkupit")
                        if (komp == 1) {
                            let skolka = prompt("skolka va mujen bilet")
                            h4 = `uouu1     ${skolka}\n`


                            skolka -= bil
                            money -= bil

                        }
                        else if (komp == 2) {
                            let skolka2 = prompt("skolka va mujen bilet")
                            h5 = `tssa2     ${skolka2}\n`
                            skolka2 -= bil
                            money -= bil
                        }
                        else if (komp == 3) {
                            let skolka3 = prompt("skolka va mujen bilet")
                            h6 = `m33c     ${skolka3}\n`
                            skolka3 -= bil
                            money -= bil
                        }
                        else if (komp == 4) {
                            alert(`${h1}${h2}${h3}${h4}${h5}${h6}${h7}${h8}${h9}\n `)
                        } else if (komp == 5) {
                            break
                        }
                        else if (komp == 6) {
                            break
                        }
                    }
                }
            }
            else if (kotegoy == 3) {
                let dover = confirm("ve doveriniy ")
                while (true) {
                    if (dover == true) {
                        let komp = prompt("vedite liboy kino \n1)burger1\n2)burger2\n3)burger3\n4)korzina\nkupit")
                        if (komp == 1) {

                            let skolka = prompt("skolka va mujen bilet")
                            h7 = `sumsung     ${skolka}\n`
                            skolka -= bil
                            money -= bil
                        }
                        else if (komp == 2) {
                            let skolka2 = prompt("skolka va mujen bilet")
                            h8 = `mac     ${skolka2}\n`
                            skolka2 -= bil

                            money -= bil
                        }
                        else if (komp == 3) {
                            let skolka3 = prompt("skolka va mujen bilet")
                            h9 = `thigpad     ${skolka3}\n`
                            skolka3 -= bil

                            money -= bil
                        }
                        else if (komp == 4) {
                            alert(`${h1}${h2}${h3}${h4}${h5}${h6}${h7}${h8}${h9} \n `)
                        }
                        else if (komp == 5) {
                            break
                        }
                        else if (komp == 6) {
                            break
                        }
                    }
                }
            }
        }
    }
}