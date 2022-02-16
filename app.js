// const {greeting} = require('./helper');
//
// greeting('Nazar');

// console.log(__filename);// повератє шлях до файлу який запускаєм
// console.log(__dirname);// повератє шлях до папки в якій знаходиться файл де запускаєм (оцей консоль лог)  

// const {test} = require('./helper');
//
// test();
// console.log(process.cwd(), 'process');// повератє шлях до папки з якої запускаєм (осноний) файл
// console.log(__dirname, 'app dirName')

// global.name = 'Nazar'; // створення глобальної (глобальна для цього файлу) змінної "name"
//
// console.log(name)

const path = require('path')

// const jouinedPath = path.join('test', 'test2', 'files', 'public', 'text.txt');// проставляє "/" між словами
//
// console.log(jouinedPath)

// const normalizePath = path.normalize('test///files////public2////files.text');// видаляє не потрібні "/" розставляє як треба і повертає правильний шлях
//
// console.log(normalizePath)

// const resolvePath = path.resolve('test///files////public////files.txt');// видаляє не потрібні "/" розставляє як треба і повертає абсолютний шлях
// console.log(resolvePath)

// const os = require('os'); // повертає данні про операційну систему
//
// console.log(os.cpus())
// console.log(os.cpus().length)


const fs = require('fs');

// fs.writeFileSync(path.join(__dirname, 'test', 'file.txt'),'some data')// синхроно створює файл з даними "SOME DATA"

// fs.writeFile(path.join(__dirname, 'files', 'file2.txt'), 'some data',(error) => {
//     if (error) {
//         console.log(error)
//         throw error
//     }
// })// асинхроно створює файл з даними (обовязкво умова і калл бєк)

// fs.readFile(path.join(__dirname, 'files', 'file.txt'),(err,data) => {
//     if (err) {
//         console.log(err);
//         throw err
//     }
//
//     console.log(data)
// })// читає данні з файлу


// for (let i = 0; i < 100; i++) {
//     fs.appendFile(path.join(__dirname, 'files', 'file.txt'), '\nNew Data', {flag: 'a'}, (error) => {
//         if (error) {
//             console.log(error);
//             throw error
//         }
// // {flag:'a'} - дописує данні в файл (стоїть по дефолту)
// // {flag:'w'} - перезаписує кожного разу при ітерації (перезатирає) данні в файлі
//
//     });
// }// добавляє данні в файл


// fs.truncate(path.join(__dirname, 'files', 'file.txt'), (err) => {
//     if (err) {
//         console.log(err)
//         throw err
//     }
// } ) // видаляє данні з файлу

// fs.unlink(path.join(__dirname, 'files', 'file2.txt'), (err) => {
//     if (err) {
//         console.log(err)
//         throw err
//     }
// }); //видаляє файл


// fs.mkdir(path.join(__dirname, 'public'), (error) => {
//     if (error) {
//         console.log(error);
//         throw error
//     }
// }); // створює папку

// fs.mkdir(path.join(__dirname, 'public', 'test', 'test2', 'test22'), {recursive: true}, (error) => {
//     if (error) {
//         console.log(error);
//         throw error
//     }
// }); // створює папку в папкі (рекурсивно)

// fs.rmdir(path.join(__dirname,'test'), (error) => {
//     if (error) {
//         console.log(error);
//         throw error
//     }
// }); // видаляю папку 

// fs.readdir(path.join(__dirname, 'test'), (err, data) => {
//     console.log(data)
// }) // читає що в папці


fs.rename(path.join(__dirname, 'test', 'text.txt'),
    path.join(__dirname, 'test', 'text2.txt'), (error) => {
    if (error) {
        console.log(error);
        throw error
    }
}); // переіменовуєм файл (данні зберігаються)

fs.rename(path.join(__dirname, 'test', 'text2.txt'),
    path.join(__dirname,'public', 'test', 'test2', 'test22', 'text2.txt'), (error) => {
        if (error) {
            console.log(error);
            throw error
        }
    }); // переміщає файл (данні зберігаються) 


