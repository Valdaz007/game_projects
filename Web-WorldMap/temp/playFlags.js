let countryCodeOG = `[{"AD":"Andorra"},{"AE":"United Arab Emirates"},{"AF":"Afghnistan"},{"AG":"Antigua & Barbuda"},
                {"AI":"Anguilla"},{"AL":"Albanida"},{"AM":"Armenia"},{"AN":"Netherland Antilles"},{"AO":"Angola"},
                {"AQ":"Antarctica"},{"AR":"Argentina"},{"AS":"America Somoa"},{"AT":"Austria"},{"AU":"Australia"},
                {"AW":"Aruba"},{"AX":"Aland Islands"},{"AZ":"Azerbaijan"},{"BA": "Bosnia and Herzegovina"},
                {"BB": "Barbados"},{"BD": "Bangladesh"},{"BE": "Belgium"},{"BF": "Burkina Faso"},{"BG": "Bulgaria"},
                {"BH": "Bahrain"},{"BI": "Benin"},{"BJ": "Saint Barthelemy"},{"BM": "Bermuda"},{"BN": "Brunei Darussalam"},
                {"BO": "Bolivia"},{"BR": "Brazil"},{"BS": "Bahamas"},{"BT": "Bhutan"},{"BW": "Botswana"},{"BY": "Belarus"},
                {"BZ": "Belize"},{"CA": "Canada"},{"CC": "Cocos (Keeling) Islands"},
                {"CD": "Rebublic Democratic Republic of Congo"},{"CF": "Central African Republic"},{"CG": "Congo"},
                {"CH": "Switzerland"},{"CI": "Cote Dloire"},{"CK": "Cook Islands"},{"CL": "Chile"},{"CM": "Cameroon"},
                {"CN": "China"},{"CO": "Colombia"},{"CR": "Costa Rica"},{"CU": "Cuba"},{"CV": "Cape Verde"},{"CW": "Curacoa"},
                {"CX": "Christmas Island"},{"CY": "Cyprus"},{"CZ": "Czech Republic"}]`
countryCodeOG = JSON.parse(countryCodeOG);
let gameCode = [];
let gameResult = []; //{'correct':'', 'answer':''}
let currentQzChoice = null;
let strikes = 0; //Incorrect Counter

function newFlagGame(){ //Event Listener for Flag Quiz Game
    if(checkUsername()){
        alert('Please Enter Username to Continue!')
    }
    else {
        gameCode = shuffleArray(countryCodeOG.slice())
        newGameFlagQz()
    }
}

function newGameFlagQz(){
    //Function to Load New Flag Quiz

    $('body').empty()
    $('body').append('<temp-play></temp-play>')

    if(strikes>0){
        for(let i = 1; i<=strikes; i++){
            $(`#strike${i}`).prop('src', './img/icon-strike.png')
        }
    }

    $('.playflag').append(`
        <img src='https://flagsapi.com/${Object.keys(gameCode[0]).join('')}/flat/64.png'>
    `);

    let choiceArr = gameCode.slice(0, 4); //Slice the first four items of array to new array which are the four multiple choices
    gameResult.push({'correct':Object.keys(gameCode[0]).join('')}) //Push Correct Country to Result Array
    gameCode.shift(); //Remove Quized Country From Game Array
    choiceArr = shuffleArray(choiceArr) //Randomize Multi Choice Array
    choiceArr.forEach((i, idx) => {
        $(`#ch${idx+1}`).attr('onclick', `setCurrentQzChoice('${Object.keys(i).join('')}', ${idx+1})`)
        $(`#chc${idx+1}`).text(`${i[Object.keys(i).join('')]}`) //Set Multi Choice DOM Elements
    });
}

function setCurrentQzChoice(choice, idx){
    currentQzChoice = choice;

    for(let i=1; i<5; i++){
        $(`#ch${i}`).css('background-color', '#ccc')
        $(`#ch${i}`).hover(
            function(){ 
                $(this).css('background-color', '#fff') 
            },
            function(){
                $(this).css('background-color', '#ccc');
            }
        );
    }

    $(`#ch${idx}`).css('background-color', 'goldenrod')
    $(`#ch${idx}`).hover(
        function(){ $(this).css('background-color', 'goldenrod') },
        function(){ $(this).css('background-color', 'goldenrod') }
    );
}

function checkAnswer(){
    gameResult.at(-1).correct!=currentQzChoice && strikes++;
}

function onAnsSubmit(){
    //*** On Submit Answer Button

    if(currentQzChoice==null){
        alert('Please Select Answer!')
    }
    else {
        checkAnswer()
        gameResult.at(-1).answer = currentQzChoice;
        currentQzChoice = null;
        strikes < 3 ? newGameFlagQz() : showGameResults();
    }
}