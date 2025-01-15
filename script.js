function getResults(answer){
  if(answer== "Ostrich"){
    location.replace("correct.html")
  }
  else if(answer== "Emu" || "Peregrine Falcon" || "Penguin" ){
    location.replace("wrong.html")
  }
}

function retry(){
//go to the page index.html
  location.replace("index.html");
}