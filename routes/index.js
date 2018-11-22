const express = require('express');
const router = express.Router();

const Restaurant = require('../models/restaurants')

const parser = require('../helpers/file-upload')

/* GET home page. */
router.get('/', (req, res, next) => {
  Restaurant.find()
    .then((restaurants) => {
      const data = {
        messages: req.flash('wrongType'),
        title: 'File Upload',
        restaurants
      };
      res.render('index', data);
    })
    .catch(next)
});

router.post('/', parser.single('image'), (req, res, next) => {
  if (req.fileValidationError) {
    req.flash('wrongType', 'Wrong file type uploaded');
    res.redirect('/')
    return
  }
  console.log(req.file)
  const restaurant = {
    name: req.body.name,
    description: req.body.description,
    imageUrl: req.file.url
  }

  Restaurant.create(restaurant)
    .then(() => {
      res.redirect('/')
    })
    .catch(next)
});


module.exports = router;
