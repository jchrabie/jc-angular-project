const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dataCard = require('./assets/json/cards');
const dataSocial = require('./assets/json/socials');
const dataLinkList = require('./assets/json/linkList');
const dataExperiences = require('./assets/json/experiences');
const dataSkills = require('./assets/json/skills');

app.use(bodyParser.json());

app.use((_, req, next) => {
    req.header('Access-Control-Allow-Origin', '*');
    next();
})

const api = express.Router();

api.get('/homeCards', (_, res) => res.json(dataCard.cards));

api.get('/skills', (_, res) => res.json(dataSkills.skills));

api.get('/socials', (_, res) => res.json(dataSocial.socials));

api.get('/linkList', (_, res) => res.json(dataLinkList.linkList));

api.get('/experiences', (_, res) => res.json(dataExperiences.experiences));

api.get('/chips', (_, res) => {
    const chips = [].concat.apply([], dataExperiences.experiences
        .map(experience => experience.chips))
        .filter((item, pos, self) => self.indexOf(item) == pos)
        .sort();

    res.json(chips);
});

app.use('/api', api);

const port = 4201;

app.listen(port, () => console.log(`Listening on port ${port}`))