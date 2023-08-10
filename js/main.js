class Player {
    constructor(){
        this.positionX = 0;
        this.positionY = 0;
        this.width = 50;
        this.height = 20;

        this.createDomElement();
    }
    createDomElement(){
        // create dom element
        const newDiv = document.createElement("div");

        // set id
        newDiv.id = "player";
        newDiv.style.width = this.width + "vw"
        newDiv.style.height = this.height + "vh";

        //append to the dom
        const parentElm = document.getElementById("board");
        parentElm.appendChild(newDiv);
    }
    moveLeft(){
        this.positionX--;
        console.log(`moving left... ${this.positionX} `);
    }
    moveRight(){
        this.positionX++;
        console.log(`moving right... ${this.positionX} `);
    }
}


const player = new Player();


document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        player.moveLeft();
    } else if (event.key === "ArrowRight") {
        player.moveRight();
    }
});
