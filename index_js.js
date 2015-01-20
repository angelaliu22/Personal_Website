// ( function( $ ) {
//     // Init Skrollr
//     var s = skrollr.init({
//         render: function(data) {
//             //Debugging - Log the current scroll position.
//             //console.log(data.curTop);
//         }
//     });
// } )( jQuery );

/*What these lines do is terminate any previous, dangling JavaScript statement 
(with the first semi-colon), create an anonymous function (with the function keyword), 
and then immediately call it (with the () towards the end). This ensures that we 
have our own execution context for all the code that we write. You’re almost always 
going to want to follow this convention when writing JavaScript files.*/

/*
;(function() {
	function highlightAll() {
		document.getElementById('All-button').style.backgroundColor='none';
		document.getElementById('Development-button').style.backgroundColor='none';
		document.getElementById('Design-button').style.backgroundColor='none';
		document.getElementById('Research-button').style.backgroundColor='none';
		document.getElementById('All-button').style.backgroundColor='#f99926';
	}

	function highlightDevelopment() {
		document.getElementById('Development-button').style.border='none';
		document.getElementById('Design-button').style.border='none';
		document.getElementById('Research-button').style.border='none';
		document.getElementById('Development-button').style.backgroundColor='#f99926';
		document.getElementById('enactus').style.borderColor="#f99926";
		document.getElementById('enactus').style.borderWidth="5px";
		document.getElementById('actnet').style.borderColor="#f99926";
		document.getElementById('actnet').style.borderWidth="5px";
	}

	$(document).ready(function() {
		$("#All-button").click(highlightAll);
		$("#Development-button").click(highlightDevelopment);
		$("#Design-button").click(highlightDesign);
		$("#Reserach-button").click(highlightResearch);

	});
})();
*/