var db=require('../pool');
var mongoose = require('mongoose');
/* */
var collectionName='recruitment';					
/* */
// Schema 结构
var schema = new mongoose.Schema({
	job_info:{
		job_name:String,
		company:String
	},
	person_info:{
		sex:String,
		degree:[Number],
		age:[Number]
	},
	ability:[{
		aname:String,
		value:Number,
		need:Number
	}]
});
schema.set('versionKey', false);
var model=db.model(collectionName,schema);
module.exports=model;