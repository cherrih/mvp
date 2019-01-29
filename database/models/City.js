const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  name: String,
  fun: String,
  safety: String,
  queervibes: String,
  weather: String,
  places: [
    {
      name: String,
      address: String,
      website: String,
      vibe: String,
      queerdar: String,
      description: String,
      lat: Number,
      lng: Number,
      category: String,
      identity: String,
      city: String,
    },
  ],
});

const City = mongoose.model('City', citySchema);


module.exports = { City };
