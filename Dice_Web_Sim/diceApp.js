const one = "rotate3d(1, 0, 0, 180deg)"
const two = "rotate3d(1, 0, 0, 0deg)"
const three = "rotate3d(0, 1, 0, -90deg)"
const four = "rotate3d(0, 1, 0, 90deg)"
const five = "rotate3d(1, 0, 0, -90deg)"
const six = "rotate3d(1, 0, 0, 90deg)"

let startSide = one
let endSide = ""
let dice = document.getElementById('dice');
const btnRoll = document.getElementById('btnRoll');

function roll(){
    x = Math.floor(Math.random() * (6 - 1 + 1)) + 1
    rollAnimation(x)

    btnRoll.disabled = true

    setTimeout(()=>{
        btnRoll.disabled = false
    }, 3500)
}

function rollAnimation(ranNum){
    switch(ranNum){
        case 1: endSide = one; break;
        case 2: endSide = two; break;
        case 3: endSide = three; break;
        case 4: endSide = four; break;
        case 5: endSide = five; break;
        case 6: endSide = six; break;
    }

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