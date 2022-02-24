// import fs from 'fs';
const fs = require('fs');
const util = require('util');
const readFilePromise = util.promisify(fs.readFile);
// fs.writeFile('./myFile.txt', "test test test", () => { })
// fs.readFile('./myFile.txt').then(result => {
//     console.log(result.toString());
// }).catch(err => {   // catch error }

// const print = () => {
//     const someNames = ['Michelle','asap', 'Jane','Ali', 'bob'];
//     fs.writeFile('./namesFile.txt', someNames.toString(), (err) => {
//         if (err) throw err;
//     })
//     fs.readFile('./namesFile.txt', (err, result) => {
//         if (err) throw err;
//         let namesArray = result.toString().split(',');
//         namesArray.forEach(nameItem => {
//             if (nameItem[0].toLocaleUpperCase() == 'A') console.log(nameItem);
//         })
//     })
// }
// print()

const print = () => {
    let someNumbers = []
    for (let i = 0; i < 12; i++) {
        let randomNumber = Math.floor(Math.random() * 100);
        if (randomNumber % 3 == 0) someNumbers.push(randomNumber);
    }
    fs.writeFile('./numbersFile.txt', someNumbers.toString(), (err) => {
        if (err) throw err;
    })
    readFilePromise('./numbersFile.txt')
        .then(result => {
            let numbersArray = result.toString().split(',');
            numbersArray.forEach(num => {
                if (parseInt(num) > 50) console.log(num);
            })
        })
        .catch(err => { throw err })
        /////////////////////////////////////////////////////////////////
    fs.readFile('./numbersFile.txt', (err, result) => {
        if (err) throw err;
        let numbersArray = result.toString().split(',');
        numbersArray.forEach(num => {
            if (parseInt(num) > 50) console.log(num);
        })
    })
}
print()