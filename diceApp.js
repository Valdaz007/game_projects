const one = "rotate3d(1, 0, 0, 180deg)"
const two = "rotate3d(1, 0, 0, 0deg)"
const three = "rotate3d(0, 1, 0, -90deg)"
const four = "rotate3d(0, 1, 0, 90deg)"
const five = "rotate3d(1, 0, 0, -90deg)"
const six = "rotate3d(1, 0, 0, 90deg)"

let startSide = one
let endSide = ""
let dice = document.getElementById('dice');

function roll(){
    x = Math.floor(Math.random() * (6 - 1 + 1)) + 1
    rollAnimation(x)
}

function rollAnimation(ranNum){
    if(ranNum == 1) endSide = one
    if(ranNum == 2) endSide = two
    if(ranNum == 3) endSide = three
    if(ranNum == 4) endSide = four
    if(ranNum == 5) endSide = five
    if(ranNum == 6) endSide = six

    dice.animate(
        [
            { transform: startSide },
            { transform: "rotateX(720deg) rotateY(720deg)" },
            { transform: "rotateX(-540deg) rotateY(540deg)" },
            { transform: endSide }
        ],
        {
            duration: 3500,
            easing: "ease-in-out",
            fill: "forwards"
        }
    )

    startSide = endSide
}