// BASE SETUP
// ==========================================

// Call the packages --------------------
var express = require('express');   //call express
var app = express();               //define our app using express
var bodyParser = require('body-parser');    // get body-parser
var morgan = require('morgan');             // used to see requests
var mongoose = require('mongoose');         // for working w/ our database
var port = process.env.PORT || 8080;       // set the port for our app
var User = require('./models/user');
var jwt = require('jsonwebtoken');
var superSecret = 'johndoe';


// APP CONFIGURATION   -----------------------------------
// use body parser so we can grab information from POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configure our app to handle CORS requests
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, \Authorization');
  next();
});


//log all requests to the console
app.use(morgan('dev'));


//ROUTES FOR OUR API
//==================================================================================================

// basic route for the home page
app.get('/', function(req, res) {
  res.send('Welcome to the home page!');
});


//get an instance of the express router
var apiRouter = express.Router();

//test route to make sure evrything is working
//accessed at GET http://localhost:8080/apiRouter
apiRouter.get('/', function(req, res){
  res.json({ message: 'hooray! Welcome to our api!'});
});

//more routes for our API will happen here
// get an instance of the express router
var apiRouter = express.Router();



//Route to authenticate a user (POST http://localhost:8080/api/authenticate)

apiRouter.post('/authenticate', function(req, res) {

  //find the user
  //select the name username and password explicitly
  User.findOne({
    username: req.body.username
  }).select('name username password').exec(function(err, user) {
    if (err) throw err;

    //no user with that username was found
    if (!user) {
      res.json({
        success: false,
        message: 'Authentication failed. User not found.'
      });
    } else if (user) {

      // check if password matches
      var validPassword = user.comparePassword(req.body.password);
      if(!validPassword) {
        res.json({
          success: false,
          message: 'Authentication failed. Wrong password. '
        });
      } else {

        //if user is found and password is right. create a token
        var token = jwt.sign({
          name: user.name,
          username: user.username
        }, superSecret, {
          expiresIn: 1440 //expires in 24 hours
        });


       //return the information including token as json
       res.json({
         success: true,
         message: 'Enjoy your token!',
         token: token
       });

      }


    }
  });


});



//middleware to use for all the requests
apiRouter.use(function(req, res, next) {
  //do logging


  //route middleware to verify a token


  //check header or url parameters or post parameters for token
  var token = req.body.token || req.param('token') || req.headers['x-access-toke\n'];

  //decode token
  if (token) {

    //verifies secret and checks exp
    jwt.verify(token, superSecret, function(err, decoded) {
      if (err) {
        return res.status(403).send({
          success: false,
          message: 'Failed to authenticate token.'
        });
      } else {
        //if everything is good, save to request for use in other routes
        req.decoded = decoded;

        next();

      }
    });

  } else {
    //if there is no token
    //return an HTTP response of 403 (access forbidden) and an error message

    return res.status(403).send({
      success: false,
      message: 'No token provided'
    });

  }

  console.log('Somebody just came to our API!');

  //we will add more to the middleware in chapter 10
  //this is where we will authenticate UserSchema

  //next();   // make sure we go the next routes and don't stop here

});

//test routes to make sure everything is working
//(accessed at GET http://localhost:8080/api)
apiRouter.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});

//more routes for our api will happen here

//or routes that end in /users
//  -------------------------------------------------------------------------------------------------
apiRouter.route('/users')

        //create a user (accessed at POST http://localhost:8080/api/users)
        .post(function(req, res) {

              //create a new instance of the user model
              var user = new User();

              //set the users information( comes from the request)
              user.name = req.body.name;
              user.username = req.body.username;
              user.password = req.body.password;

              //save the user and check for errors
              user.save(function(err) {
                if(err) {
                  //duplicate entry
                  if (err.code == 11000 )
                      return res.json({ success: false, message: 'A user with that username already exists. '});

                  else
                      return res.send(err);
                }

                res.json({ message: 'User created! ' });
              });



        })

        //get all the users ( accessed at GET http://localhost:8080/api/users)
        .get(function (req, res) {

          User.find(function(err, users) {
               if (err) res.send(err);

               //return the users
               res.json(users);
          });

        });




      //on routes that end in  /users/:user_id
      //----------------------------------------------------------------------------
      apiRouter.route('/users/:user_id')

           //get the user with that user id
           //(accessed at GET http://localhost:8080/api/users/:user_id)
           .get(function(req, res) {
             User.findById(req.params.user_id, function(err, user) {
               if(err) res.send(err);

               res.json(user);
             });

           })

           //update the user with this id
           //(accessed at PUT http://localhost:8080/api/users/:user_id)
           .put(function(req, res) {

                   //use our user model to find the user we want
                   User.findById(req.params.user_id, function(err, user) {
                     if (err) res.send(err);

                     //update the users info only if it's new
                     if(req.body.name) user.name = req.body.name;
                     if(req.body.username) user.username = req.body.username;
                     if(req.body.password) user.password = req.body.password;


                     //save the user
                     user.save(function(err) {
                       if(err) res.send(err);

                       //return a message
                       res.json({message: 'User Updated!' });
                     });

                   });
           })


           //delete the user with this id
           //(accessed at DELETE http://localhost:8080/api/users/:user_id)
           .delete(function(req, res) {
             User.remove({
                   _id: req.params.user_id
             }, function(err, user) {
               if (err) return res.send(err);

               res.json({message: 'successfully deleted' });
             });

           });

//api endpoint to get user information
apiRouter.get('/me', function(req, res) {
  res.send(req.decoded);
});




//REGISTER OUR ROUTES --------------------------------------------------------------------------------
//all of our routes will be prefixed with /api
app.use('/api', apiRouter);


//START THE SERVER
//====================================================================================================
app.listen(port);
console.log('Magic happens on port ' + port);


//server.js


//BASE SETUP
//===========================


//connect to our database (hosted locally)
mongoose.connect('mongodb://localhost:27017/myDatabase');
