//With help from the teacher, thank you! - Selecting and De-selecting of the different items

// To check if an item is active or not
var buttonClip = false;
var buttonBread = false;
var buttonLid = false;
var buttonKnife = false;

// Selecting the items
var clip = document.querySelector(".clip");
var bread = document.querySelector(".bread");
var lid = document.querySelector(".lid");
var knife = document.querySelector(".knife");

// To check if a screen(part) is active
var startScreenActive = true;
var normalScreenActive = false;
var timedScreenActive = false;
var randomScreenActive = false;
var infoScreenActive = false;
var winsScreenActive = false;
var playingfieldActive = false;
var backActive = false;

// Selecting the screen(parts)
var startScreen = document.querySelector('.startscreen');
var collected = document.querySelector('.collected');
var normalScreen = document.querySelector('.normalscreen');
var timedScreen = document.querySelector('.timedscreen');
var randomScreen = document.querySelector('.randomscreen');
var infoScreen = document.querySelector('.infoscreen');
var winScreen = document.querySelector('.won');
var playingfield = document.querySelector('.playingfield');
var statistics = document.querySelector('.statistics');

//The buttons on the different screens
var normal = document.querySelector("#normal");
var timed = document.querySelector("#timed");
var random = document.querySelector("#random");
var info = document.querySelector("#info");
var back = document.querySelector('.back');

//Second and moves counters
var seconds = 0;
var secondsCounterP = document.querySelector('#secondscounter');
var movesCounterP = document.querySelector("#movescounter");
var movesCounter = 0;

// Other variables
var goldenBreadCounter = 0;
var knifeWithPeanutbutter = false;
var breadWithPeanutbutter = 0;
var knifeImg = document.querySelector (".knifeImg");
var breadImg = document.querySelector (".breadImg");

//To detect if one of the buttons is pressed
normal.addEventListener('click', openNormal);
timed.addEventListener('click', openTimed);
random.addEventListener('click', openRandom);
info.addEventListener('click', openInfo);
back.addEventListener('click', goBack);

//To show and un-show different pages depending on which button is pressed
function openNormal(){
    startScreen.classList.add('invisible');
    startScreenActive = false;
    normalScreen.classList.remove('invisible');
    normalScreenActive = true;
    playingfield.classList.remove('invisible');
    playingfieldActive = true;
    back.classList.remove('invisible');
    backActive = true;
    normalAndTimed();
}

//To show and un-show different pages depending on which button is pressed
function openRandom(){
    normalScreenActive = false;
    timedScreenActive = false;
    startScreen.classList.add('invisible');
    startScreenActive = false;
    randomScreen.classList.remove('invisible');
    randomScreenActive = true;
    playingfield.classList.remove('invisible');
    playingfieldActive = true;
    back.classList.remove('invisible');
    backActive = true;
    //Help from friend GoldenStack
    clip.removeEventListener('click', activeClip);
    bread.removeEventListener('click', activeBread);
    lid.removeEventListener('click', activeLid);
    knife.removeEventListener('click', activeKnife);
}

//To show and un-show different pages depending on which button is pressed
function openTimed(){
    startScreen.classList.add('invisible');
    startScreenActive = false;
    timedScreen.classList.remove('invisible');
    timedScreenActive = true;
    playingfield.classList.remove('invisible');
    playingfieldActive = true;
    back.classList.remove('invisible');
    backActive = true;
    normalAndTimed();
}

//To show and un-show different pages depending on which button is pressed
function openInfo(){
    startScreen.classList.add('invisible');
    startScreenActive = false;
    infoScreen.classList.remove('invisible');
    infoScreenActive = true;
    back.classList.remove('invisible');
    backActive = true;
}

//To show and un-show different pages depending on which button is pressed
function goBack(){
    startScreen.classList.remove('invisible');
    startScreenActive = true;
    normalScreen.classList.add('invisible');
    normalScreenActive = false;
    timedScreen.classList.add('invisible');
    timedScreenActive = false;
    randomScreen.classList.add('invisible');
    randomScreenActive = false;
    infoScreen.classList.add('invisible');
    infoScreenActive = false;
    playingfield.classList.add('invisible');
    playingfieldActive = false;
    back.classList.add('invisible');
    backActive = false;
    winScreen.classList.add('invisible');
    winsScreenActive = false;
    collected.textContent = 'Golden Bread Collected: ' + goldenBreadCounter;
    reset();
}

