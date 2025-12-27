function setUname(){
    $('.uname').text(`${userName} Results: ${gameResult.length-3}/${gameResult.length}`)
}

function getCountryCodeName(codeC, codeA){
    countryCodeOG.forEach(i=>{
        if(Object.keys(i)[0]==codeC){
            $(`.cntryName-${codeC}`).text(`${i[`${codeC}`]}`)
        }
    })
    countryCodeOG.forEach(i=>{
        if(Object.keys(i)[0]==codeA){
            $(`.ansName-${codeA}`).text(`${i[`${codeA}`]}`)
        }
    })
}

function showResult(){
    gameResult.forEach(el=> {
        $('.mainresults').append(`
            <div class='result' id="rx-${el.correct}">
                <div class='correctRx'>
                    <img src='https://flagsapi.com/${el.correct}/flat/64.png'>
                    <h5 class='cntryName-${el.correct}'></h5>
                </div>
                <div class='answerRx'>
                    <h5>Answer:</h5>
                    <h5 class='ansName-${el.answer}'></h5>
                </div>
            </div>
        `);
        getCountryCodeName(el.correct, el.answer);
        if(el.correct==el.answer){
            $(`#rx-${el.correct}`).attr('class', 'result correctAns')
        }
        else {
            $(`#rx-${el.correct}`).attr('class', 'result wrongAns')
        }
    });
}

function showGameResults(){
    alert('Game Over!')
    $('body').empty()
    $('body').append('<temp-result></temp-result>')

    setUname()
    showResult()
}