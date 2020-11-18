class Form{
    constructor(){
        
        this.input=createInput("Enter Username")
        this.button=createButton("Go")
        this.greeting=createElement("h4")
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        var title=createElement("h2")
        title.html("Car Racing Game")
        title.position(displayWidth/2-50,0);

        
        this.input.position(displayWidth/2-40,displayHeight/2-80);
        this.button.position(displayWidth/2+30,displayHeight/2);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            var name=this.input.value();
            playerCount=playerCount+1
            player.update(name)
            player.updateCount(playerCount)
            this.greeting.html("Hello "+name)
            this.greeting.position(displayWidth/2-70,displayHeight/4);

        })
    }
}