// なんかごちゃごちゃと動き回る語たち
var FlowWord = function (name) {
	this.name = name;
};

FlowWord.prototype.render = function () {
	var $word = this.$word || $('<div />');
	$word.html(this.name);

	$word.css({
		position: 'absolute',
		top: '50%',
		left: '50%',
		transformOrigin: '0% 50%'
	});

	this.$word = $word;
	return $word[0];
};

FlowWord.prototype.adjustRotate = function (rotateDeg) {
	if (!this.$word) {
		return false;
	}

	this.$word.css({
		transform: [
			'rotate(' + (rotateDeg) + 'deg' + ')',
			'translate(100px, 0px)'
		].join(' ')
	});
};