canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
roverwidth = 100;
roverheight = 90;
roverX = 10;
roverY = 10;
marsimagesarray = ["mars1.jpg", "mars2.jpg", "mars3.jpg", "mars4.jpg"];
randomnumber = Math.floor(Math.random() * 4);
backgroundimage = marsimagesarray[randomnumber];
console.log("backgroundimage" + backgroundimage);
roverimage = "rover.png";

function add() {
    backgroundimageTag = new Image();
    backgroundimageTag.onload = UploadBackground;
    backgroundimageTag.src = backgroundimage;

    roverimageTag = new Image();
    roverimageTag.onload = uploadRover;
    roverimageTag.src = roverimage;
}

function UploadBackground() {
    ctx.drawImage(backgroundimageTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(roverimageTag, roverX, roverY, roverwidth, roverheight)
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e) {
    keypress = e.keyCode;
    console.log("keypress is " + keypress);
    if (keypress == 37) {
        console.log("left arrow key is pressed");
        left();
    } else if (keypress == 38) {
        console.log("up arrow key is pressed");
        up();

    } else if (keypress == 39) {
        console.log("right arrow key is pressed");
        right();

    } else if (keypress == 40) {
        console.log("down arrow key is pressed");
        down();

    }

}

function up() {
    if (roverY > 0) {
        roverY = roverY - 15;
        UploadBackground();
        uploadRover();
    }
}

function down() {
    if (roverY < 500) {
        roverY = roverY + 15;
        UploadBackground();
        uploadRover();
    }
}

function left() {
    if (roverX > 0) {
        roverX = roverX - 15;
        UploadBackground();
        uploadRover();
    }
}

function right() {
    if (roverX < 700) {
        roverX = roverX + 15;
        UploadBackground();
        uploadRover();
    }
}