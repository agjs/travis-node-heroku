const express = require('express');
const app = express();

app.get('/home', (req, res, next) => {
    res.status(200).send('<h1>Hello, World & Matt!</h1>');
});

app.listen(process.env.PORT || 5000, () => console.log('Express server!'));