alert("Script Tags Work?");

$("#start").on("click", function() {
  $("#start").remove();
  // ////// above code is working////////////
  game.loadQuestion();
});

// because this button tag does not exist on HTML page we need to grab a full document and not just class .answer-button' ALSO "(e)"= is used to store the EVENT...
$(document).on("click", ".answer-button", function(e) {
  game.clicked(e);
});

$(document).on("click", "#reset", function() {
  game.reset();
});

var questions = [
  {
    question: "How many legs does a Spider have?",
    answers: ["Six", "Ten", "Four", "Eight"],
    correctAnswer: "Eight",
    image: "assets/images/legs-palps_0.jpg"
  },
  {
    question: "How does Spider eat?",
    answers: [
      "Spiders like to graze on plants",
      "They bite and chew their pray",
      "Spiders “suck” the juices from their pray",
      "Spiders enjoy the flower nectar"
    ],
    correctAnswer: "Spiders “suck” the juices from their pray",
    image: "assets/images/Naphrys pulex jumping spider eating a fly.jpg"
  },
  {
    question: "How do Spiders spin silk webs?",
    answers: [
      "The silk is produced in silk glands with the help of the Spider's spinnerets",
      "Silk is a form of saliva made by several glands in the mouth area",
      "Spiders spin little hairs to make their webs",
      "Spiders find the silk in China"
    ],
    correctAnswer:
      "The silk is produced in silk glands with the help of the Spider's spinnerets",
    image: "assets/images/ms-0lXO5X.gif"
  },
  {
    question: "Which one is not a Spider Species?",
    answers: ["Wolf Spider", "Jumping Spider", "Duck spider", "Tarantula"],
    correctAnswer: "Duck spider",
    image: "assets/images/d4tq4f9-4ac7f48a-abab-4798-8917-b325a6af8e20.jpg"
  },
  {
    question: "What animal class do Spiders belong to?",
    answers: ["Amphibians", "Mammals", "Arachnids Arthropods", "Reptiles"],
    correctAnswer: "Arachnids Arthropods",
    image: "assets/images/ms-AaMvaY.gif"
  },
  {
    question: "Which continent of the world Spiders are not found?",
    answers: ["Asia", "Africa", "North America", "Antarctica"],
    correctAnswer: "Antarctica",
    image: "assets/images/09962786-2138-404d-b669-3004ed32ca7f.jpg"
  },
  {
    question: "What color is Spider's blood?",
    answers: ["Red", "Blue", "Yellow", "Black"],
    correctAnswer: "Blue",
    image: "assets/images/giphy.gif"
  }
];

