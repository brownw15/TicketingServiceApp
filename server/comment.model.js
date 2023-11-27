const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cors = require('cors');


let comment = new mongoose.Schema({
      comment: {
          type: String,
          required: false
      },
      ticket_id: {
        type: String,
        required: false
      },
      user: {
        type: String
      },
      type: {
        type: String
      }
      // user: { type: Schema.Types.ObjectId, ref: 'User'}
});


const Comment = mongoose.model('Comment', comment);

module.exports = Comment;
