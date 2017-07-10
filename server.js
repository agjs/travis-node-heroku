const express = require('express');
const app = express();

app.get('/home', (req, res, next) => {
    res.status(200).send('<h1>Hello, World & Matt!</h1>');
});

app.listen(process.env.PORT || 5000, () => console.log('Express server!'));


/*

    Created a simple express app
    Created a git repo
    Created a simple .yml file
    Created a simple test
    pushed stuff to github
    connected repo with travis
    we used preinstall under scripts in package.json

    We install heroku CLI tools
    We log in with our heroku creds

*/