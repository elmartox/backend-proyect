const mongoose = require('mongoose');

// URI de MongoDB Atlas
const uri =
  'mongodb+srv://user_proSE:MZZO3qQdUKfzQ4Ep@cluster0.7ft1zo2.mongodb.net/safeair?retryWrites=true&w=majority';

mongoose.connect(uri)
  .then(() => console.log('MongoDB Atlas conectado'))
  .catch(err => console.error(err));

module.exports = mongoose;
