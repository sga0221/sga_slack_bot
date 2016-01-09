module.exports = function(robot) {
	robot.respond(/I love/i, function(msg) {
		msg.send('javascript!');
	});
};
