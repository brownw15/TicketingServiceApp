const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

/*let blocksSchema = new Schema({
  key : String,
  text : String,
  type: String,
  depth: Number,
  inlinesStyleRanges: Array,
  entityRanges : Array,
  data: Object
}); */

let article = new Schema ({
  content : {
    type: Array,
    required: true
  }
});
article.plugin(AutoIncrement, {inc_field: 'articleId'});

const Article = mongoose.model('Article', article);

module.exports = Article;


/*
{
    "blocks": {
      "type": [
        "Mixed"
      ]
    },
    "entityMap": {}
  }

*/