// なんかごちゃごちゃと動き回る文字たち
var FlowTexts = function (element) {
	this.$element = $(element);
	this.offset = 0;

	this.initWords();
	this.renderWords();
};

// 語を初期化
FlowTexts.prototype.initWords = function () {
	var words = this.$element.html().split(' ');
	this.words = words;
};

// 語たちを画面上に出力
FlowTexts.prototype.renderWords = function () {
	var words = this.words;
	var $element = this.$element || $('<div />');
	$element.empty();

	var index = 0;
	var offset = this.offset;
	words.forEach(function (word) {
		var $word = $('<div />');
		$word.html(word);

		$word.css({
			position: 'absolute',
			top: '50%',
			left: '50%',
			transformOrigin: '0% 0%',
			transform: [
				'rotate(' + (360 * index / words.length) + 'deg' + ')',
				'translate(100px, 0px)'
			].join(' ')
		});

		$element.append($word);
		index++;
	});

	this.$element = $element;
	return $element[0];
};

$(function () {
	var $element = $('#flowtexts');
	if (!$element[0]) {
		return;
	}

	new FlowTexts($element[0]);
});