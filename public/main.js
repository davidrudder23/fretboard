var slideSpeed = 300;
	var noteToShow = "All";
	var canClick = true;
	
	var notes = {
		e: ['E','F','F#','G','G#','A','A#','B','C','C#','D','D#','E'],
		a: ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#',"A"],
		d: ['D','D#','E','F','F#','G','G#','A','A#','B','C','C#','D'],
		g: ['G','G#','A','A#','B','C','C#','D','D#','E','F','F#','G'],
		b: ['B','C','C#','D','D#','E','F','F#','G','G#','A','A#','B']
	}

	for (var i=0; i < notes.e.length; i++){
		$('.mask.low-e ul').append('<li note='+notes.e[i]+'>'+notes.e[i]+'</li>')
		$('.mask.a ul').append('<li note='+notes.a[i]+'>'+notes.a[i]+'</li>')
		$('.mask.d ul').append('<li note='+notes.d[i]+'>'+notes.d[i]+'</li>')
		$('.mask.g ul').append('<li note='+notes.g[i]+'>'+notes.g[i]+'</li>')
		$('.mask.b ul').append('<li note='+notes.b[i]+'>'+notes.b[i]+'</li>')
		$('.mask.high-e ul').append('<li note='+notes.e[i]+'>'+notes.e[i]+'</li>')
        }

        for (var i=0; i < notes.e.length; i++){
                $('[note='+notes.e[i]+']').css("background", "#444444")
	}


function showNotes() {
  var allNotes = ['E','F','F#','G','G#','A','A#','B','C','C#','D','D#','E']
  var notesToShow = $('#notesToShow').val().toUpperCase().split(/(?=[A-Za-z])/);

  for (var i=0; i < allNotes.length; i++){
    $('[note='+allNotes[i]+']').css("background", "#444444")
  }

  notesToShow.forEach(n=>$('[note='+n+']').css("background", "#fa990f"))

}
