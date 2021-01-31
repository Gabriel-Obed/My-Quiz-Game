class Question{
    constructor(){
        this.input = createInput('type your name');
        this.heading = createElement('h1');
        this.button = createButton('submit');
        this.question = createElement('h2');
        this.option1 = createElement('h3');
        this.option2 = createElement('h3');
        this.option3 = createElement('h3');
        this.option4 = createElement('h3');
        this.answer = createInput('type your answer');
    }
    hide(){
        this.button.hide();
        this.input.hide();
        this.answer.hide();
    }
    display(){
        this.heading.html("my quiz game")
        this.heading.position(350, 0);

        this.question.html("What starts and ends with the letter 'e' and ends with one letter ?");
        this.question.position(150, 80);

        this.option1.html("everyone");
        this.option1.position(150, 140);

        this.option2.html("envelope");
        this.option2.position(150, 160);

        this.option3.html("example");
        this.option3.position(150, 180);

        this.option4.html("estimate");
        this.option4.position(150, 200);

        this.input.position(250, 260);
        this.button.position(750, 260);
        this.answer.position(550, 260);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            this.answer.hide();
            contestant.name = this.input.value();
            contestant.answer = this.answer.value();
            contestantCount += 1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
        })
    }
}