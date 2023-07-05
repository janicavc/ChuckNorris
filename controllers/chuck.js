   const fetch = require('node-fetch');
const joke = 'https://api.chucknorris.io/jokes/random?category=';
const categories = 'https://api.chucknorris.io/jokes/categories';

module.exports = {
  index
};

function index(req, res) {
  fetch(categories)
    .then(res => res.json())
    .then(categories => {
    if (req.query.category) {
      fetch(`${joke}${req.query.category}`)
        .then(res => res.json())
        .then(joke => {
          res.render('index', {categories, category: req.query.category, joke: joke.value});
        });
    } else {
      res.render('index', {categories, joke: null, category: null});
    }
  });
}