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

customElements.define('temp-index', TempIndex)