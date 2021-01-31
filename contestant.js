class Contestant{
    constructor(){
        this.index = null;
        this.name = null;
        this.answer = null;
    }
    
    getCount(){
        var contestantCountRef = database.ref("concontestantCount");
        contestantCountRef.on("value", (data)=>{
            contestantCount = data.val();
        }
        );
    }

    updateCount(count){
        database.ref('/').update({
            concontestantCount: count
        });
    }

    update(){
        var contestantindex = "contestant/contestant"+this.index;
        database.ref(contestantindex).set({'name': this.name, 'answer':this.answer});
    }
    
    static getPlayerInfo(){
        var contestantInfoRef = database.ref('contestant');
        contestantInfoRef.on("value",(data)=>{
          allContestants = data.val();
        })
      }
}
