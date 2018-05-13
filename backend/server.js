const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dataCard = require('./assets/json/cards');
const dataSocial = require('./assets/json/socials');
const dataLinkList = require('./assets/json/linkList');
const dataExperiences = require('./assets/json/experiences');

app.use(bodyParser.json());

app.use((res, req, next) => {
    req.header('Access-Control-Allow-Origin', '*');
    next();
})

const api = express.Router();

api.get('/homeCards', (req, res) => {
    res.json(dataCard.cards);
});

api.get('/socials', (req, res) => {
    res.json(dataSocial.socials);
});

api.get('/linkList', (req, res) => {
    res.json(dataLinkList.linkList);
});

api.get('/experiences', (req, res) => {
    res.json(dataExperiences.experiences);
});

api.get('/chips', (req, res) => {
    const chips = [].concat.apply([], dataExperiences.experiences
    .map(experience => experience.chips))
    .filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
    })
    .sort();
    res.json(chips);
});

app.use('/api', api);

const port = 4201;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})