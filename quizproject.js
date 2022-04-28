/*
Barrel of Crude Oil - $104.27

GIGABYTE Gaming GeForce RTX 3090 Ti 24GB GDDR6X PCI Express 4.0 ATX Video Card GV-N309TGAMING OC-24GD MSRP - $1,999

T-80 Russian Main Battle Tank ~ $3,000,000

Liver Transplant - $121 732

276 Kg Tuna sold at the start of 2020 - $3,896,002

Mitsubishi Electric bread oven TO-ST1-T - $322.59

High quality Concrete Sand - 30$ per Ton

Gerald R Ford Class Aircraft Carrier - US$12.998b

C5X Piano - $63,899

PSA 10 1st Edition Charizard - $314,772.26
*/


let currentQuestion = 0;
let score = 0;
let hints = 0;
let maxHints = 3; // max hints
let rearm = 0; // to fix the timer from bugging
let hintNumber = -1;

let hint = [
	"An oil barrel holds 158.987 liters",
	"This price is at MSRP, meaning the price it should be solid at",
	"The tank was originally designed during the cold war but has found recent upgrades",
	"Livers are as expensive as you would think they are",
	"They have a tradition of raising the price of the first fish sold for the year for good luck",
	"Given that this is a Toaster made by a car company and its Japanese, it has to be expensive",
	"This is beach sand",
	"The manufactering price is less than you think",
	"The strange pricing should give it away",
	"PSA 10 is the highest quality card out there, without any nicks or scratches",
]

let questions = [

   {
	"question": "A Barrel of Crude Oil?",
	"a": "$201.65",
	"b": "$104.27",
	"c": "$123.05",
	"d": "$73.20",
	"image":"quizimages/q1.jpg",
	"hint": "A Barrel of dinosaur juice. Needs to be refined before it can be used",
	"answer": "b"
   },
   {
	"question": "GIGABYTE Gaming GeForce RTX 3090 Ti at MSRP",
	"a": "$2,999",
	"b": "$1400",
	"c": "$1,999",
	"d": "$1599.99",
	"image":"quizimages/q2.jpg",
	"hint": "The latest graphics card in the market, just released in March",
	"answer": "c"
   },
   {
	"question": "T-80 Russian Main Battle Tank",
	"a": "$3,000,000",
	"b": "$1,500,000",
	"c": "$4,500,000",
	"d": "$2,000,000",
	"image":"quizimages/q3.jpg",
	"hint": "Standard Russian tank invented during the time of the Soviet Union that has found use in Ukraine",
	"answer": "a"
   },
   {
	"question": "Liver Transplant",
	"a": "$50,021",
	"b": "$201,564",
	"c": "$121,732",
	"d": "$75,604",
	"image":"quizimages/q4.jpg",
	"hint": "Liver transplant in Canada. Costs may vary depending on condition",
	"answer": "c"
   },
   {
	"question": "276 Kg Tuna sold at the start of 2020",
	"a": "$2,032,451",
	"b": "$152,002",
	"c": "$4,000,000",
	"d": "$3,896,002",
	"image":"quizimages/q5.jpg",
	"hint": "Big Tuna sold in Japan. They have a tradition of raising the price of the first fish sold for the year for good luck",
	"answer": "d"
   },
   {
	"question": "Mitsubishi Electric bread oven TO-ST1-T",
	"a": "$401.23",
	"b": "$322.59",
	"c": "$89.99",
	"d": "$531.42",
	"image":"quizimages/q6.jpg",
	"hint": "A machine that will create one perfect piece of toast at a time",
	"answer": "b"
   },
   {
	"question": "High quality Concrete Sand - per Ton",
	"a": "$20",
	"b": "$25",
	"c": "$30",
	"d": "$35",
	"image":"quizimages/q7.jpg",
	"hint": "Desert sand actually cant be used for concrete, as it is smooth and round. Only beach sand can be used as it contains sharp edges that help it stick together",
	"answer": "c"
   },
   {
	"question": "Gerald R Ford Class Aircraft Carrier Manufactoring Cost",
	"a": "$16,397,626,900",
	"b": "$20,432,532,532",
	"c": "$60,000,000,000",
	"d": "$41,050,421",
	"image":"quizimages/q8.jpg",
	"hint": "The largest and most expensive vessel out there.",
	"answer": "a"
   },
   {
	"question": "C5X Piano",
	"a": "$20,999",
	"b": "$52,003",
	"c": "$132,000",
	"d": "$63,899",
	"image":"quizimages/q9.jpg",
	"hint": "A nice and solid piano for all your musical needs", 
	"answer": "d"
   },
   {
	"question": "PSA 10 1st Edition Charizard",
	"a": "$223,402.70",
	"b": "$314,772.26",
	"c": "$20,000",
	"d": "$523,530.50",
	"image":"quizimages/q10.jpg",
	"hint": "The dream item for collectors and 9 year olds alike. Printed in 1999 for the TCG Booster Box",
	"answer": "b"
   },

 ];
 
 //timer
 // Update the count down every 1 second