var game = {
  questions: questions,
  //   keeps track of what questions currently posted on the page
  currentQuestion: 0,
  counter: 30,
  //   keeps track of number of correct answers
  correct: 0,
  //   keeps track of number of incorrect answers
  incorrect: 0,
  unanswered: 0,

  countdown: function() {
    game.counter--;
    // posting counted /lowered counter to the page - it will be posting each number as it goes down
    $("#counter").html(game.counter);
    // below is telling if it's run out time or not
    if (game.counter <= 0) {
      console.log(" TIME UP! ");
      game.timeUp();
    }
  },

  loadQuestion: function() {
    // this function will run every 1 second and will be lowering the counter
    timer = setInterval(game.countdown, 1000);

    $("#subwrapper").html(
      // '<h4 id="counter">30</h4>'
      // '<h4> <span id="counter">30</span>Seconds</h4>'
      '<h3> You have <span id="counter">30</span> seconds</h3>'
    );
    // post a question to the page
    $("#subwrapper").append(
      "<h2>" + questions[game.currentQuestion].question + "</h2>"
    );
    // post all answers to the page as button
    for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
      $("#subwrapper").append(
        '<button class="btn btn-secondary btn-lg btn-block grow answer-button" id="button-' +
          i +
          ' "data-name="' +
          questions[game.currentQuestion].answers[i] +
          '">' +
          questions[game.currentQuestion].answers[i] +
          "</button>"
      );
    }
  },

  nextQuestion: function() {
    //   this will set up the timer to  a new count
    game.counter = 30;
    //   this will print the new counter time on HTML
    $("#counter").html(game.counter);
    //   this will bring a new question from array - otherwise it will be looping through the same question over and over
    game.currentQuestion++;
    //   will load next question
    game.loadQuestion();
  },

  timeUp: function() {
    clearInterval(timer);
    game.unanswered++;
    $("#subwrapper").html("<h2>OUT OF TIME!!!</h2>");
    // $("#subwrapper").append(
    //   "<h3>The correct answer was: <br> " +
    //     questions[game.currentQuestion].correctAnswer +
    //     "</h3>"

    // );

    var imageLost = $("<img>")
      .attr("src", "assets/images/ms-8E0kwP.gif")
      .addClass("photo1");
    $("#subwrapper").append(imageLost);

    // will determine if this should take us the the next question or if we are on the last question - takes us to results screen
    if (game.currentQuestion == questions.length - 1) {
      setTimeout(game.results, 5 * 1000);
    } else {
      setTimeout(game.nextQuestion, 5 * 1000);
    }
  },

  results: function() {
    clearInterval(timer);
    $("#subwrapper").html("<h2>ALL DONE!!!</h2>");
    $("#subwrapper").append("<h3>Correct: " + game.correct + "</h3>");
    $("#subwrapper").append("<h3>Incorrect: " + game.incorrect + "</h3>");
    $("#subwrapper").append("<h3>Unanswered: " + game.unanswered + "</h3>");
    $("#subwrapper").append(
      '<button class="btn btn-secondary btn-lg btn-block grow" id="reset">RESET</button>'
    );
  },

  clicked: function(e) {
    //   below is clearing interval so timer STOPS RUNNING
    clearInterval(timer);
    // this is catching item/target that has been clicked
    if (
      $(e.target).data("name") == questions[game.currentQuestion].correctAnswer
    ) {
      game.answeredCorrectly();
    } else {
      game.answeredIncorrectly();
    }
  },

  answeredCorrectly: function() {
    console.log("YOU GOT THIS!!!");
    // stop timer from ticking
    clearInterval(timer);
    //add to correct score number
    game.correct++;
    //prints a massage
    $("#subwrapper").html("<h2>YOU GOT THIS!!!</h2>");

    var image = $("<img>")
      .attr("src", questions[game.currentQuestion].image)
      .addClass("photo");
    // image.attr("src", questions[game.currentQuestion].image)
    ////////////////////////////////////////////////////
    $("#subwrapper").append(image);

    //   /////////////////////////////////

    // will determine if this should take us the the next question or if we are on the last question - takes us to results screen
    if (game.currentQuestion == questions.length - 1) {
      setTimeout(game.results, 5 * 1000);
    } else {
      setTimeout(game.nextQuestion, 5 * 1000);
    }
  },

  answeredIncorrectly: function() {
    console.log("SORRY YOU ARE WRONG!!!");
    // stop timer from ticking
    clearInterval(timer);
    //add to correct score number
    game.incorrect++;
    //prints a massage
    $("#subwrapper").html("<h2>SORRY YOU GOT IT WRONG!!!</h2>");
    $("#subwrapper").append(
      "<h4>The correct answer was: <br>" +
        questions[game.currentQuestion].correctAnswer +
        "</h4>"
    );
    // will determine if this should take us the the next question or if we are on the last question - takes us to results screen
    if (game.currentQuestion == questions.length - 1) {
      setTimeout(game.results, 5 * 1000);
    } else {
      setTimeout(game.nextQuestion, 5 * 1000);
    }
  },

  reset: function() {
    (game.currentQuestion = 0),
      (game.counter = 30),
      (game.correct = 0),
      (game.incorrect = 0),
      (game.unanswered = 0),
      game.loadQuestion();
  }
};
