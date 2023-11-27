const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();


const mongoose = require("mongoose");
var cors = require('cors');
let Ticket = require("./ticket.model.js");
let User = require("./user.model.js");
let Comment = require("./comment.model.js");
let Article = require("./article.model.js");
const { ReplSet } = require("mongodb");


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(bodyParser.json());

const PORT = 4000;
const uri = encodeURI('mongodb+srv://root:redVentures2021@cluster0.yzkir.mongodb.net/TMS?retryWrites=true&w=majority');
const options = { useUnifiedTopology: true,
                  useNewUrlParser: true,
                  bufferCommands: true
                };
mongoose.connect(uri, options).then(
  () => {},
  err => {logError(err)}
);


//mongoose.connect('mongodb://127.0.0.1:27017/tickets', { useNewUrlParser: true});

const connection = mongoose.connection;

connection.once('open', function() {
  console.log("MongoDB database connection established successfully");
})

app.use(cors());
app.options('*', cors())

app.use((req, res, next) => {
   res.setHeader("Access-Control-Allow-Origin", "*");
   res.set()
   res.header(
     "Access-Control-Allow-Headers",
     "Origin, X-Requested-With, Content-Type, Accept"
   );
   next();
 });

connection.on('error', err => {
  console.log(err);
});

router.route('/').get(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  Ticket.find(function(err, tickets) {
    if (err) {
      console.log(err);
    } else {
      res.json(tickets);
    }
  })
});

router.route('/dl').get(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  Ticket.find(function(err, tickets) {
    if (err) {
      console.log(err);
    } else {
      res.json(tickets);
    }
  }).sort({ fName: 1 });
});

router.route('/comments').get(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  Comment.find(function(err, comments) {
    if (err) {
      console.log(err);
    } else {
      res.json(comments);
    }
  })
});


//Sort funcationality---------------------------------------------------
router.route('/assigned').get(function(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  Ticket.find(function(err, tickets) {
    if (err) {
      console.log(err);
    } else {
      console.log('Should sort by location');
      res.json(tickets);
    }
  }).sort({ assignedTo: 1 });
});
router.route('/first').get(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  Ticket.find(function(err, tickets) {
    if (err) {
      console.log(err);
    } else {
      res.json(tickets);
    }
  }).sort({ fName: 1 });
});
router.route('/last').get(function(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  Ticket.find(function(err, tickets) {
    if (err) {
      console.log(err);
    } else {
      console.log('Should sort by last name');
      res.json(tickets);
    }
  }).sort({ lName: 1 });
});
router.route('/phone').get(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  Ticket.find(function(err, tickets) {
    if (err) {
      console.log(err);
    } else {
      res.json(tickets);
    }
  }).sort({ phone: 1 });
});
router.route('/email').get(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  Ticket.find(function(err, tickets) {
    if (err) {
      console.log(err);
    } else {
      res.json(tickets);
    }
  }).sort({ email: 1 });
});
router.route('/issue').get(function(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  Ticket.find(function(err, tickets) {
    if (err) {
      console.log(err);
    } else {
      console.log('Should sort by location');
      res.json(tickets);
    }
  }).sort({ issue_title: 1 });
});

router.route('/location').get(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  Ticket.find(function(err, tickets) {
    if (err) {
      console.log(err);
    } else {
      res.json(tickets);
    }
  }).sort({ location: 1 });
});
router.route('/category').get(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  Ticket.find(function(err, tickets) {
    if (err) {
      console.log(err);
    } else {
      res.json(tickets);
    }
  }).sort({ category: 1 });
});
router.route('/description').get(function(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  Ticket.find(function(err, tickets) {
    if (err) {
      console.log(err);
    } else {
      console.log('Should sort by location');
      res.json(tickets);
    }
  }).sort({ description: 1 });
});
router.route('/status').get(function(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  Ticket.find(function(err, tickets) {
    if (err) {
      console.log(err);
    } else {
      console.log('Should sort by location');
      res.json(tickets);
    }
  }).sort({ status: 1 });
});



//end of sort funcationality
//---------------------------------------------------------------------------------------
//Descending Sort

