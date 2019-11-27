alert("Script Tags Work?");

$("#start").on("click", function() {
  $("#start").remove();
  // ////// above code is working////////////
  game.loadQuestion();
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
  currentQuestion: 0,
  counter: 30,
  correct: 0,
  incorrect: 0,
  countdown: function() {
    game.counter--;
    // posting counted /lowered counter to the page - it will be posting each number as it goes down
    $("#counter").html(game.counter);
    // below is telling if it's run out or not
    if (game.counter <= 0) {
      console.log(" TIME UP! ");
      game.timeUp();
    }
  },
  loadQuestion: function() {
    // this function will run every 1 second and will be lowering the counter
    timer = setInterval(game.countdown, 1000);
    // post a question to the page
    $("#subwrapper").html(
      "<h2>" + question[game.currentQuestion].question + "</h2>"
    );
    // post all answers to the page as button
    for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
      $("#subwrapper").append(
        '<button class="answer-button" id="button-' +
          i +
          ' "data-name="' +
          questions[game.currentQuestion].answers[i] +
          '">' +
          questions[game.currentQuestion].answers[i] +
          "</button>"
      );
    }
  },
  nextQuestion: function() {},
  timeUp: function() {},
  results: function() {},
  clicked: function() {},
  answeredCorrectly: function() {},
  answeredIncorrectly: function() {},
  reset: function() {}
};