// The function that repeats every second
setInterval(function(){
    var number = Math.floor(Math.random()*4);
    random();
    secondCounter();
    function random(){
        //Selecting the random items
        if (randomScreenActive === true){
            if (number === 0){
                activeClip();
            }
            else if ( number === 1){
                activeBread();
            }
            else if ( number === 2){
                activeLid();
            }
            else if ( number === 3){
                activeKnife();
            }
        }
    }
    // Seconds counter
    function secondCounter(){
        if (timedScreenActive === true){
            seconds = seconds + 1;
            secondsCounterP.textContent = seconds + 's';
        }
    }    
}, 1000);

//To check if one of the items is clicked
function normalAndTimed(){
    clip.addEventListener('click', activeClip);
    bread.addEventListener('click', activeBread);
    lid.addEventListener('click', activeLid);
    knife.addEventListener('click', activeKnife);
}

// Activating the clip - deactivating the rest
function activeClip() {
    if (buttonClip === true){
        buttonClip = false;
        clip.classList.remove('active');
    }
    else {
        clip.classList.toggle('active');
        bread.classList.remove('active');
        lid.classList.remove('active');
        knife.classList.remove('active');
        buttonClip = true;
        buttonBread = false;
        buttonLid = false;
        buttonKnife = false;
    }
}

// Activating the bread - deactivating the rest
function activeBread() {
    if (buttonBread === true){
        buttonBread = false;
        bread.classList.remove('active');
    }
    else{
    clip.classList.remove('active');
    bread.classList.toggle('active');
    lid.classList.remove('active');
    knife.classList.remove('active');
    buttonClip = false;
    buttonBread = true;
    buttonLid = false;
    buttonKnife = false;
    }
}

// Activating the lid - deactivating the rest
function activeLid() {
    if (buttonLid === true){
        buttonLid = false;
        lid.classList.remove('active');
    }
    else{
    clip.classList.remove('active');
    bread.classList.remove('active');
    lid.classList.toggle('active');
    knife.classList.remove('active');
    buttonClip = false;
    buttonBread = false;
    buttonLid = true;
    buttonKnife = false;
    }
}

// Activating the knife - deactivating the rest
function activeKnife() {
    if (buttonKnife === true){
        buttonKnife = false;
        knife.classList.remove('active');
    }
    else{
    clip.classList.remove('active');
    bread.classList.remove('active');
    lid.classList.remove('active');
    knife.classList.toggle('active');
    buttonClip = false;
    buttonBread = false;
    buttonLid = false;
    buttonKnife = true;
    }
}

// Checking if a key has been pressed
document.addEventListener('keydown', moveClip);
document.addEventListener('keydown', moveBread);
document.addEventListener('keydown', moveLid);
document.addEventListener('keydown', moveKnife);

function moves(){
    //adding moves to the moves counter
    movesCounter = movesCounter + 1;
    movesCounterP.textContent = movesCounter + ' Moves';
    // changing the bread and knife images to add or remove peanutbutter
    if (kL === 800 && kT === 300){
        knifeWithPeanutbutter = true;
        knifeImg.src = "images/peanutbutterknife.png";
    }
    if (bL === 400 && bT === 400 && kL === 400 && kT === 400 && knifeWithPeanutbutter === true && breadWithPeanutbutter === 0){
        knifeWithPeanutbutter = false;
        knifeImg.src = "images/knife.png";
        breadWithPeanutbutter = breadWithPeanutbutter + 1;
        breadImg.src = "images/bread1.png";
    }
    if (bL === 400 && bT === 400 && kL === 400 && kT === 400 && knifeWithPeanutbutter === true && breadWithPeanutbutter === 1){
        knifeWithPeanutbutter = false;
        knifeImg.src = "images/knife.png";
        breadWithPeanutbutter = breadWithPeanutbutter + 1;
        breadImg.src = "images/bread2.png";
    }
    // Sending you to the winning screen
    if (bL === 400 && bT === 400 && kL === 400 && kT === 400 && knifeWithPeanutbutter === true && breadWithPeanutbutter === 2){
        winScreenStatistics();
        knifeWithPeanutbutter = false;
        knifeImg.src = "images/knife.png";
        breadWithPeanutbutter = breadWithPeanutbutter + 1 ;
        breadImg.src = "images/bread3.png";
        clip.classList.remove('active');
        bread.classList.remove('active');
        lid.classList.remove('active');
        knife.classList.remove('active');
        buttonClip = false;
        buttonBread = false;
        buttonLid = false;
        buttonKnife = false;
        if (winsScreenActive === false){
            setTimeout(function youWin(){
                normalScreen.classList.add('invisible');
                normalScreenActive = false;
                randomScreen.classList.add('invisible');
                randomScreenActive = false;
                timedScreen.classList.add('invisible');
                timedScreenActive = false;
                winScreen.classList.remove('invisible');
                winsScreenActive = true;
                playingfield.classList.add('invisible');
                playingfieldActive = false;
            }, 500);
        }
    }
    if (bL === 800 && bT === 300){
        winScreenStatistics();
        breadImg.src = "images/bread3.png";
        clip.classList.remove('active');
        bread.classList.remove('active');
        lid.classList.remove('active');
        knife.classList.remove('active');
        buttonClip = false;
        buttonBread = false;
        buttonLid = false;
        buttonKnife = false;
        if (winsScreenActive === false){
            setTimeout(function youWin(){
                normalScreen.classList.add('invisible');
                normalScreenActive = false;
                randomScreen.classList.add('invisible');
                randomScreenActive = false;
                timedScreen.classList.add('invisible');
                timedScreenActive = false;
                winScreen.classList.remove('invisible');
                winsScreenActive = true;
                playingfield.classList.add('invisible');
                playingfieldActive = false;
            }, 500);
        }

    }
}

