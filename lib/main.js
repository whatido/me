function goToByScroll(id) {
	// Reove "link" from the ID
	id = id.replace("link", "");
	// Scroll
    let middle_height = screen.availHeight / 4;
    let Scrollpx = $("." + id).offset().top - middle_height;
    console.log(Scrollpx);
    console.log(middle_height);
	$('html,body').animate({
			scrollTop: Scrollpx
		},
		'slow');
}

$(".menu > li > a").click(function (e) {
	// Prevent a page reload when a link is pressed
	e.preventDefault();
	// Call the scroll function
	goToByScroll($(this).attr("id"));
});

function scrollToMiddle(containerID, elID) {
	// If element does not Exist then return
	var el = document.getElementById(elID);
	if (el == null) return;

	// If container does not Exist then return
	var container = document.body;
	if (container == null) return;

	// The proper distance required to scroll to the middle of the container is:
	// The position the element is found within the container  - minus -
	// The containers distance from the top of the page - minus -
	// Half of the containers height 
	var elCoords = findPos(el);
	var containerCoords = findPos(container);
	
	containerScrollX = (elCoords[1] - containerCoords[1]) - middle_height;

	// Check boundary conditions (probably not needed - but what the heck)
	if (containerScrollX < 0) containerScrollX = 0;

	// Scroll there	
	container.scrollTop = containerScrollX;
}
