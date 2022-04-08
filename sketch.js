var bg, hammerS, google, maggelan, pirate, math, pop, qm;
var quizMaster
var button1,button2,button3,button4;
var score = 0;
var q1, q2, q3, q4, q5, q6, q7, q8, q9, q10
var min = 3;
var time = min*60;
is_clicked = false
var q = 1;

var scoreText, timerText
function preload(){

  bg = loadImage("Assets/BGimage.jpg");

  maggelan = loadImage("Assets/Maggelan.jpg");
  pirate = loadImage("Assets/Math Image.jpg");
  math = loadImage("Assets/Pirate image.jpg");
  pop = loadImage("Assets/Population.jpg");
  qm = loadImage("Assets/quizmaster.png ");
  }


function setup() {
  createCanvas(windowWidth,windowHeight);

  quizMaster = createSprite(width-100,height-100,10,10);
  quizMaster.addImage(qm);
  quizMaster.scale = 0.8;

 // timer();
  
  scoreText = createElement("h2")
  scoreText.position(50,50);

  timerText = createElement("h2");
  timerText.position(width/2,50);

  //question1
question1();



}



function draw() {
  background(bg);  
  timer();

  scoreText.html(`Score=${score}`)
  timerText.html(`Timer = ${time}`)
  
  
  


  drawSprites();


}

function timer(){

  setInterval(updatecountdown,1000)
}

function updatecountdown(){

  var m = Math.floor(time/60)
  var sec = time%60

  sec = sec<10?'0'+sec :sec;

  console.log(time)
  if(time<=0){
    time=0
  }
  else{
    time = time -1
  }
timerText.html(`Timer = ${m}:${sec}`)
  
}


function rightAns1(){
  //console.log("I am here")
  button1.class("change");

  if(is_clicked == false){
    score+= 5
    is_clicked = true;
    }

  console.log(score)
  scoreText.html(`Score=${score}`);

  q1.hide();
  popup = createElement("h2")
  popup.position(width/2-250,height/2-75)
  popup.html("That's Correct,Let's go to next question")
  ok = createButton("OK");
  ok.position(width/2-75,height/2);
  ok.size(100,40)
  ok.class("ok");
  
  if(q == 4){
    ok.mouseClicked(question5);
}
if(q == 9){
  ok.mouseClicked(question10);
}
  

}
function rightAns2(){
  //console.log("I am here")
  button2.class("change");

  if(is_clicked == false){
    score+= 5
    is_clicked = true;
    }
 
  console.log(score)
  scoreText.html(`Score=${score}`)

  
  q1.hide();
  popup = createElement("h2")
  popup.position(width/2-250,height/2-75)
  popup.html("That's Correct,Let's go to next question")
  ok = createButton("OK");
  ok.position(width/2-75,height/2);
  ok.size(100,40)
  ok.class("ok")
  
  if(q == 2){
    ok.mouseClicked(question3);
}
if(q == 3){
  ok.mouseClicked(question4);
}

if(q == 6){
  ok.mouseClicked(question7);
}
if(q == 7){
  ok.mouseClicked(question8);
}
  

}
function rightAns3(){
  //console.log("I am here")
  button3.class("change");
  if(is_clicked == false){
  score+= 5
  is_clicked = true;
  }
  console.log(score)
  scoreText.html(`Score=${score}`)

  
  q1.hide();
  popup = createElement("h2")
  popup.position(width/2-250,height/2-75)
  popup.html("That's Correct,Let's go to next question")
  ok = createButton("OK");
  ok.position(width/2-75,height/2);
  ok.size(100,40);
  ok.class("ok");
  
  if(q==1){
    ok.mouseClicked(question2);
    }

  if(q == 8){
      ok.mouseClicked(question9);
    }
 
}

function rightAns4(){
  //console.log("I am here")
  button4.class("change");
  
  if(is_clicked == false){
    score+= 5
    is_clicked = true;
    }

  console.log(score)
  scoreText.html(`Score=${score}`)

  
  q1.hide();
  popup = createElement("h2")
  popup.position(width/2-250,height/2-75)
  popup.html("That's Correct,Let's go to next question")
  ok = createButton("OK");
  ok.position(width/2-75,height/2);
  ok.size(100,40)
  ok.class("ok");
  if(q == 5){
    ok.mouseClicked(question6);
}
  

}
function wrongAns1(){
  button1.class("wrong");
 
  scoreText.html(`Score=${score}`);

  if(score <= 0){
    score = 0
  }
  else{
    score-= 5
  }
  //question2();
   }

