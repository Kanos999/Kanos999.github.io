$( document ).ready(function() {
    console.log("ready!");

	typeWriter("#landingTitle", "Hi! I'm Kane", 80);
	setTimeout(function() {
		typeWriter("#sub1", "// I like to do stuff and make things", 40);
	}, 1500);
	setTimeout(function() {
		typeWriter("#sub2", "// Computer Science, UNSW", 40);
	}, 3500);



});
