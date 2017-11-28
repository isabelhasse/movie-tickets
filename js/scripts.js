//business logic

function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

Ticket.prototype.price = function() {
  var price = 0;
  if (this.movie === "death-of-stalin" || this.movie === "sacred-deer") {
    price += 9;
  } else {
    price += 7;
  }
  if (this.time === "night") {
    price += 2;
  }
  if (this.age < 12 || this.age > 55) {
    price -= 3;
  }

  return price;
};

$(document).ready(function() {
  $("form#tickets").submit(function(event) {
    event.preventDefault();
    var inputtedMovie = $("input:radio[name=movie]:checked").val();
    var inputtedTime = $("input:radio[name=time]:checked").val();
    var inputtedAge = parseInt($("input#age").val());
    var ticket = new Ticket (inputtedMovie, inputtedTime, inputtedAge);
    $("#result").text("$" + ticket.price());
  });
});
