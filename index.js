
//anonymous function
//lol
// for(let i = 0; i< document.querySelectorAll(".drum").length; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",function(){alert()});
// }
for(let i = 0; i< document.querySelectorAll(".drum").length; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        makeSound(this.textContent);
        buttonAnimation(this.textContent);
    });
}
document.addEventListener("keypress",function(event){
    console.log(event.key);
    makeSound(event.key)
    buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case "w":
            audio = new Audio("./sounds/crash.mp3");
            this.innerHtml = audio.play();
            break;
        case "a":
            audio = new Audio("./sounds/kick-bass.mp3");
            this.innerHtml = audio.play();
            break;
        case "s":
            audio = new Audio("./sounds/snare.mp3");
            this.innerHtml = audio.play();
            break;
        case "d":
            audio = new Audio("./sounds/tom-1.mp3");
            this.innerHtml = audio.play();
            break;
        case "j":
            audio = new Audio("./sounds/tom-2.mp3");
            this.innerHtml = audio.play();
            break;
        case "k":
            audio = new Audio("./sounds/tom-3.mp3");
            this.innerHtml = audio.play();
            break;
        case "l":
            audio = new Audio("./sounds/tom-4.mp3");
            this.innerHtml = audio.play();
            break;
        default:
            break;

    }
}

function buttonAnimation(key){
    let buttonPressed = document.querySelector(`.${key}`);
    buttonPressed.classList.add("pressed");
    setTimeout(function(){
        buttonPressed.classList.remove("pressed");
    },300);
}

