$( document ).ready(function() {
    console.log("ready!");

	typeWriter("#landingTitle", "Hi! I'm Kane", 80);
	setTimeout(function() {
		typeWriter("#sub1", "// I like to do stuff and make things", 40);
	}, 1500);
	setTimeout(function() {
		typeWriter("#sub2", "// Mechatronics / Computer Science, UNSW", 40);
	}, 3500);


	let sections = $('.section'); //.offset().top;

	let pageScrollIntervals = [];

	for (let i = 0; i < sections.length; i++) {
		console.log(sections[i].id)
		pageScrollIntervals.push({
			id: sections[i].id,
			offset: $(`#${sections[i].id}`).offset().top
		});
	}

	updateMenuSelection();


	$(".navigationItem").click((event) => {
		let currentItem = $(event.target)

		$('html, body').animate({
			scrollTop: $(currentItem.attr("section")).offset().top - 80
		}, 400, 'swing', updateMenuSelection);
	});

	$(window).scroll(function() {
		updateMenuSelection();
	});

	function updateMenuSelection() {
		pageScrollIntervals.forEach((section) => {
			if ( $(window).scrollTop() >= section.offset - 260) {
				$(".navigationItem").removeClass("selected");
				$(`[section='#${section.id}']`).addClass("selected");
			}
		});
	}

	emailjs.init('auEZ9YqZNL9QIWVVW');
	document.getElementById('contact-form').addEventListener('submit', function(event) {
		event.preventDefault();
		// generate a five digit number for the contact_number variable
		this.contact_number.value = Math.random() * 100000 | 0;
		// these IDs from the previous steps
		emailjs.sendForm('service_o9hgirl', 'template_tpudjv6', this)
			.then(function() {
				console.log('SUCCESS!');
			}, function(error) {
				console.log('FAILED...', error);
			});
	});


});
