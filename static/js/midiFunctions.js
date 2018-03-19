
var easyExercises = ["../midi/dore.mid", "../midi/dorebemol.mid", "../midi/domi.mid", "../midi/domibemol.mid"];
var mediumExercises = ["../midi/dore.mid", "../midi/dorebemol.mid", "../midi/domi.mid", "../midi/domibemol.mid", "../midi/dola.mid", "../midi/dosi.mid", "../midi/solla.mid"];
var hardExercises = ["../midi/dore.mid", "../midi/dorebemol.mid", "../midi/domi.mid", "../midi/domibemol.mid", "../midi/dola.mid", "../midi/dosi.mid", "../midi/solla.mid", "../midi/dofa.mid", "../midi/dosol.mid", "../midi/fasol.mid"];
var troca = false;
var interval;
var secondinterval;
var numb = 0;

function change(){
  document.getElementById("play").value = "Próximo";
}
function playEasyMidi() {
  if(troca){
    var alerta = document.getElementById('alerta');
    alerta.className = "";
    document.getElementById('texto').innerHTML = "";
    troca = false;
  }
  var piano = Synth.createInstrument('piano');
  piano.play('C', 3, 2);
  setTimeout(function(){piano.play('D', 3, 2)}, 1000);
  piano.stopMidi();
}


function playMediumMidi() {
  if(troca){
    var alerta = document.getElementById('alerta');
    alerta.className = "";
    document.getElementById('texto').innerHTML = "";
    troca = false;
  }
  interval = Math.floor(Math.random() * 7);
  MIDIjs.play(mediumExercises[interval]);
}


function playHardMidi() {
  if(troca){
    var alerta = document.getElementById('alerta');
    alerta.className = "";
    document.getElementById('texto').innerHTML = "";
    troca = false;
  }
  interval = Math.floor(Math.random() * 10);
  MIDIjs.play(hardExercises[interval]);
}

function stopMidi(){
  MIDIjs.stop();
}
function repeatInterval(){
  var piano = Synth.createInstrument('piano');
  piano.play(note[interval], octave[interval], duration[interval]);
  setTimeout(function(){
    piano.play(note[secondinterval], octave[secondinterval], duration[secondinterval]);

  }, 2000);
}
function respMidi(numb){
  if(numb == 0){
    var alerta = document.getElementById('alerta');
    alerta.className = "alert alert-success";
    document.getElementById('texto').innerHTML = "Correto";
    troca = true;
  }else{
    var alerta = document.getElementById('alerta');
    alerta.className = "alert alert-danger";
    document.getElementById('texto').innerHTML = "Errado";
    troca = true;
  }
}
