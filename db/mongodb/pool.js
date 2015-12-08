//MongodbConfig
var DB_Config=require('../../bin/config').Mongodb;
var mongoose = require('mongoose');
var db = mongoose.createConnection(DB_Config.DB_PATH);
// 链接错误
db.on('error', function(error) {
    console.log(error);
    db=mongoose.createConnection(DB_Config.DB_PATH);
});

module.exports=db;