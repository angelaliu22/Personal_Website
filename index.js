$("#Experience-link").click(function() {
//    $('html, body').animate({ scrollTop: 500}, 500);
//    $("#Experience-link").css({"border-bottom": "3px solid #f99926"});
});

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

    //bring all elements back
    $('#enactus').css({display: "inline-block"});
    $('#actnet').css({display: "inline-block"});
    $('#magazine').css({display: "inline-block"});
    $('#hci-research').css({display: "inline-block"});
    $('#cisco').css({display: "inline-block"});
    $('#ooyala').css({display: "inline-block"});
    $('#IxDS-control-redesign').css({display: "inline-block"});
    $('#fbi-redesign').css({display: "inline-block"});
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

});

$("#Research-button").click(function() {    
    clearAll();
    //orange border for button
    $("#Research-button").css({"border-bottom": "3px solid #f99926"});
    //make irrelevant ones disappear
    $('#enactus').css({display: "none"});
    $('#actnet').css({display: "none"});
    $('#magazine').css({display: "none"});
    $('#ooyala').css({display: "none"});
    $('#cisco').css({display: "none"});
    $('#IxDS-control-redesign').css({display: "none"});
    $('#fbi-redesign').css({display: "none"});
});

