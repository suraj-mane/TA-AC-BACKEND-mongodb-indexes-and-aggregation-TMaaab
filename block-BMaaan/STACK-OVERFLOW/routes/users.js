var express = require('express');
const Question = require('../model/question');
var User = require('../model/user');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Tags find */

Question.aggregate([
  {
    $unwind:"tags"
  }
])

/* Total question */
Question.aggregate([
  {
    $group:{
      $id:null,
      count:{$sum:1}
    }
  }
])

// specfic question
Question.aggregate(
  [
//  Match question
    { $match: {"text" : "specific"}},
    {
      $group:
        {
          _id: null, 
          count: { $sum: 1 }
        }
    }
  ]
)

//  Count total reputation of a user

User.aggregate([
  //  Match question
    { $match: {"username" : "specific"}},
    {
      $group:
        {
          _id: null, 
          totalReputation: { $sum: "$reputation" },
          count: { $sum: 1 }
        }
    }
  ])

  Question.aggregate([
    { $match: {"date": "specific date"}},
    {
      $group:
      {
        _id: null,
        totalViews: { $sum: "$reputation" },
        count: { $sum: 1 }
      }
    }
  ])

  User.aggregate([
    { $match: {"username": "specific user"}},
    {
      $group: {
        _id:null,
        count: { $sum: 1 }
      }
    }
  ])
module.exports = router;
