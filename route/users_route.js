var express = require('express');
var router = express.Router();

router.get('/users', function(req,res){
	var users_data = req.app.get('data');
	res.render('users', {
		pageTitle: 'Users',
		pageID: 'users',
		pageData: users_data
	});
});

module.exports = router;