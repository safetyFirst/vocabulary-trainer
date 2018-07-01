$( document ).ready(function() {


	$( "#speak" ).click(function() {
  		translateAndSpeak();
	});


	function translateAndSpeak(){

		var tl = "vi";
		var sl = "";
		var q = q = $("input#qtext").val();

		var translateApi = encodeURI("http://translate.google.com/translate_tts?tl=" + tl + "&q="+ q +"&client=tw-ob");
	    
	    $("#wav_src").attr("src", translateApi);
	    $("audio")[0].load();
	    $("audio")[0].play();

	}

});