//Showing the win screen statistics
function winScreenStatistics(){
    if (timedScreenActive === true){
        if (seconds <= 9){
            statistics.textContent = 'You completed Peanutbutter Panic in '+ seconds + ' seconds which means you get 3 golden bread';
            goldenBreadCounter = goldenBreadCounter + 3;
        }
        else if (seconds <= 17){
            statistics.textContent = 'You completed Peanutbutter Panic in '+ seconds + ' seconds which means you get 2 golden bread';
            goldenBreadCounter = goldenBreadCounter + 2;
        }
        else if (seconds <= 25){
            statistics.textContent = 'You completed Peanutbutter Panic in '+ seconds + ' seconds which means you get 1 golden bread';
            goldenBreadCounter = goldenBreadCounter + 1;
        }
        else if (seconds > 25){
            statistics.textContent = 'You completed Peanutbutter Panic in '+ seconds + ' seconds which means you dont get a golden bread'; 
        }
    }
    else if (normalScreenActive === true || randomScreenActive === true){
        if (movesCounter <= 40){
            statistics.textContent = 'You completed Peanutbutter Panic in '+ movesCounter +  ' moves which means you get 3 golden bread';
            goldenBreadCounter = goldenBreadCounter + 3;
        }
        else if (movesCounter <= 55){
            statistics.textContent = 'You completed Peanutbutter Panic in '+ movesCounter + ' moves which means you get 2 golden bread';
            goldenBreadCounter = goldenBreadCounter + 2;
        }
        else if (movesCounter <= 60){
            statistics.textContent = 'You completed Peanutbutter Panic in '+ movesCounter + ' moves which means you get 1 golden bread'; 
            goldenBreadCounter = goldenBreadCounter + 1;
        }
        else if (movesCounter > 60){
            statistics.textContent = 'You completed Peanutbutter Panic in '+ movesCounter + ' moves which means you dont get a golden bread'; 
        }
    }
}

// https://stackoverflow.com/questions/58901429/moving-box-up-down-left-right-with-javascript
var cL = 100; //clipLeft
var cT = 300; //clipTop
var bL = 100; //breadLeft
var bT = 400; //breadTop
var lL = 800; //lidLeft
var lT = 300; //lidTop
var kL = 600; //knifeLeft
var kT = 400; //knifeTop

