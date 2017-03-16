'use strict';

var MongoClient = require('mongodb').MongoClient, moment = require('moment');

exports.getRecord = function(req,res){
  MongoClient.connect("mongodb://dbUser:dbPassword@ds155428.mlab.com:55428/getir-bitaksi-hackathon", function(err, db) {
    if(err) {console.log("Error while connecting db");}
    var collection = db.collection('records');
    collection.findOne({'key': req.body.key},{ _id: 0, key: 1, value: 1, createdAt: 1}, function(err, item) {
      item.createdAt = moment(new Date(item.createdAt)).format('YYYY-MM-DD');
      item.value = item.value.substring(0,45);
      res.json(item)
    });
  });
};
