var character = document.getElementById("character");
var block = document.getElementById("block");
function jump(){
    if(character.classList!="animate"){
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },900);
}

var checkDead = setInterval(() => {
    var characterTop = parseInt(window.getComputedStyle(character).
    getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block)
    .getPropertyValue("left"));
    if(blockLeft<30 && blockLeft>0 && characterTop>=130){
        block.style.animation ="none";
        block.style.display ="none";
        character.style.animation ="none";
        character.style.display="none";
        alert("u lose");
    }
}, 10);
