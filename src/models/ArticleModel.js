const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

let SubheadSchema = new Schema ({
    _id : Number,
    title: String,
    body : String,
    subLabel: String,
});

let ArticleSchema = new Schema (
    {      
        articleHeader: {
            type: String,
            required: false
        },
        articleDate :{
            type: Date,
            required: false
        },
        articleDesc: {
            type:String,
            required: false
        },
        articleSubheads : [SubheadSchema],
        
        articleImg: {
            imgLink : String
        }
    },
    {collection: "Articles", timestamps: true}
);
ArticleSchema.plugin(AutoIncrement, {inc_field: 'articleId'});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;