router.route('/assigned2').get(function(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  Ticket.find(function(err, tickets) {
    if (err) {
      console.log(err);
    } else {
      console.log('Should sort by location');
      res.json(tickets);
    }
  }).sort({ assignedTo: -1 });
});
router.route('/first2').get(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  Ticket.find(function(err, tickets) {
    if (err) {
      console.log(err);
    } else {
      res.json(tickets);
    }
  }).sort({ fName: -1 });
});
router.route('/last2').get(function(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  Ticket.find(function(err, tickets) {
    if (err) {
      console.log(err);
    } else {
      console.log('Should sort by last name');
      res.json(tickets);
    }
  }).sort({ lName: -1 });
});
router.route('/phone2').get(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  Ticket.find(function(err, tickets) {
    if (err) {
      console.log(err);
    } else {
      res.json(tickets);
    }
  }).sort({ phone: -1 });
});
router.route('/email2').get(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  Ticket.find(function(err, tickets) {
    if (err) {
      console.log(err);
    } else {
      res.json(tickets);
    }
  }).sort({ email: -1 });
});
router.route('/issue2').get(function(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  Ticket.find(function(err, tickets) {
    if (err) {
      console.log(err);
    } else {
      console.log('Should sort by location');
      res.json(tickets);
    }
  }).sort({ issue_title: -1 });
});

router.route('/location2').get(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  Ticket.find(function(err, tickets) {
    if (err) {
      console.log(err);
    } else {
      res.json(tickets);
    }
  }).sort({ location: -1 });
});
router.route('/category2').get(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  Ticket.find(function(err, tickets) {
    if (err) {
      console.log(err);
    } else {
      res.json(tickets);
    }
  }).sort({ category: -1 });
});
router.route('/description2').get(function(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  Ticket.find(function(err, tickets) {
    if (err) {
      console.log(err);
    } else {
      console.log('Should sort by location');
      res.json(tickets);
    }
  }).sort({ description: -1 });
});
router.route('/status2').get(function(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  Ticket.find(function(err, tickets) {
    if (err) {
      console.log(err);
    } else {
      console.log('Should sort by location');
      res.json(tickets);
    }
  }).sort({ status: -1 });
});




//----------Descending Sort

router.route('/users').get(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  User.find(function(err, users) {
    if (err) {
      console.log(err);
    } else {
      res.json(users);
    }
  });
});


app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});


router.route('/:id').get(function(req, res){
  let id = req.params.id;
  Ticket.findById(id, function(err, ticket) {
    res.json(ticket);
  });
});

router.route('/ticket/:id').get(function(req, res){
  let id = req.params.id;
  Ticket.findById(id, function(err, ticket) {
    res.json(ticket);
  });
});



//Add ticket to the database


 router.route('/add').post(function(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  let ticket = new Ticket(req.body);
  ticket.save()
  .then(ticket => {
    res.status(200).json({'ticket': 'ticket added successfully'});
    console.log(req.body);
  })
  .catch(err => {
    res.status(400).send('adding new ticket failed!');
  });
});


//Add user account

router.route('/user').post(function(req, res) {
 res.setHeader("Access-Control-Allow-Origin", "*");
 let user = new User(req.body);
 user.save()
 .then(user => {
   res.status(200).json({'user': 'user added successfully'});
   console.log(req.body);
 })
 .catch(err => {
   res.status(400).send('adding new user failed!');
 });
});


//delete user by id

router.route('/delete/:id').delete(function(req, res){
  Ticket.findByIdAndRemove(req.params.id)
  .exec()
});


router.route('/update/:id').post(function(req, res, next){
  Ticket.findById(req.params.id, function(err, ticket){
    if (!ticket)
      res.status(404).send('data is not found');
      else
          ticket.fName = req.body.fName;
          ticket.lName = req.body.lName;
          ticket.email = req.body.email;
          ticket.phone = req.body.phone;
          ticket.category = req.body.category;
          ticket.description = req.body.description;
          ticket.issue_title = req.body.issue_title;
          ticket.location = req.body.location;
          ticket.assignedTo = req.body.assignedTo;
          ticket.status = req.body.status;
          ticket.updated = req.body.updated;
          ticket.ticket_id = req.body.ticket_id;

          ticket.save().then(ticket => {
            res.json('Ticket updated');
          })
          .catch(err => {
            res.status(400).send("update not possible");
          });
  });
});

//add comment to post


