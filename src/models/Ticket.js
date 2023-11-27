const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

let CommentSchema = new Schema ({
    content: String,
    date: Date,  
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'username'
    }
});

let TicketSchema = new Schema (
    {      
        ticketCategory: {
            type: String,
            //required: false
        },
        ticketSubCategory:{
            type: String
        },
        callerFName: { type: String,
                 //required: false
        },
        callerLName: { type: String,
           //required: false
        },
        
        affected_user: { type: String, required: false},
        phone: { type: Number, required: false},
        category: {type: String, required: false},
        sub_category: {type: String },
        priority: {type: String },
        impact: {type: Number },
        start_date: {type: Date},
        ticketDesc: {
            type: String,
            required: false
        },
        ticketTitle: {
            type: String,
            required: false
        },
        ticketLocation: {
            type: String
        },
        ticketStatus:{
            type: Boolean,
            required: false,
            default: false
        },
        statusDescription:{
            type: String
        },

        ticketAssignedTo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: username,
            required: false
        }
    },
    {collection: "TicketList", timestamps: true}
);
TicketSchema.plugin(AutoIncrement, {inc_field: 'ticketId'});

const Ticket = mongoose.model("Ticket", TicketSchema);

module.exports = Ticket;

/*
issue_type: '',
      fname: '',
      lname: '',
      email: '',
      phone: '',
      description: '',
      issue_title: '',
      location: '',
      status: '',
      category: '',
      subcategory: '',
      assignedto: '',
      date: '', 

      */