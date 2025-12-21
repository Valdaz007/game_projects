let results = '[{"correct":"AO","answer":"AO"},{"correct":"CR","answer":"CR"},{"correct":"AW","answer":"AN"},{"correct":"BY","answer":"BY"},{"correct":"CH","answer":"CH"},{"correct":"AN","answer":"AN"},{"correct":"AD","answer":"AD"},{"correct":"AU","answer":"AU"},{"correct":"CN","answer":"CN"},{"correct":"AG","answer":"BM"},{"correct":"BE","answer":"BE"},{"correct":"AR","answer":"AR"},{"correct":"BM","answer":"BM"},{"correct":"CF","answer":"CF"},{"correct":"BJ","answer":"BJ"},{"correct":"CL","answer":"CL"},{"correct":"CZ","answer":"CV"}]';
results = JSON.parse(results);
let demoUname = 'Valdaz';

function setUname(){
    $('.uname').text(`${demoUname} Results: ${results.length-3}/${results.length}`);
}

function getCountryCodeName(codeC, codeA){
    countryCodeOG.forEach(i=>{
        if(Object.keys(i)[0]==codeC){
            console.log(i[`${codeC}`])
            $(`.cntryName-${codeC}`).text(`${i[`${codeC}`]}`)
        }
    })
    countryCodeOG.forEach(i=>{
        if(Object.keys(i)[0]==codeA){
            console.log(i[`${codeA}`])
            $(`.ansName-${codeA}`).text(`${i[`${codeA}`]}`)
        }
    })
}

function showResult(){
    results.forEach(el => {
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
    console.log(results)
    showResult()
}

showGameResults()