function typeWriter(element, delay) {
	let text = $(element).attr("text");
	let tmp = $(element).text() + "|";
	for (let i = 0; i < text.length; i++) {
		setTimeout(() => {
			tmp = tmp.slice(0,-1) + text[i] + "|";
			$(element).text(tmp);
		}, delay * i);
	}
	setTimeout(() => {
		tmp = tmp.slice(0,-1);
		$(element).text(tmp);
	}, delay * (text.length + 6));
}

$(document).ready(function() {
	typeWriter("#pageTitle", 50)
});