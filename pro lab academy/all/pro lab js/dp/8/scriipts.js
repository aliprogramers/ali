let categories = {
    catygory1: {
        id: 1,
        name: "VIP"
    },
    catygory2: {
        id: 2,
        name: "Sredny"
    },
    catygory3: {
        id: 3,
        name: "Econom"
    }
}

let rooms = {
    room1: {
        id: 1,
        name: "Pokoya Sultan SHaha",
        catId: 1,
        cast: 1200,
        costPerson: 100
    },
    room2: {
        id: 2,
        name: "Pokoya Sultan Suleymana",
        catId: 2,
        cast: 800,
        costPerson: 200
    },
    room3: {
        id: 3,
        name: "Pokoya Gitlera",
        catId: 3,
        cast: 500,
        costPerson: 50
    },
    room4: {
        id: 4,
        name: "Pokoya Lenina",
        catId: 1,
        cast: 1100,
        costPerson: 300
    },
    room5: {
        id: 5,
        name: "Pokoya Putina",
        catId: 2,
        cast: 1000,
        costPerson: 250
    },
    room6: {
        id: 6,
        name: "Pokoya Karimova",
        catId: 3,
        cast: 500,
        costPerson: 120
    }
}
let cliants = {
    cleant: {
        id: 1,
        roomid: 1,
        people: 4,
        days: 5,
        datate: {
            day: 05,
            manth: 2,
            year: 2021
        }
    }, cleant2: {
        id: 2,
        roomid: 1,
        people: 41,
        days: 1,
        datate: {
            day: 10,
            manth: 2,
            year: 2027
        }
    }, cleant3: {
        id: 3,
        roomid: 2,
        people: 9,
        days: 12,
        datate: {
            day: 9,
            manth: 22,
            year: 2023
        }
    },
}

function fcread(roomid, people, days, day, manth, year) {
    let length = 0

    for (let key5 in cliants) {
        length++
    }
    for (let key in cliants) {
        for (let key2 in cliants[key]) {
            const de = Date.now(
                cliants[key][key2]['day'],
                cliants[key][key2]['manth'],
                cliants[key][key2]['year']

            );
            const de2 = Date.now(
                day,
                manth,
                year

            );
        }
    }
    for (let key in cliants) {
        for (let key2 in cliants[key]) {
            let yours = new Date(cliants[key][key2]['day'], cliants[key][key2]['manth']).getTime()

            let you = new Date(day, manth).getTime()
            console.log(you);
            console.log(yours);

            if (yours != you) {

                if (cliants[key][key2]['roomid'] == roomid) {

                    if (cliants[key][key2]['day'] != day && cliants[key][key2]['manth'] != manth) {


                        cliants['cleant' + (length + 1)] = {
                            id: (length + 1),
                            roomid: roomid,
                            people: people,
                            days: days,
                            datate: {
                                day: day,
                                manth: manth,
                                year: year
                            },

                        }
                    }
                    else if (cliants[key][key2]['day'] == day || cliants[key][key2]['manth'] == manth) {
                        console.log('zanet');
                        return;
                    }
                }
                if (cliants[key][key2]['roomid'] != roomid) {
                    cliants['cleant' + (length + 1)] = {
                        id: (length + 1),
                        roomid: roomid,
                        people: people,
                        days: days,
                        datate: {
                            day: day,
                            manth: manth,
                            year: year
                        },

                    }
                }
                else {
                    console.log('esttakoy');

                    return
                }

            }
            else if (yours == you) {
                console.log('esttakoy');
                return;
            }

        }

    }

}


fcread(2, 9, 12, 99, 22, 2023)




console.log(cliants);
