module.exports = function(robot) {
    robot.hear(/calc ([0-9]+\s*)(\S)(\s*[0-9]+)/, function(msg) {
	var num1 = parseInt(msg.match[1]); //一つ目の数
	var num2 = parseInt(msg.match[3]); //二つ目の数
	var op = msg.match[2]; //演算子
	var ans;
	
	if(op == "+"){
	    ans = num1 + num2;
	}else if(op == "-"){
	    ans = num1 - num2;
	}else if(op == "*"){
	    ans = num1 * num2;
	}else if(op == "/"){
	    ans = num1 / num2;
	}else{
	    ans = "invalid op";
	}
	
	msg.send(ans);
    });
};
