//////////////////////////
//Back-End
//////////////////////////
var css = 0;
var php = 0;
var java = 0;


//////////////////////////
//Front-End
//////////////////////////
$(function() {

  $("#question2").hide();
  $("#question3").hide();
  $("#question4").hide();
  $("#question5").hide();
  $("#results").hide();



  $("#question1").submit(function() {
    event.preventDefault();
    var answer1 = $("input:radio[class=answer1]:checked").val();

    if (answer1 === "front") {
      css += 1;
      $("#question1").hide();
      $("#question2").show();
    } else {
      php += 1;
      java += 1;
      $("#question1").hide();
      $("#question2").show();
    }
  });

  $("#question2").submit(function() {
    event.preventDefault();
    var answer2 = $("input:radio[class=answer2]:checked").val();

    if (answer2 === "pc") {
      php += 1;
      css += 1;
      $("#question2").hide();
      $("#question3").show();
    } else if (answer2 === "js") {
      java += 1;
      $("#question2").hide();
      $("#question3").show();
    } else {
      java += 1;
      php += 1;
      $("#question2").hide();
      $("#question3").show();
    }
  });

  $("#question3").submit(function() {
    event.preventDefault();
    var answer3 = $("input:radio[class=answer3]:checked").val();

    if (answer3 === "lots") {
      java += 1;
      $("#question3").hide();
      $("#question4").show();
    } else if (answer3 === "some") {
      php +=1;
      $("#question3").hide();
      $("#question4").show();
    } else {
      css += 1;
      $("#question3").hide();
      $("#question4").show();
    }
  });
  $("#question4").submit(function() {
    event.preventDefault();
    var answer4 = $("input:radio[class=answer4]:checked").val();

    if (answer4 === "group") {
      css += 1;
      $("#question4").hide();
      $("#question5").show();
    } else if (answer4 === "partner") {
      java +=1;
      $("#question4").hide();
      $("#question5").show();
    } else {
      php += 1;
      $("#question4").hide();
      $("#question5").show();
    }
  });
  $("#question5").submit(function() {
    event.preventDefault();
    var answer5 = $("input:radio[class=answer5]:checked").val();

    if (answer5 === "career") {
      css += 1;
      php += 1;
      $("#question5").hide();
      $("#results").show();
    } else {
      java += 1;
      php += 1;
      $("#question5").hide();
      $("#results").show();
    }
  });
  if ((php >= java) && (php >= css)) {
    $("#results").append("<p>You should take the Php course!</p>")
  } else if ((java >= php) && (java >= css)) {
    $("#results").append("<p>You should take the JavaScript course!</p>")
  } else {
    $("#results").append("<p>You should take the Css course!</p>")
  }
});