// https://www.youtube.com/watch?v=vbnjxXCq5HQ&ab_channel=pdiddles03
function moveClip(event) {
    if (buttonClip === true){
        //Right
        if (event.keyCode === 39 || event.keyCode === 68) {
            if (cL === 900 || //border
                cL === bL - 100 && bT === cT || cL === kL - 100 && kT === cT || cL === lL - 100 && lT === cT || //items collision
                cL === 100 && cT === 400 || cL === 100 && cT === 300 ||cL === 0 && cT === 400 || cL === 0 && cT === 300 || //breadbag collision
                cL === 800 && cT === 300 || cL === 700 && cT === 300 || cL === 700 && cT === 400 //peanutbutterjar collision
                ){
                cL +=0;}
            else {cL +=100;
            clip.style.left = cL + 'px';
            moves();
            }
        }
        //left
        if (event.keyCode === 37 || event.keyCode === 65) {
            if (cL === 0 || //border
                cL === bL + 100 && bT === cT || cL === kL + 100 && kT === cT || cL === lL + 100 && lT === cT || //items collision
                cL === 100 && cT === 400 || cL === 100 && cT === 300 ||cL === 200 && cT === 400 || cL === 200 && cT === 300 || //breadbag collision
                cL === 800 && cT === 300 || cL === 900 && cT === 300 || cL === 900 && cT === 400 //peanutbutterjar collision
                ){
                cL +=0;}
            else {cL -=100;
            clip.style.left = cL + 'px';
            moves();
            }
        }
        //up
        if (event.keyCode === 38 || event.keyCode === 87) {
            if (cT === 0 || //border
                cT === bT + 100 && bL === cL || cT === kT + 100 && kL === cL || cT === lT + 100 && lL === cL //items collision
                ){
                cT +=0;}
            else {cT -=100;
            clip.style.top = cT + 'px';
            moves();
            }
        }
        //down
        if (event.keyCode === 40 || event.keyCode === 83) {
            if (cT === 400 || //border
                cT === bT - 100 && bL === cL || cT === kT - 100 && kL === cL || cT === lT - 100 && lL === cL || //items collision
                cL === 800 && cT === 300 //peanutbutterjar collision
                ){
                cT +=0;}
            else {cT +=100;
            clip.style.top = cT + 'px';
            moves();
            }
        }
    }
}   

function moveBread(event) {
    if (buttonBread === true){
        //right
        if (event.keyCode === 39 || event.keyCode === 68) {
            if (bL === 900 || //border
                bL === cL - 100 && cT === bT || bL === kL - 100 && kT === bT || bL === lL - 100 && lT === bT || //items collision
                bL === 100 && bT === 400 || bL === 100 && bT === 300 ||bL === 0 && bT === 400 || bL === 0 && bT === 300 || //breadbag collision
                bL === 800 && bT === 300 || bL === 700 && bT === 300 || bL === 700 && bT === 400 //peanutbutterjar collision
                ){
                bL +=0;}
            else {bL +=100;
            bread.style.left = bL + 'px';
            moves();
            }
        }
        //left
        if (event.keyCode === 37 || event.keyCode === 65) {
            if (bL === 0 || //border
                bL === cL + 100 && cT === bT || bL === kL + 100 && kT === bT || bL === lL + 100 && lT === bT || //items collision
                bL === 100 && bT === 400 || bL === 100 && bT === 300 ||bL === 200 && bT === 400 || bL === 200 && bT === 300 || //breadbag collision 
                bL === 800 && bT === 300 || bL === 900 && bT === 300 || bL === 900 && bT === 400 //peanutbutterjar collision
                ){
                bL +=0;}
            else {bL -=100;
            bread.style.left = bL + 'px';
            moves();
            }
        }
        //up
        if (event.keyCode === 38 || event.keyCode === 87) {
            if (bT === 0 || //border
                bT === cT + 100 && cL === bL || bT === kT + 100 && kL === bL || bT === lT + 100 && lL === bL //items collision
                ){
                bT +=0;}
            else {bT -=100;
            bread.style.top = bT + 'px';
            moves();
            }
        }
        //down
        if (event.keyCode === 40 || event.keyCode === 83) {
            if (bT === 400 || //border
                bT === cT - 100 && cL === bL || bT === kT - 100 && kL === bL || bT === lT - 100 && lL === bL || //items collision
                bL === 800 && bT === 300 //peanutbutterjar collision
                ){
                bT +=0;}
            else {bT +=100;
            bread.style.top = bT + 'px';
            moves();
            }
        }
    }
}

