alert("Script Tags Work?");

$("#start").on("click",function(){
    $("#start").remove();
    // ////// above code is working////////////
    game.loadQuestion();
})

var questions = [{
    question : "How many legs does a Spider have?",
    answers :["six", "ten" , "four", "eight"],
}, {
    question : "How does Spider eat?",
    answers :["Spiders like to graze on plants", "They bite and chew their pray" , "Spiders “suck” the juices from their pray", "Spiders enjoy the flower nectar"],
}, {
    question : "How do Spiders spin silk webs?",
    answers :["The silk is produced in silk glands with the help of the Spider's spinnerets", "Silk is a form of saliva made by several glands in the mouth area" , "Spiders spin little hairs to make their webs", "Spiders find the silk in China"],
}, {
    question : "Which one is not a Spider Species?",
    answers :["Wolf Spider", "Jumping Spider" , "Duck spider", "Tarantula"],
}, {
    question : "What animal class do Spiders belong to?",
    answers :["Amphibians", "Mammals" , "Arthropods", "Reptiles"],
}, {
    question : "Which continent of the world Spiders are not found?",
    answers :["Asia", "Africa" , "North America", "Antarctica"],
}, {
    question : "What color is Spider's blood?",
    answers :["Red", "Blue", "Yellow", "Black"],
} 
];


var game = { 
    questions: questions,
    currentQuestion: 0,
    counter : 30,
    correct : 0,
    incorrect : 0,
    countdown: function() {
        game.counter--;
        // posting counted /lowered counter to the page
        $("#counter").html(game.counter);
        if(game.counter <= 0){
            console.log("TIME UP!");
            game.timeUp();
        }
        
    },
    loadQuestion: function(){
        // this function will run every 1 second and will be lowering the counter
        timer = setInterval(game.countdown,1000)
        
    },
    nextQuestion: function(){
        // post a question to the page
        $("#subwrapper").html("<h2>"+ question[game.currentQuestion].question +"</h2>");
// post all answers to the page
        for( i = 0; i < questions[game.currentQuestion].answers.length; i++){
            $("#subwrapper").append('<button class="answer-button" id="button-'+i+'" data-name="'+questions[game.currentQuestion].answers[i]+'">'questions[game.currentQuestion].answers[i]+' </button>');
        }

    },
    timeUp: function(){

    },
    results: function(){

    },
    clicked: function(){

    },
    answeredCorrectly: function(){

    },
    answeredIncorrectly: function(){

    },
    reset: function(){

    }

};