/**
 * YoutubeController
 *
 * @description :: Server-side logic for managing youtubes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var twilio = require('twilio');

module.exports = {
	index: function(req, res) {
		var params = req.params.all();
		console.log(params);
		
		if (typeof params.link == 'undefined' || params.key != 'KEY')
			return;
	
		var client = new twilio.RestClient('SID', 'TOKEN');

		client.sms.messages.create({
			to:'TO',
			from:'FROM',
			body:params.link
		}, function(error, message) {
			if (!error) {
			
			} else {
				console.log('Oops! There was an error.');
			}	
		});
	}
};

