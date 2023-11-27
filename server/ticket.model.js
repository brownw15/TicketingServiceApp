const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cors = require('cors');


let ticket = new mongoose.Schema({
      fName: {
          type: String,
          required: false
      },
      lName: {
          type: String,
          required: false
      },
      phone: {
          type: String,
          required: false
      },
      email: {
          type: String,
          required: false
      },
      location: {
          type: String,
          required: false
      },
      issue_title: {
          type: String,
          required: false
      },
      category: {
          type: String,
          required: false
      },
      description: {
          type: String,
          required: false
      },
      assignedTo: {
          type: String,
          required: false
      },
      status: {
          type: String,
          default: 'new',
          required: false
      },
      date: {
          type: String,
          required: false
      },
      updated: {
          type: String,
          required: false
      },
      comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]

});


const Ticket = mongoose.model('Ticket', ticket);

module.exports = Ticket;
