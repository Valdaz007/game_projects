class TempIndex extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
        <h1>WORLDMAPQuiz Game</h1>

        <div class="flags"></div>

        <div class="main">

            <div class="uinfo">
                <input class="uname" type="text" placeholder="Enter Username">
            </div>

            <div class="intro">
                <p>
                    Select which Category to Play?
                </p>
            </div>

            <div class="catgs">
                <div class="catg" id="flagQz">
                    <img src="./icon-flag.jpg" alt="">
                    <h5>Flag Quiz</h5>
                    <p>Guess the Flag of the Country</p>
                </div>
                <div class="catg" id="shapeQz">
                    <img src="./icon-shape.jpg" alt="">
                    <h5>Shape Quiz</h5>
                    <p>Guess the Border Shape of the Country</p>
                </div>
                <div class="catg" id="mixQz">
                    <img src="./icon-flag.jpg" alt="">
                    <h5>Mixed Quiz</h5>
                    <p>Mixed Quiz from both Flag & Shape</p>
                </div>
            </div>
            
            <div class="hiscore-wrap">
                <button class="hiscores">See Highscores</button>
            </div>
        </div>

        `
    }
}

class PlayTemp extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <h1>WORLDMAPQuiz Game</h1>
            <div class='info'>
                <h5>How far can you go guessing the Countries Flag?</h5>
                <h5>Game ends when guessed wrong or all flags are finished.</h5>   
            </div>
            <div class='mainplay'>
                <div class='playflag'></div>
                <div class='playChoices'>
                    <div class='choice'>
                        <p class='lbl'>A</p>
                        <p id='chc1'>Choice 1</p>
                    </div>
                    <div class='choice'>
                        <p class='lbl'>B</p>
                        <p id='chc2'>Choice 2</p>
                    </div>
                    <div class='choice'>
                        <p class='lbl'>C</p>
                        <p id='chc3'>Choice 3</p>
                    </div>
                    <div class='choice'>
                        <p class='lbl'>D</p>
                        <p id='chc4'>Choice 4</p>
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define('temp-index', TempIndex)
customElements.define('temp-play', PlayTemp)