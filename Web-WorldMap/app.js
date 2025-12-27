let userName = '';

function mainApp(){
    //*** Load Index Template

    $('body').empty()
    $('body').append('<temp-index></temp-index>')

    gameCode = [];
    gameResult = [];
    currentQzChoice = null;
    strikes = 0;
    $('.uname').val(userName)
}

function shuffleArray(array){
    //Function to Randomize an Array
    //Pass in an array as the parameter and it returns
    //a randomized array.

    for(let i = array.length-1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

function checkUsername(){
    //Function to Check Username Input
    //Check if username name is empty and return true or false
    if($('.uname').val()==''){
        return true;
    }
    else {
        userName = $('.uname').val()
        return false;
    }
}

$('#shapeQz').click(function(e){ //Event Listener for Shape Quiz Game
    alert('Feature Still Under Developement!')
})

$('#mixQz').click(function(e){ //Event Listener for Mixed Quiz Game
    alert('Feature Still Under Developement!')
})