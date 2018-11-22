'use strict';

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const restaurantSchema = new Schema({
  name: String,
  description: String,
  imageUrl: String
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;