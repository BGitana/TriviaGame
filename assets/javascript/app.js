alert("Script Tags Work?");

$("#start").on("click",function(){
    $("#start").remove();
})

var questions = [{
    question : "How many legs does a Spider have?",
    answer :["six", "ten" , "four", "eight"],
}, {
    question : "How a spider eat?",
    answer :["Spiders like to graze on plants", "They bite and chew their pray" , "Spiders “suck” the juices from their pray", "Spiders enjoy the flower nectar"],
}, {
    question : "How do Spiders spin silk webs?",
    answer :["The silk is produced in silk glands with the help of the spider's spinnerets", "They bite and chew their pray" , "Spiders “suck” the juices from their pray", "Spiders enjoy the flower nectar"],
}
]