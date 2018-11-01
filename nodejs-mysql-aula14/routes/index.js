module.exports = function(app){
	app.get('/', function(req, res) {
		// render to views/index.ejs template file
		res.render('index', {title: 'My Node.js Application'})
	})
}