function timer() {
	
	document.getElementById("moving").style.backgroundImage = "url('quizImages/jojo.png')";
	
	 var countDownDate = 200;
	 var width = 0;
	 
		 var x = setInterval(function() {
		if(countDownDate > 0){
		 document.getElementById("timer").style.backgroundColor = "red";
		 document.getElementById("a").style.backgroundColor = "black";
		 document.getElementById("b").style.backgroundColor = "black";
		 document.getElementById("c").style.backgroundColor = "black";
		 document.getElementById("d").style.backgroundColor = "black";
		 document.getElementById("cover").style.display = "block";
		}
		
		countDownDate -= 1;
		
		if(rearm == 1){
			// console.log("case 3 rearm");
			rearm = "3"; // case 3 in which player gets wrong
			clearInterval(x);
		}
		
		 if (countDownDate <= -1200) {
			document.getElementById("demo").innerHTML = "EXPIRED";
			message = "Expired Time Limit";
			rearm = "2"; // case 2 in which player expires time
			// console.log("Expired Time Limit");
			document.getElementById("message").innerHTML = message;
			document.getElementById("lightbox").style.display = "block";
			
			clearInterval(x);

		  }else if (countDownDate > 0){
			document.getElementById("demo").innerHTML = countDownDate;  
			width = countDownDate/2 + "vw";
			document.getElementById("timer").style.width = width;
		  }else{
			  
			if(countDownDate == 0){
				document.getElementById("moving").style.backgroundImage = "url('quizImages/jojo2.png')";
				
				document.getElementById("a").style.backgroundColor = "#ccc";
				document.getElementById("b").style.backgroundColor = "#ccc";
				document.getElementById("c").style.backgroundColor = "#ccc";
				document.getElementById("d").style.backgroundColor = "#ccc";
				document.getElementById("timer").style.backgroundColor = "purple";
				
				document.getElementById("cover").style.display = "none";
				

			}//countDownDate
			
			document.getElementById("demo").innerHTML = countDownDate;  
			width = countDownDate/-12 + "vw";
			document.getElementById("timer").style.width = width;
		  }
		  
		}, 10);
	}

 //timer
 
 window.onload = function (){
	document.getElementById("hintButton").onclick = getHintF;
	document.getElementById("lightbox").style.display = "none";
 };

function start(){
loadQuestion(); 

let y = 1000;
var z
var x = setInterval(function() {
	y = y - 10;
	z = y/10;
	document.getElementById("start").style.width = (y / 10) + "vw";
	
	if(y < 0){
	document.getElementById("start").style.display = "none";
	
	clearInterval(x);	
	}
}, 10);

}

