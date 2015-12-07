var express = require('express');
var router = express.Router();
var jobmatch= require('../util/jobmatch');
var title="人职匹配模型的实现";


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '人职匹配模型的实现' });
});

router.get('/demo', function(req, res, next) {
  res.render('demo', { title: '人职匹配模型的实现' });
});

router.post('/demo/match', function(req, res, next) {
	var now=new Date();
	var birthday=new Date(req.body.person_info.birthday);
	req.body.person_info.age=now.getFullYear()-birthday.getFullYear();
 	var r={
 		_id:1,
 		job_info:{
 			job_name:"IT工程师",
 			company:"上海某有限公司"
 		},
 		person_info:{
 			sex:"all",
 			degree:[1],
 			age:[18,30]
 		},
 		ability:[{
 			aname:"c#",
 			value:60,
 			need:1
 		},{
 			aname:"php",
 			value:60,
 			need:0
 		}]
 	};
 	jobmatch(req.body,r,function(err,result){
 		var output={
 			recruitment:r.job_info,
 			mark:result
 		}
 		res.send(output);
 	});
});
module.exports = router;
