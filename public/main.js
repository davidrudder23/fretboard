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



function doChord() {
  var notesByKey = {};
  notesByKey["C"] = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  notesByKey["C#"] = ['C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C'];
  notesByKey["D"] = ['D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#'];
  notesByKey["D#"] = ['D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D'];
  notesByKey["E"] = ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#'];
  notesByKey["F"] = ['F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E'];
  notesByKey["F#"] = ['F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F'];
  notesByKey["G"] = ['G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#'];
  notesByKey["G#"] = ['G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G'];
  notesByKey["A"] = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
  notesByKey["A#"] = ['A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A'];
  notesByKey["B"] = ['B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'B'];
  var chord = $('#notesToShow').val().toUpperCase().split(/(?=[A-Za-z0-9])/);
  var mainNote = chord[0];
  var modifier = "";
  if (chord.length>1) {
    modifier = chord[1];
  }

  console.log("mainNote="+mainNote);

  var notesToShow = [];

  // add the 1st and 5th,
  notesToShow.push(mainNote);
  notesToShow.push(notesByKey[mainNote][7]);

  var index = 1;

  if (modifier == 'M') {
    notesToShow.push(notesByKey[mainNote][3]);
    index++;
  } else {
    notesToShow.push(notesByKey[mainNote][4]);
  }

  var augment = "";
  if  (chord.length>index) {
    augment = chord[index];
  }

  console.log("augment="+augment);

  switch (augment) {
    case '7':
        notesToShow.push(notesByKey[mainNote][10    ]);
        break;
    case '9':
        notesToShow.push(notesByKey[mainNote][2]);
        break;
  }
  console.log("notes="+notesToShow);
  showNotes(notesToShow);
}


function showNotes(notesToShow) {
  var allNotes = ['E','F','F#','G','G#','A','A#','B','C','C#','D','D#','E']

  for (var i=0; i < allNotes.length; i++){
    $('[note='+allNotes[i]+']').css("background", "#444444")
  }

  notesToShow.forEach(n=>$('[note='+n+']').css("background", "#fa990f"))

}
