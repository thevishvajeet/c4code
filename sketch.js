var srctxt;

var words;


function diastic(seed,words){
     var currentword = 0;
     var phrase = "";
     for (var i = 0 ; i < seed.length; i++)
     {
          
          var c = seed.charAt(i);
          for (var j = currentword; j < words.length; j++){
               
          
               if( words[j].charAt(i) == c){
                    
          
                    phrase += words[j];
                    phrase += " ";
                    currentword = j + 1;
                    break;
               }
          }
     }
    return phrase; 
}
function preload(){
     srctxt = loadStrings("rainbow.txt");
}

function setup() {
     noCanvas();
     srctxt = join(srctxt,'');
     words = splitTokens(srctxt,'./?, !');
     
     var seed = select('#seed');
     var submit = select('#submit');
     submit.mousePressed(function(){
          
          var phrase = diastic(seed.value(),words);
          createP(phrase);
     })
     
  
}