function moveLid(event) {
    if (buttonLid === true){
        //right
        if (event.keyCode === 39 || event.keyCode === 68) {
            if (lL === 900 || //border
                lL === bL - 100 && bT === lT || lL === cL - 100 && cT === lT || lL === kL - 100 && lT === kT || //items collision
                lL === 100 && lT === 400 || lL === 100 && lT === 300 ||lL === 0 && lT === 400 || lL === 0 && lT === 300 || //breadbag collision
                lL === 800 && lT === 300 || lL === 700 && lT === 300 || lL === 700 && lT === 400 //peanutbutterjar collision
                ){
                lL +=0;}
            else {lL +=100;
            lid.style.left = lL + 'px';
            moves();
            }
        }
        //left
        if (event.keyCode === 37 || event.keyCode === 65) {
            if (lL === 0 || //border
                lL === bL + 100 && bT === lT || lL === cL + 100 && cT === lT || lL === kL + 100 && lT === kT || //items collision
                lL === 100 && lT === 400 || lL === 100 && lT === 300 || lL === 200 && lT === 400 || lL === 200 && lT === 300 || //breadbag collision 
                lL === 800 && lT === 300 || lL === 900 && lT === 300 || lL === 900 && lT === 400 //peanutbutterjar collision
                ){
                lL +=0;}
            else {lL -=100;
            lid.style.left = lL + 'px';
            moves();
            }
        }
        //up
        if (event.keyCode === 38 || event.keyCode === 87) {
            if (lT === 0 || //border
                lT === bT + 100 && bL === lL || lT === cT + 100 && cL === lL || lT === kT + 100 && lL === kL //items collision
                ){
                lT +=0;}
            else {lT -=100;
            lid.style.top = lT + 'px';
            moves();
            }
        }
        //down
        if (event.keyCode === 40 || event.keyCode === 83) {
            if (lT === 400 || //border
                lT === bT - 100 && bL === lL || lT === cT - 100 && cL === lL || lT === kT - 100 && lL === kL || //items collision
                lL === 800 && lT === 300 //peanutbutterjar collision
                ){
                lT +=0;}
            else {lT +=100;
            lid.style.top = lT + 'px';
            moves();
            }
        }
    }
}

function moveKnife(event) {
    if (buttonKnife === true){
        //Right
        if (event.keyCode === 39 || event.keyCode === 68) {
            if (kL === 900 || //border
                kL === lL - 100 && kT === lT || kL === cL - 100 && cT === kT || //items collision
                kL === 100 && kT === 400 || kL === 100 && kT === 300 ||kL === 0 && kT === 400 || kL === 0 && kT === 300 || //breadbag collision
                kL === 800 && kT === 300 || kL === 700 && kT === 300 || kL === 700 && kT === 400 //peanutbutterjar collision
                ){
                kL +=0;}
            else {kL +=100;
            knife.style.left = kL + 'px';
            moves();
            }
        }
        //left
        if (event.keyCode === 37 || event.keyCode === 65) {
            if (kL === 0 || //border
                kL === lL + 100 && kT === lT || kL === cL + 100 && cT === kT || //items collision
                kL === 100 && kT === 400 || kL === 100 && kT === 300 ||kL === 200 && kT === 400 || kL === 200 && kT === 300 || //breadbag collision 
                kL === 800 && kT === 300 || kL === 900 && kT === 300 || kL === 900 && kT === 400 //peanutbutterjar collision
                ){
                kL +=0;}
            else {kL -=100;
            knife.style.left = kL + 'px';
            moves();
            }
        }
        //up
        if (event.keyCode === 38 || event.keyCode === 87) {
            if (kT === 0 || //border
                kT === lT + 100 && kL === lL  || kT === cT + 100 && cL === kL //items collision
                ){
                kT +=0;}
            else {kT -=100;
            knife.style.top = kT + 'px';
            moves();
            }
        }
        //down
        if (event.keyCode === 40 || event.keyCode === 83) {
            if (kT === 400 || //border
                kT === lT - 100 && kL === lL  || kT === cT - 100 && cL === kL || //items collision
                kL === 800 && kT === 300 //peanutbutterjar collision
                ){
                kT +=0;}
            else {kT +=100;
            knife.style.top = kT + 'px';
            moves();
            }
        }
    }
}

// To reset the playingfield when you close a game
function reset (){
    cL = 100;
    cT = 300;
    bL = 100;
    bT = 400;
    lL = 800;
    lT = 300;
    kL = 600;
    kT = 400;
    clip.style.left = 100 + 'px';
    clip.style.top = 300 + 'px';
    bread.style.left = 100 + 'px';
    bread.style.top = 400 + 'px';
    lid.style.left = 800 + 'px';
    lid.style.top = 300 + 'px';
    knife.style.left = 600 + 'px';
    knife.style.top = 400 + 'px';
    buttonClip = false;
    buttonBread = false;
    buttonLid = false;
    buttonKnife = false;
    clip.classList.remove('active');
    bread.classList.remove('active');
    lid.classList.remove('active');
    knife.classList.remove('active');
    seconds = 0;
    secondsCounterP.textContent = seconds + 's';
    movesCounter = 0;
    movesCounterP.textContent = movesCounter + ' Moves';
    breadImg.src = "images/bread.png";
    knifeImg.src = "images/knife.png";
    breadWithPeanutbutter = 0;
    knifeWithPeanutbutter = false;
    startScreenActive = true;
    normalScreenActive = false;
    timedScreenActive = false;
    randomScreenActive = false;
    infoScreenActive = false;
    winsScreenActive = false;
    playingfieldActive = false;
    backActive = false;
}
