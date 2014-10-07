function Racer(speed, strength) {
  this.speed = speed;
  this.strength = strength;
  this.position = 0;
  this.hasStrength = function() {
    return Math.floor(Math.random() * 10) < this.strength;
  }

  this.advance = function() {
    if (this.hasStrength()) {
      this.position += this.speed;
    }
  }
}

var distance = 50;

//up through here we are only declaring things, below we actually take action on them

var girl = new Racer (7, 6);
var boy = new Racer (6, 7);


$(document).ready(function(){
  $("#red").hide();
  $("#yellow").hide();
  $("#green").hide()
  $("#nameOne").blur(function(){
    var firstName = $(this).val();
    $("#mudder1").text(firstName);
  })
  .blur();

  $("#nameTwo").blur(function(){
    var secondName = $(this).val();
    $("#mudder2").text(secondName);
  })
  .blur();

  $("#clickMe").click(function(){
    $("html").addClass("raceTime");
    $(".slide").slideUp("slow", function(){});
    $("#red").delay(400).fadeIn(600);
    $("#yellow").delay(1000).fadeIn(600);
    $("#green").delay(1600).fadeIn(600);
    var boyStatus = boy.position;
    var girlStatus = girl.position;
    $("#racer1").delay(2200).queue(function(next){
      $(this).css("margin-left", boyStatus * 15 + "px");
      next();
    });

    while (girl.position < distance && boy.position < distance) {
      boy.advance();
      girl.advance();

      if ((girl.position && boy.position) < distance) {
        $("#racer1").delay(2000).queue(function(next){
          $(this).css("margin-left", girlStatus * 15 + "px");
          next();
        });
        $("#racer2").delay(2000).queue(function(next){
          $(this).css("margin-left", boyStatus * 15 + "px");
          next();
        });
        
      } else {

        if (girl.position > boy.position) {
          alert("Contestant 1 finishes first, she takes gold and is the toughest mudder of all!");
        
        } else {
          alert("Contestant 2 wins this round, he's crowned King Mudder!");
        }
      }
    };
  });
});

console.log("girl's position:");
console.log(girl.position);
console.log("boy's position:")
console.log(boy.position);