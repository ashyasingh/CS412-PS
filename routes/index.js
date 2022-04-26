let express = require('express');
//const url = require("url");
let router = express.Router();
const request = require('request');
//const https = require('https');

/* GET home page. */
router.get('/', (req, res, next) => {
  console.log(req.body)
  res.render('index', { title: 'Country' });
});

//POST method for CAPITAL
//callback
router.post('/capital', (req, res, next) => {
  let url = `https://restcountries.com/v3.1/name/${req.body.country}`
  const requestOptions = {
    url: url,
    method: 'GET',
    json: {},
    qs: {
      offset: 20
    }
  };
  request(requestOptions, (err, response, body) => {
    if (err) {
      console.log(err);
    } else if (response.statusCode === 200) {
      let capital = body[0].capital[0];
      res.render('index', { capital: `${req.body.country}'s capital is ${capital}`, country: req.body.country, title: 'Country'});
    } else {
      console.log(response.statusCode);
    }
  });
});

//POST method for CURRENCY
//callback
router.post('/currency', (req, res, next) => {
  let url = `https://restcountries.com/v3.1/name/${req.body.country}`
  const requestOptions = {
    url: url,
    method: 'GET',
    json: {},
    qs: {
      offset: 20
    }
  };
  request(requestOptions, (err, response, body) => {
    if (err) {
      console.log(err);
    } else if (response.statusCode === 200) {
      let currency = body[0].currency;
      res.render('index', { currency: `${req.body.country}'s currency is ${currency}`, country: req.body.country, title: 'Country'});
    } else {
      console.log(response.statusCode);
    }
  });
});

//POST method for POPULATION
//callback
router.post('/population', (req, res, next) => {
  let url = `https://restcountries.com/v3.1/name/${req.body.country}`
  const requestOptions = {
    url: url,
    method: 'GET',
    json: {},
    qs: {
      offset: 20
    }
  };
  request(requestOptions, (err, response, body) => {
    if (err) {
      console.log(err);
    } else if (response.statusCode === 200) {
      let population = body[0].population;
      population = population.toLocaleString("en-US");
      res.render('index', { population: `${req.body.country}'s population is ${population}`, country: req.body.country, title: 'Country'});
    } else {
      console.log(response.statusCode);
    }
  });
});

router.use(express.urlencoded({
  extended: true
}))

module.exports = router;