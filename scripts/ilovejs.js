// Description:
//   Hello,worldのようなもの
//
// Commands:
//   hubot I love  - return javascript!
//
//
module.exports = function(robot) {
	robot.respond(/I love/i, function(msg) {
		msg.send('javascript!');
	});
};
