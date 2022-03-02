const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'ashyasingh' });
});

router.post('/post', (req, res, next) => {
    let word = req.body.string
    let object = {name: word, stringlength: word.length}
    res.render('index', {newdata: JSON.stringify(object)});

});

router.get('/get', function (req, res) {
    const json = {key: 'Hey now' }; // turns it into a string
    res.render('index', {data: JSON.stringify(json) }); //turns it into JSON readable format

});

module.exports = router;