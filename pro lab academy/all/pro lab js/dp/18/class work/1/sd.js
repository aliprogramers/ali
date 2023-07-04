let wines = {
    whiles: {
        id: 1,
        name: 'iteloiiiwhle',
        year: 1995
    },
    whiles1: {
        id: 2,
        name: 'fransiya',
        year: 1996
    },
    whiles2: {
        id: 3,
        name: 'whiel',
        year: 2006
    },
    whiles3: {
        id: 4,
        name: 'over',
        year: 2004
    }

}

// function findwhine() {
//     for(let key in driwhile){
//         if(driwhile[key].year < 1996){


//     }

//     else if(driwhile[key].year > 2006){
//         console.log(driwhile);
//         }
//     }

// }
// findwhine()
function findWind(min) {
    let findedWines = {}
    for (let keys in wines) {   
        if (wines[keys]['year'] == min) {
            findedWines[keys] = wines[keys]
    // console.log(findedWines);

            break
        
        }
      else if(wines[keys]['year'] < 1995){
        
            console.log('netu takova');
            break

        }
        else if(wines[keys]['year'] < 2007){
            console.log('netu takova');
            break

        }
    }
    console.log(findedWines);
}


findWind(2004)