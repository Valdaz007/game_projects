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
let userName = '';
let gameResult = []; //{'correct':'', 'answer':''}
let currentQzChoice = null;
let strikes = 0; //Incorrect Counter


function shuffleCountry(array){
    //Function to Randomize an Array
    //Pass in an array as the parameter an it returns
    //a randomized array of the passing in array.

    for(let i = array.length-1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

function checkUsername(){
    //Function to Check Username Input
    //Check if username name is empty and return true or false

    return $('.uname').val()==''
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

$('#flagQz').click(function(e){ //Event Listener for Flag Quiz Game
    if(checkUsername()){
        alert('Please Enter Username to Continue!')
    }
    else {
        userName = $('.uname').val() //Assign Username Input to Username Variable
        gameCode = shuffleCountry(countryCodeOG);
        newGameFlagQz()
    }
})

function checkAnswer(){
    gameResult.at(-1).correct!=currentQzChoice && strikes++;
}

function onAnsSubmit(){
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
    choiceArr = shuffleCountry(choiceArr) //Randomize Multi Choice Array
    choiceArr.forEach((i, idx) => {
        $(`#ch${idx+1}`).attr('onclick', `setCurrentQzChoice('${Object.keys(i).join('')}', ${idx+1})`)
        $(`#chc${idx+1}`).text(`${i[Object.keys(i).join('')]}`) //Set Multi Choice DOM Elements
    });

    // console.log(gameCode)
    console.log(gameResult)
}

$('#shapeQz').click(function(e){ //Event Listener for Shape Quiz Game
    alert('Feature Still Under Developement!')
})

$('#mixQz').click(function(e){ //Event Listener for Mixed Quiz Game
    alert('Feature Still Under Developement!')
})