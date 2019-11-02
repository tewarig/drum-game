var numberofdrumbuttons =  document.querySelectorAll(".drum").length;
for(var i = 0; i<numberofdrumbuttons ; i++)
{document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

function handleClick()
{
  //var audio= new Audio("sounds/tom-1.mp3");
//  audio.play();
//console.log(this.innerHTML);
//this.style.color = "white";
var inner = this.innerHTML ;
sound(inner);
ani(inner);
}
}

document.addEventListener("keypress",function(bla) {sound(bla.key);ani(bla.key);
});

function sound(key)
{
  switch(key){
  case "w":
  var audio= new Audio("tom-2.mp3");
   audio.play();

    break;
    case  "s":
    var audio= new Audio("tom-3.mp3");
     audio.play();

      break;
      case "a":
      var audio= new Audio("tom-4.mp3");
       audio.play();

        break;

        case  "d":
        var audio= new Audio("tom-1.mp3");
         audio.play();

          break;

          case  "j":
          var audio= new Audio("kick-bass.mp3");
           audio.play();

            break;
            case  "k":
            var audio= new Audio("crash.mp3");
             audio.play();

              break;
              case  "l":
              var audio= new Audio("snare.mp3");
               audio.play();

                break;
              }


}

function ani(key)
{
  var active = document.querySelector("." + key);
  active.classList.add("pressed");


}
setTimeout(function(){
  active.classList.remove("pressed");},100);