router.route('/comment').post(function(req, res) {
 res.setHeader("Access-Control-Allow-Origin", "*");
 let comment = new Comment(req.body);
 comment.save()
 .then(comment => {
   res.status(200).json({'comment': 'comment added successfully!'});
   console.log(req.body);
 })
 .catch(err => {
   res.status(400).send('comment failed!');
 });
});

//Routing for knowledgebase --------
app.get('/articles', function(req,res){
  res.type('application/json');
  Article.find(function(err, articles) {
    if (err) {
      console.log(err);
    } else {
      res.json(articles);
    }
  });
});

<<<<<<< HEAD
app.get('/article/:id', function(req,res){
  res.type('application/json');
  Article.findById(req.params.id, function(err, articles) {
    if (err) {
      console.log(err);
    } else {
      res.json(articles);
    }
  });
});
=======
>>>>>>> 7fbcc74f51803d39f55c5dd0eebc3890eba40a3c


app.put('/article', function(req,res){
  res.type('application/json');
  let article = new Article(req.body);
  article.save()
  .then(article => {
    res.status(200).json({'article': 'art added successfully'});
    console.log(req.body);
  })
  .catch(err => {
    res.status(400).send('adding new article failed!');
  });
});

app.get('/articleEdit/:id', function(req,res){
  res.type('application/json');
  Article.findById(req.params.id, function(err, article){
    if (!article)
      res.status(404).send('data is not found');
      else
          {
            console.log(article);
            res.json(article);
            article.id = req.params._id;
            article.content = req.body.content;
          }
  });
});

/*app.put('/articleUpdate/:id', function(req,res){
  
  Article.findByIdAndUpdate(req.params.id, function(err, article){
    //res.redirect('/articleUpdate/:id');
    if (!article._id)
      return res.status(404).send('data is not found');
      else
          {
            article.articleId = req.body.articleId;
            article.content = req.body.content;
            res.json(article);
            article.save().then(article => {
              res.json('article');
               return res.status(200);
            })
            .catch(err => {
              return res.status(400).send("update not possible");
            });
          }
  }).exec();
}); */ 

app.put("/articleUpdate/:id", function(req, res) {
  console.log(req.body);
  Article.findByIdAndUpdate(
    req.params.id,
    {
      content: req.body.content
    },
    { new: true },
    function(err, response) {
      if (err) {
        console.log("error: " + err);
        return res.json({
          message: "Database Update Failure"
        });
      }
      return res.send(response);
    }
  );
});


router.route('/articleList').get(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.set('content-type, application/json')
  Article.find(function(err, articles) {
    if (err) {
      console.log(err);
    } else {
      let data = res.json(articles);
      console.log(data);
    }
  });
});

app.delete('/articleDelete/:id', (req,res)=> {
  Article.findByIdAndRemove(req.params.id)
  .exec();

});

<<<<<<< HEAD
/*
router.route('/articleUpdate/:id').put(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.set('content-type, application/json')
  Article.find(function(err, articles) {
    if (err) {
      console.log(err);
    } else {
      let data = res.json(articles);
      console.log(data);
    }
  });
});

app.post('/articleUpdate/:id', function(req,res){
  res.type('application/json');
  Article.findById(req.params.id, function(err, article){
    if (!article)
      res.status(404).send('data is not found');
      else
          {
            res.json('Article updated');
            article.id = req.body._id;
            article.content = req.body.content;
            res.json(article);
          }
  });
});
router.route('/article').post(function(req, res) {
  res.set('content-type', 'application/json');
  let article = new Article(req.body);
  article.save()
  .then(article => {
    res.status(200).json({'article': 'art added successfully'});
    console.log(req.body);
  })
  .catch(err => {
    res.status(400).send('adding new article failed!');
  });
 });


router.route('/articleUpdate/:id').post(function(req, res, next){
  Article.findById(req.params.id, function(err, article){
    if (!article)
      res.status(404).send('data is not found');
      else
          article.save().then(article => {
            res.json('Article updated');
          })
          .catch(err => {
            res.status(400).send("update not possible");
          });
  });
});

router.route('/articleDelete/:id').delete(function(req, res){
  Article.findByIdAndRemove(req.params.id)
  .exec()
});

 */





=======
>>>>>>> 7fbcc74f51803d39f55c5dd0eebc3890eba40a3c

//End of KB routing -------


app.use('/tickets', router);

app.listen(PORT, ()=> {
    console.log("Server up and running on " + PORT + "...");
});