function wrongAns2(){
  button2.class("wrong");
 
  scoreText.html(`Score=${score}`);

  if(score <= 0){
    score = 0
  }
  else{
    score-= 5
  }

}

function wrongAns3(){
  button3.class("wrong");
 
  scoreText.html(`Score=${score}`);

  if(score <= 0){
    score = 0
  }
  else{
    score-= 5
  }

}

function wrongAns4(){
  button4.class("wrong");

  scoreText.html(`Score=${score}`);

  if(score <= 0){
    score = 0
  }
  else{
    score-= 5
  }

}

function question1(){
  //question
  q1 = createElement("h2");
  q1.position(width/2-300,height/2-75);
  q1.class("textColor")
  q1.html("Question 1 - Who is the current CEO of google?")

  //image
  q1Img = createImg("Assets/Google image.jpg");
  q1Img.position(width-350,30);
  q1Img.size(300,150);

  //options
  button1 = createButton("Bill Gates")
  button1.position(50,height-160);
  button1.size(250,150);
  button1.class("buttonStyle");
  button1.mouseClicked(wrongAns1);


  button2 = createButton("Tim cook")
  button2.position(350,height-160);
  button2.size(250,150);
  button2.class("buttonStyle");
  button2.mouseClicked(wrongAns2);

  button3 = createButton("Sundar Pichai")
  button3.position(650,height-160);
  button3.size(250,150);
  button3.class("buttonStyle");
  button3.mouseClicked(rightAns3);

  button4 = createButton("Elon Musk")
  button4.position(950,height-160);
  button4.size(250,150);
  button4.class("buttonStyle");
  button4.mouseClicked(wrongAns4);



}

