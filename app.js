const fs = require('fs')

const path = require('path')

onlineUser = [
    {name: 'Andriy', age: 22, city: 'Lviv'}
]

inPersonUser = [

    {name: 'Kolya', age: 30, city: 'Kyiv'}

];

// fs.mkdir(path.join(__dirname, 'main'), (error) => {
//     if (error) {
//         console.log(error);
//         throw error
//     }
// });

// fs.mkdir(path.join('main', 'online'), (error) => {
//     if (error) {
//         console.log(error);
//         throw error
//     }
// });

// fs.mkdir(path.join('main', 'inPerson'), (error) => {
//     if (error) {
//         console.log(error);
//         throw error
//     }
// });

// for (const user of onlineUser) {
//     for (const value in user) {
//         fs.appendFile(path.join('main', 'online', 'online.txt'), `\n${value}:${user[value]}`.toUpperCase(), (error) => {
//             if (error) {
//                 console.log(error);
//                 throw error
//             }
//         });
//     }
//
// }
//
// for (const personUser of inPersonUser) {
//     for (const personValue in personUser) {
//         fs.appendFile(path.join('main', 'inPerson', 'inPerson.txt'), `\n${personValue}:${personUser[personValue]}`.toUpperCase(),
//             (error) => {
//                 if (error) {
//                     console.log(error);
//                     throw error
//                 }
//             });
//     }
// }


// function swapUser (){
//     fs.readFile(path.join('main', 'inPerson', 'inPerson.txt'), (error, data) => {
//         fs.appendFile(path.join('main', 'online', 'online.txt'), data,{flag:'w'},() => {
//             if (error) {
//                 console.log(error);
//                 throw error
//             }
//         })
//         if (error) {
//             console.log(error);
//             throw error
//         }
//     });
//     fs.readFile(path.join('main', 'online', 'online.txt'), (error, data) => {
//         fs.appendFile(path.join('main', 'inPerson', 'inPerson.txt'), data,{flag:'w'},() => {
//             if (error) {
//                 console.log(error);
//                 throw error
//             }
//         })
//         if (error) {
//             console.log(error);
//             throw error
//         }
//     });
//
//
// }
//
// swapUser();