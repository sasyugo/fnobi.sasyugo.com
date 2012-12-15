$(function () {
	var $element = $('#flowtexts');
	if (!$element[0]) {
		return;
	}

	new FlowTexts($element[0]);
});