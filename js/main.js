class Player {
    constructor(){
        this.positionX = 50;
        this.positionY = 0;
        this.width = 20;
        this.height = 10;
        this.domElement = null;

        this.createDomElement();
    }
    createDomElement(){
        // create dom element
        this.domElement = document.createElement("div");

        // set id
        this.domElement.id = "player";
        this.domElement.style.width = this.width + "vw"
        this.domElement.style.height = this.height + "vh";
        this.domElementdomElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";

        //append to the dom
        const parentElm = document.getElementById("board");
        parentElm.appendChild(newDiv);
    }
    moveLeft(){
        this.positionX--;
        this.domElement.style.left = this.positionX + "vm";

        //console.log(`moving left... ${this.positionX} `);
    }
    moveRight(){
        this.positionX++;
        this.domElement.style.right = this.positionX +"vm";

        //console.log(`moving right... ${this.positionX} `);
    }
}

class Obstacle {
    constructor(){
        this.positionX = 50;
        this.positionY = 100;
        this.width = 20;
        this.height = 10;
        this.domElement = null;

        this.createDomElement();

    }
}
CreateDomElement() {
    // create dom element
    this.domElement = document.createElement("div");

    // set id
    this.domElement.className = "obstacle";
    this.domElement.style.width = this.width + "vw"
    this.domElement.style.height = this.height + "vh";
    this.domElementdomElement.style.left = this.positionX + "vw";
    this.domElement.style.bottom = this.positionY + "vh";

    //append to the dom
    const parentElm = document.getElementById("board");
    parentElm.appendChild(newDiv);
}
moveDown(){
   
    this.positionY -= 2;
    this.domElement.style.bottom = this.positionY + "vh";
}

const player = new Player();

const obstacles =[];

setInterval (() => {
    const newObstacle = newObstacle();
    obstaclesArr.push(newObstacle);
    console.log("we have created a new obstacle...",obstaclesArr.length)
}, 3000);



const obstacleOne = new Obstacle ();
setInterval(()=>){
    obstacleOne.moveDown();

obstaclesArr.forEach((obstacleInstance)=> {
obstaclesInstance.moveDown();
});

if (
    player.positionX < obstacleInstance.positionX + obstacleInstance.width &&
    player.positionX + player.width > obstacleInstance.positionX &&
    player.positionY < obstacleInstance.positionY + obstacleInstance.height &&
    player.positionY + player.height > obstacleInstance.positionY
) {
    // Collision detected!
    console.log("game over my fren! ");
    location.href = ""
},100);

});




obstacleOne.moveDown();
obstacleOne.moveDown();
obstacleOne.moveDown();




document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        player.moveLeft();
    } else if (event.key === "ArrowRight") {
        player.moveRight();
    }
});
