class Quiz{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function (data){
            gameState = data.val();
        }
        );
    }
    update(state){
        database.ref('/').update({
            gameState: state
        })
    }
async start(){
    if(gameState===0){
        contestant = new Contestant();
        var contestantCountRef = await database.ref('concontestantCount').once("value")  
    }
    if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
    }
    question = new Question();
    question.display();
    }
    play(){
        question.hide();
        Contestant.getPlayerInfo();
        textSize(30);
        fill("black");
        text("RESULTS OF THE QUIZ", 250, 50);
        background("yellow");
        textSize(20)
        fill("black");
        text("*NOTE: The name of the contestants who answered correct are highlighted in green color!", 25, 270)
        if(allContestants != undefined){
            var displayPosition = 280;
            for(var plr in allContestants){
                if("2" === allContestants[plr].answer){
                    displayPosition += 30;
                    fill("green")
                    textSize(20);
                    text(allContestants[plr].name + ": " + allContestants[plr].answer, 325, displayPosition);
                }
                else{
                    displayPosition += 30;
                    fill("red")
                    textSize(20);
                    text(allContestants[plr].name + ": " + allContestants[plr].answer, 325, displayPosition);
            }    
        }       
        }
    }
}