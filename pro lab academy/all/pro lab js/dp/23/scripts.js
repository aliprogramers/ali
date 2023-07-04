let categories = [
    {
        id: 1,
        name: "Harror",
    },
    {
        id: 2,
        name: "Kamedia",
    },
    {
        id: 3,
        name: "Raman",
    },
];
let films = [
    {
        id: 1,
        catId: 1,
        name: "Zvonok",
        duration: "2:30:00",
    },
    {
        id: 2,
        catId: 2,
        name: "3 lishniy",
        duration: "2:30:00",
    },
    {
        id: 3,
        catId: 3,
        name: "3 metra",
        duration: "2:30:00",
    },
];
let hall = [
    {
        id: 1,
        plaus: 20,
    },
    {
        id: 2,
        plaus: 30,
    },
    {
        id: 3,
        plaus: 25,
    },
];
let seans = [
    {
        id: 1,
        filmId: 1,
        hallId: 2,
        cost: 250,
        startDate: "2023-03-01T22:01:06:600",
        endDate: "2023-03-01T24:31:06:600",
    },
    {
        id: 2,
        filmId: 3,
        hallId: 3,
        cost: 200,
        startDate: "2023-03-03T18:01:06:600",
        endDate: "2023-03-03T20:31:06:600",
    },
    {
        id: 3,
        filmId: 2,
        hallId: 4,
        cost: 200,
        startDate: "2023-03-04T18:01:06:600",
        endDate: "2023-03-04T20:31:06:600",
    },
    {
        id: 4,
        filmId: 2,
        hallId: 2,
        cost: 200,
        startDate: "2023-01-03T18:01:06:600",
        endDate: "2023-03-03T20:31:06:600",
    },
];
let custamers = [
    {
        id: 1,
        seansId: 1,
        tickes: 4,
    },
    {
        id: 2,
        seanseId: 2,
        tickes: 2,
    },
];
function hel(a) {
    let f = 0
    let l = 0
    let s = 0

    for (let item of seans) {

        l++
        if (seans[s] != seans[l]) {
            s++
            if (item.startDate.includes()in a.split() && split(item.startDate) in a.split()) {
                f += 1
                console.log('2');
            }
            else {
                console.log('0220');

                f = 1
            }
        }
        else {
            return;
        }
    }
    console.log(l);
}
hel('2023-03')