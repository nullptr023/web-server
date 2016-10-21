var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('private route hit!');
	},
	logger: function (req, res, next) {
		console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
	}
};

module.exports = middleware;