// show hint for curent question if any max not reached
let getHintF = function() {
	
	if (hintNumber == currentQuestion){
	// console.log("fung");
	}else{
	
	// console.log("this wroks");
		// if max hints not reached
		if (maxHints > 0){
		maxHints--;
		console.log(maxHints);
		// get hint for current question
			let currentHint = hint[currentQuestion];
		    document.getElementById("hint").innerHTML = currentHint;
		
		// show in page
		// incement hints shown
	}else{
	document.getElementById("hint").innerHTML = "Out of Hints";
	}
	hintNumber = currentQuestion;
	}
};
 function loadQuestion() {
     
    // close light box for first question
    if (currentQuestion == 0) {
       closeLightBox();
    }
     
    // load the image
    let img = document.getElementById("image");
    img.src = questions[currentQuestion].image;
	 
	
    img.style.maxWidth = "30vw";
	img.style.maxHeight = "80vh";
	
	
    // load the question and answers
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
    document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
    document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
    document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
    document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;
	
	let currentHint = questions[currentQuestion].hint;
	document.getElementById("text1").innerHTML = currentHint;
	
	if (currentQuestion == 6){
	document.getElementById("text1").style.fontSize = "2vw";
	}else if (currentQuestion == 2 || currentQuestion == 4){
	document.getElementById("text1").style.fontSize = "2.2vw";	
	}else{
	document.getElementById("text1").style.fontSize = "2.5vw";	
	}
	
	// load the timer
	timer();
	
	// reset the hint box
	document.getElementById("hint").innerHTML = "You have " + maxHints + " left.";
 } // loadQuestion
 
 
 function markIt(ans) {
     
    let message = "";
    
    if (ans == questions[currentQuestion].answer) {
        
       // add 1 to score
       score++;
       
       // display score 
       document.getElementById("score").innerHTML = score + " / " + questions.length;
       
       message = "Correct!!!! Your score is " + score + " / " + questions.length;
    } else {
       message = "Incorrect :< Your score is " + score + " / " + questions.length; 
    } // else
        
   
    
    // move to the next question
    currentQuestion++;
    if (currentQuestion >= questions.length) {
       // create a special message
	   
	   if(score < "1"){
		message = "Probabilistically, you should have gotten 2-3, not " + score;   
	   }
	   
	   else if(score > "1" && score < "4"){
		message = "You are a predicter for goods, scoring a good " + score;   
	   }
	   
	   else if(score > "3" && score < "7"){
		message = "Being above average when it comes to appraising prices, you got " + score;   
	   }
	   
	   else if(score > "6" && score < "10"){
		message = "You are an excellent appraiser of a selection of goods, getting " + score;   
	   }
	   
	   else{
		message = "Have you done this quiz before? because you got " + score;   
	   }
	   
       
	   
	   // add ability to restart quiz
	   message += "<div id='restart' onclick='restartQuiz()'>Restart Quiz</div>";
    } else {
	   
	   if (currentQuestion == 0) {
	   }else{
	   rearm++;
	   }
    }
    
    // show the lightbox
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("message").innerHTML = message;
  
 }  // markIt
 
 function restartQuiz(){
	location.reload(); 
 }// restartQuiz
 function closeLightBox() {
	// console.log("closeLightBox is working");
	// console.log(rearm);
    document.getElementById("lightbox").style.display = "none";
	if(rearm == "2"){
	forceNextQuestion();
	rearm = "0";
	}
	if(rearm == "3"){
	// console.log("rearm 3 is working");
	loadQuestion();	
	rearm = "0";
	}

 } // closeLightbox

function forceNextQuestion() {

	 // move to the next question
    currentQuestion++;
	if(rearm == 2){
		// console.log("this works");
    if (currentQuestion >= questions.length) {
		   // create a special message
		   message = "You are awesome or not ,or whatever, part of your mark is to give a good message based what the user's score is";
		   
		   // add ability to restart quiz
		   message += "<div id='restart' onclick='restartQuiz()'>Restart Quiz</div>";
		}else{
			loadQuestion();
		}
	}
}
 