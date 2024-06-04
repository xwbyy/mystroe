const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const users = require('./lib/users.json');

app.get('/', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  const { phone, name } = req.body;
  let user = users.find(user => user.phone === phone);

  if (!user) {
    user = { phone, name };
    users.push(user);
    fs.writeFileSync('./lib/users.json', JSON.stringify(users, null, 2));
  }

  res.redirect('/catalog');
});

app.get('/catalog', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
