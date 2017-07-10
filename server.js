const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_ADDRESS || 'mongodb://localhost/node-matt-db');

const fruitSchema = new mongoose.Schema({ name: String });
const Fruit = mongoose.model('Fruit', fruitSchema);

Fruit.create([{ name: 'apple' }, { name: 'orange' }]);

app.get('/home', async (req, res, next) => {
    res.status(200).json(await Fruit.find({}));
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

