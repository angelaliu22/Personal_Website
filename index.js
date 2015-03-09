/*BEGINNING OF SCROLLING JS*/
// Smooth scroll for in page links
// Not my own code. Taken from:
// Improved version (from one of the commenters) from Satyajit Sahoo
// @see http://wibblystuff.blogspot.com.au/2014/04/in-page-smooth-scroll-using-css3.html
// Changes:
// - moved css transition detection outside of the event handler
// - detect vertical scrolling value in all cases, not only when css transitions are supported
// - optimise algorithm to determine the new vertical scrolling value

$(function() {
	var $window = $(window),
		$document = $(document),
		transitionSupported = typeof document.body.style.transitionProperty === 'string',
		scrollTime = 1; // scroll time in seconds

	$(".link-to-projects").on("click", function(e) {
		var target,
			avail,
			scroll,
			deltaScroll;
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			target = $(this.hash);
			target = target.length ? target : $("[id=" + this.hash.slice(1) + "]");

			if (target.length) {
				avail = $document.height() - $window.height();

				if (avail > 0) {
					scroll = target.offset().top;
					if (scroll > avail) {
						scroll = avail;
					}
				} else {
					scroll = 0;
				}

				deltaScroll = $window.scrollTop() - scroll;

				// if we don't have to scroll because we're already at the right scrolling level, 
				if (!deltaScroll) { // do nothing
					return;
				}

				e.preventDefault();
				if (transitionSupported) {
					$("html").css({
						"margin-top": deltaScroll + "px",
						"transition": scrollTime + "s ease-in-out"
					}).data("transitioning", scroll);
				} else {
					$("html, body").stop(true, true) // stop potential other jQuery animation (assuming we're the only one doing it)
					.animate({
						scrollTop: scroll + 'px'
					}, scrollTime * 1000);
					return;
				}
			}
		}
	});

	if (transitionSupported) {
		$("html").on("transitionend webkitTransitionEnd msTransitionEnd oTransitionEnd", function(e) {
			var $this = $(this),
				scroll = $this.data("transitioning");
			if (e.target === e.currentTarget && scroll != null) {
				$this.removeAttr("style").data("transitioning", null);
				$("html, body").scrollTop(scroll);
			}
		});
	}
});
/*END OF SCROLLING JS*/

function clearAll() {
//clear everything 
    $('#All-button').css({border:'none'});
    $('#Development-button').css({border:'none'});
    $('#Design-button').css({border: 'none'});
    $('#Research-button').css({border: 'none'});
    //standard settings
    $('#enactus').css({"border-color": "black"});
    $('#enactus').css({"border-width": "1px"});
    $('#actnet').css({"border-color": "black"});
    $('#actnet').css({"border-width": "1px"});
    $('#magazine').css({"border-color": "black"});
    $('#magazine').css({"border-width": "1px"});
    $('#hci-research').css({"border-color": "black"});
    $('#hci-research').css({"border-width": "1px"});
    $('#cisco').css({"border-color": "black"});
    $('#cisco').css({"border-width": "1px"});
    $('#ooyala').css({"border-color": "black"});
    $('#ooyala').css({"border-width": "1px"});
    $('#IxDS-control-redesign').css({"border-color": "black"});
    $('#IxDS-control-redesign').css({"border-width": "1px"});
    $('#fbi-redesign').css({"border-color": "black"});
    $('#fbi-redesign').css({"border-width": "1px"});
    $('#termproject').css({"border-color": "black"});
    $('#termproject').css({"border-width": "1px"});
    $('#dashboardDesign').css({"border-color": "black"});
    $('#dashboardDesign').css({"border-width": "1px"});
    $('#foodle').css({"border-color": "black"});
    $('#foodle').css({"border-width": "1px"});
    $('#DesigningForFocus').css({"border-color": "black"});
    $('#DesigningForFocus').css({"border-width": "1px"});
    $('#LeakDetector').css({"border-color": "black"});
    $('#LeakDetector').css({"border-width": "1px"});

    //bring all elements back
    $('#enactus').css({display: "inline-block"});
    $('#actnet').css({display: "inline-block"});
    $('#magazine').css({display: "inline-block"});
    $('#hci-research').css({display: "inline-block"});
    $('#cisco').css({display: "inline-block"});
    $('#ooyala').css({display: "inline-block"});
    $('#IxDS-control-redesign').css({display: "inline-block"});
    $('#fbi-redesign').css({display: "inline-block"});
    $('#termproject').css({display: "inline-block"});
    $('#dashboardDesign').css({display: "inline-block"});
    $('#foodle').css({display: "inline-block"});
    $('#DesigningForFocus').css({display: "inline-block"});
    $('#LeakDetector').css({display: "inline-block"});
}

$("#All-button").click(function() {
    clearAll();
    $("#All-button").css({"border-bottom": "3px solid #f99926"});
});

$("#Development-button").click(function() {    
    clearAll()
    //orange border for button
    $("#Development-button").css({"border-bottom": "3px solid #f99926"});
    //make irrelevant ones disappear
    $('#magazine').css({display: "none"});
    $('#hci-research').css({display: "none"});
    $('#ooyala').css({display: "none"});
    $('#IxDS-control-redesign').css({display: "none"});
    $('#fbi-redesign').css({display: "none"});
    $('#dashboardDesign').css({display: "none"});
    $('#LeakDetector').css({display: "none"});
    $('#DesigningForFocus').css({display: "none"});
});

$("#Design-button").click(function() {   
    clearAll();
    //orange border for button
    $("#Design-button").css({"border-bottom": "3px solid #f99926"});
    //make irrelevant ones disappear
    $('#enactus').css({display: "none"});
    $('#actnet').css({display: "none"});
    $('#cisco').css({display: "none"});
    $('#ooyala').css({display: "none"});
    $('#termproject').css({display: "none"});

});

