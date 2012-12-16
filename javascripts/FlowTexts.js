// なんかごちゃごちゃと動き回る文字たち
var FlowTexts = function (element) {
	this.$element = $(element);
	this.offsetDeg = 0;

	this.degPerSeconds = 10;
	this.clockSeconds = 0.025;

	this.initWords();
	this.renderWords();

	this.startFlow();
};

// 語を初期化
FlowTexts.prototype.initWords = function () {
	var wordNames = this.$element.html().split(' ');

	var words = [];
	wordNames.forEach(function (wordName) {
		words.push(new FlowWord(wordName));
	});
	this.words = words;
};

// 語たちを画面上に出力
FlowTexts.prototype.renderWords = function () {
	var words = this.words;
	var $element = this.$element || $('<div />');
	$element.empty();

	words.forEach(function (word) {
		$element.append(word.render());
	});

	this.$element = $element;
	return $element[0];
};

FlowTexts.prototype.adjustRotate = function (offsetDeg) {
	var words = this.words;

	var index = 0;
	words.forEach(function (word) {
		word.adjustRotate(offsetDeg - 360 * index / words.length);
		index++;
	});
};

FlowTexts.prototype.startFlow = function () {
	var self = this;

	var animation = setInterval(function () {
		var offsetDeg = self.offsetDeg;

		self.adjustRotate(offsetDeg);

		offsetDeg += self.degPerSeconds * self.clockSeconds;
		while (offsetDeg > 360) {
			offsetDeg -= 360;
		}
		while (offsetDeg < 0) {
			offsetDeg += 360;
		}

		self.offsetDeg = offsetDeg;
	}, this.clockSeconds * 1000);

	this.animation = animation;
};