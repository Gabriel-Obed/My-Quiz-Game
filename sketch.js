var canvas;
var gameState=0, contestantCount, database, quiz, question, contestant, allContestants, contestantCountRef;
function setup(){
  canvas = createCanvas(850,400);

  database = firebase.database();

  quiz = new Quiz();
  quiz.start();

}


function draw(){
  background("pink");
  if(contestantCount === 4){
    quiz.update(1);
    gameState = 1;
  }
  quiz.getState()
  if(gameState===1){
    quiz.play();
  }    
}
