const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cors = require('cors');


let user = new mongoose.Schema({
      email: {
          type: String,
          required: false,
          //default: 'user@user.com'
      },
      password: {
          type: String,
          required: false
      },
      type: {
        type: String,
      },
      //comment: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});



const User = mongoose.model('User', user);

module.exports = User;
