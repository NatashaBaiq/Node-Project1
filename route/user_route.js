var express = require('express');
var router = express.Router();

router.get('/user/:id', function(req,res){
	var index = req.params.id;
	var user_data = req.app.get('data');
	
	var user = user_data[index];
	res.render('user', {
		pageTitle: 'User',
		pageID: 'user',
		pageData: user
	});
});

module.exports = router;