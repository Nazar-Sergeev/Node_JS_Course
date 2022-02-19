const express = require('express');
const path = require('path');
const {engine} = require('express-handlebars');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

const users = [];

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/users', (req, res) => {
    res.render('users', {users});
});

app.get('/users/:userId', (req, res) => {
    const {userId} = req.params;
    const user = users.find(user => user.id === +userId);

    if (!user) {
        res.redirect('/errorPage');
        return;
    }

    res.render('user', {user});
});

app.get('/singIn', (req, res) => {
    res.render('singIn');
});

app.post('/singIn', (req, res) => {
    const user = users.find(user => user.email === req.body.email && user.password === req.body.password);

    if (!user) {
        res.redirect('errorPage');
    }

    res.redirect(`/users/${user.id}`);
});

app.post('/login', (req, res) => {
    const filterUser = users.some(user => user.email === req.body.email);

    if (filterUser) {
        res.redirect('errorPage');
    }

    users.push({...req.body, id: users.length ? users[users.length - 1].id + 1 : 1});
    res.redirect('users');
});

app.use((req, res) => {
    res.render('errorPage');
});


app.listen(5201, () => {
    console.log('Server has start on PORT 5201');
});

