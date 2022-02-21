const express = require('express');
const path = require('path');
const {engine} = require('express-handlebars');
const apiRoutes = require('./routes/apiRoutes')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

// const users = [];

// app.get('/login', (req, res) => {
//     res.render('login');
// });

app.use(apiRoutes)

// app.get('/users', (req, res) => {
//     res.render('users', {users});
// });

// app.get('/users/:userId', (req, res) => {
//     const {userId} = req.params;
//     const user = users.find(user => user.id === +userId);
//     if (!user) {
//         const error = `User with id: ${userId} is not found!`;
//         res.render('errorPage',{error});
//         return;
//     }
//     res.render('user', {user});
// });

// app.post('/login', ({body}, res) => {
//     const filterUser = users.some(user => user.email === body.email);
//     if (filterUser) {
//         const error = `User with this email:${body.email} exists, please try to enter another email!`
//         res.render('errorPage', {error});
//         return;
//     }
//     users.push({...body, id: users.length ? users[users.length - 1].id + 1 : 1});
//     res.redirect('users');
// });

app.use((req, res) => {
    res.render('errorPage');
});

app.listen(5201, () => {
    console.log('Server has start on PORT 5201');
});