function question2(){
  q = 2;
  is_clicked = false;
  ok.hide();
  popup.hide();
  q1Img.hide();
  q1.position(width/2-670,height/2-75);
  q1.html("Question 2 -The hammer and sickle is one of the most recognisable symbols of which political ideology?")

  //image
  q2Img = createImg("Assets/download.png");
  q2Img.position(width-350,30);
  q2Img.size(300,150);

  //options
  button1 = createButton("Individualist anarchism")
  button1.position(50,height-160);
  button1.size(250,150);
  button1.class("buttonStyle");
  button1.mouseClicked(wrongAns1);


  button2 = createButton("Communism")
  button2.position(350,height-160);
  button2.size(250,150);
  button2.class("buttonStyle");
  button2.mouseClicked(rightAns2);

  button3 = createButton("Capitalism")
  button3.position(650,height-160);
  button3.size(250,150);
  button3.class("buttonStyle");
  button3.mouseClicked(wrongAns3);

  button4 = createButton("Individualism")
  button4.position(950,height-160);
  button4.size(250,150);
  button4.class("buttonStyle");
  button4.mouseClicked(wrongAns4);

}
function question3(){
  q = 3;
  is_clicked = false;
  ok.hide();
  popup.hide();
  //question
  q1.hide();
  q1 = createElement("h2");
  q1.position(width/2-100,height/2-75);
  q1.class("textColor")
  q1.html("Question 3 - 9+1)/2*3 = ?")

  //image
  q1Img = createImg("Assets/Math Image.jpg");
  q1Img.position(width-350,30);
  q1Img.size(300,150);

  //options
  button1 = createButton("14")
  button1.position(50,height-160);
  button1.size(250,150);
  button1.class("buttonStyle");
  button1.mouseClicked(wrongAns1);


  button2 = createButton("15")
  button2.position(350,height-160);
  button2.size(250,150);
  button2.class("buttonStyle");
  button2.mouseClicked(rightAns2);

  button3 = createButton("16")
  button3.position(650,height-160);
  button3.size(250,150);
  button3.class("buttonStyle");
  button3.mouseClicked(wrongAns3);

  button4 = createButton("17")
  button4.position(950,height-160);
  button4.size(250,150);
  button4.class("buttonStyle");
  button4.mouseClicked(wrongAns4);



}
function question4(){
  q = 4;
  is_clicked = false;
  ok.hide();
  popup.hide();
  //question
  q1.hide();
  q1 = createElement("h2");
  q1.position(width/2-300,height/2-75);
  q1.class("textColor")
  q1.html("Question 4 - Ferdinand Magellan was the first man to? ")

  //image
  q1Img = createImg("Assets/Maggelan.jpg");
  q1Img.position(width-350,30);
  q1Img.size(300,150);

  //options
  button1 = createButton("Circumnavigate")
  button1.position(50,height-160);
  button1.size(250,150);
  button1.class("buttonStyle");
  button1.mouseClicked(rightAns1);


  button2 = createButton("Walk on the moon")
  button2.position(350,height-160);
  button2.size(250,150);
  button2.class("buttonStyle");
  button2.mouseClicked(wrongAns2);

  button3 = createButton("Orbit the earth")
  button3.position(650,height-160);
  button3.size(250,150);
  button3.class("buttonStyle");
  button3.mouseClicked(wrongAns3);

  button4 = createButton("Climb Mount Everest")
  button4.position(950,height-160);
  button4.size(250,150);
  button4.class("buttonStyle");
  button4.mouseClicked(wrongAns4);



}
function question5(){
  q = 5;
  is_clicked = false;
  ok.hide();
  popup.hide();
  //question
  q1.hide();
  q1 = createElement("h2");
  q1.position(width/2-600,height/2-75);
  q1.class("textColor")
  q1.html("Question 5 - In 1718, which pirate died in battle off the coast of what is now North Carolina?")

  //image
  q1Img = createImg("Assets/Pirate image.jpg");
  q1Img.position(width-350,30);
  q1Img.size(300,150);

  //options
  button1 = createButton("Francis Drake")
  button1.position(50,height-160);
  button1.size(250,150);
  button1.class("buttonStyle");
  button1.mouseClicked(wrongAns1);


  button2 = createButton("Samuel Bellamy")
  button2.position(350,height-160);
  button2.size(250,150);
  button2.class("buttonStyle");
  button2.mouseClicked(wrongAns2);

  button3 = createButton("Anne Bonny")
  button3.position(650,height-160);
  button3.size(250,150);
  button3.class("buttonStyle");
  button3.mouseClicked(wrongAns3);

  button4 = createButton("Blackbeard")
  button4.position(950,height-160);
  button4.size(250,150);
  button4.class("buttonStyle");
  button4.mouseClicked(rightAns4);



}
function question6(){
  q = 6;
  is_clicked = false;
  ok.hide();
  popup.hide();
  //question
  q1.hide();
  q1 = createElement("h2");
  q1.position(width/2-600,height/2-75);
  q1.class("textColor")
  q1.html("Question 6 - Which Disney character famously leaves a glass slipper behind at a royal ball?")

  //image
  q1Img = createImg("Assets/cinderrellaImage.jpg");
  q1Img.position(width-350,30);
  q1Img.size(300,150);

  //options
  button1 = createButton("Snow White")
  button1.position(50,height-160);
  button1.size(250,150);
  button1.class("buttonStyle");
  button1.mouseClicked(wrongAns1);


  button2 = createButton("Cinderella")
  button2.position(350,height-160);
  button2.size(250,150);
  button2.class("buttonStyle");
  button2.mouseClicked(rightAns2);

  button3 = createButton("Moana")
  button3.position(650,height-160);
  button3.size(250,150);
  button3.class("buttonStyle");
  button3.mouseClicked(wrongAns3);

  button4 = createButton("Mulan")
  button4.position(950,height-160);
  button4.size(250,150);
  button4.class("buttonStyle");
  button4.mouseClicked(wrongAns4);



}
function question7(){
  q = 7;
  is_clicked = false;
  ok.hide();
  popup.hide();
  //question
  q1.hide();
  q1 = createElement("h2");
  q1.position(width/2-500,height/2-75);
  q1.class("textColor")
  q1.html("Question 7 - what is the approximate number of people who have ever lived on earth?")

  //image
  q1Img = createImg("Assets/Population.jpg");
  q1Img.position(width-350,30);
  q1Img.size(300,150);

  //options
  button1 = createButton("80 billion")
  button1.position(50,height-160);
  button1.size(250,150);
  button1.class("buttonStyle");
  button1.mouseClicked(wrongAns1);


  button2 = createButton("100 billion")
  button2.position(350,height-160);
  button2.size(250,150);
  button2.class("buttonStyle");
  button2.mouseClicked(rightAns2);

  button3 = createButton("150 billion")
  button3.position(650,height-160);
  button3.size(250,150);
  button3.class("buttonStyle");
  button3.mouseClicked(wrongAns3);

  button4 = createButton("200 billion")
  button4.position(950,height-160);
  button4.size(250,150);
  button4.class("buttonStyle");
  button4.mouseClicked(wrongAns4);



}
function question8(){
  q = 8;
  is_clicked = false;
  ok.hide();
  popup.hide();
  //question
  q1.hide();
  q1 = createElement("h2");
  q1.position(width/2-300,height/2-75);
  q1.class("textColor")
  q1.html("Question 8 - What is the most used social media?")

  //image
  q1Img = createImg("Assets/socialmedia.jpg");
  q1Img.position(width-350,30);
  q1Img.size(300,150);

  //options
  button1 = createButton("Snapchat")
  button1.position(50,height-160);
  button1.size(250,150);
  button1.class("buttonStyle");
  button1.mouseClicked(wrongAns1);


  button2 = createButton("Instagram")
  button2.position(350,height-160);
  button2.size(250,150);
  button2.class("buttonStyle");
  button2.mouseClicked(wrongAns2);

  button3 = createButton("Facebook")
  button3.position(650,height-160);
  button3.size(250,150);
  button3.class("buttonStyle");
  button3.mouseClicked(rightAns3);

  button4 = createButton("Whatsapp")
  button4.position(950,height-160);
  button4.size(250,150);
  button4.class("buttonStyle");
  button4.mouseClicked(wrongAns4);



}
function question9(){
  q = 9;
  is_clicked = false;
  ok.hide();
  popup.hide();
  //question
  q1.hide();
  q1 = createElement("h2");
  q1.position(width/2-300,height/2-75);
  q1.class("textColor")
  q1.html("Question 9 - Who was the first woman to win a Nobel Prize")

  //image
  q1Img = createImg("Assets/Nobel_Prize.png");
  q1Img.position(width-350,30);
  q1Img.size(300,150);

  //options
  button1 = createButton("Marie Curie")
  button1.position(50,height-160);
  button1.size(250,150);
  button1.class("buttonStyle");
  button1.mouseClicked(rightAns1);


  button2 = createButton("Alice Ball")
  button2.position(350,height-160);
  button2.size(250,150);
  button2.class("buttonStyle");
  button2.mouseClicked(wrongAns2);

  button3 = createButton("Ann Bishop")
  button3.position(650,height-160);
  button3.size(250,150);
  button3.class("buttonStyle");
  button3.mouseClicked(wrongAns3);

  button4 = createButton("Sandra Wolin")
  button4.position(950,height-160);
  button4.size(250,150);
  button4.class("buttonStyle");
  button4.mouseClicked(wrongAns4);



}
function question10(){
  is_clicked = false;
  ok.hide();
  popup.hide();
  //question
  q1.hide();
  q1 = createElement("h2");
  q1.position(width/2-300,height/2-75);
  q1.class("textColor")
  q1.html("Question 10 - What was the first soft drink in space?")

  //image
  q1Img = createImg("Assets/softdrink.jpg");
  q1Img.position(width-350,30);
  q1Img.size(300,150);

  //options
  button1 = createButton("Fanta")
  button1.position(50,height-160);
  button1.size(250,150);
  button1.class("buttonStyle");
  button1.mouseClicked(wrongAns1);


  button2 = createButton("Dr. Pepper")
  button2.position(350,height-160);
  button2.size(250,150);
  button2.class("buttonStyle");
  button2.mouseClicked(wrongAns2);

  button3 = createButton("Coca-Cola")
  button3.position(650,height-160);
  button3.size(250,150);
  button3.class("buttonStyle");
  button3.mouseClicked();

  button4 = createButton("Sprite")
  button4.position(950,height-160);
  button4.size(250,150);
  button4.class("buttonStyle");
  button4.mouseClicked(wrongAns4);



}



