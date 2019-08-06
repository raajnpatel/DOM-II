// Your code goes here

let theBackground = document.querySelector('body');
theBackground.style.backgroundColor = '#fafad2';

let topBackground = document.querySelector('header');
topBackground.style.backgroundImage = 'linear-gradient(dodgerblue, lightblue)';
topBackground.style.borderBottomLeftRadius = '10px';
topBackground.style.borderBottomRightRadius = '10px';


// 1. Mouse Over
let theHeader = document.querySelector('header');
theHeader.addEventListener('mouseenter',(event)=>{
    theHeader.style.backgroundImage = 'linear-gradient(lightblue, dodgerblue)';
    theHeader.style.transitionDuration = 'all 2s';
});

theHeader.addEventListener('mouseleave',(event)=>{
    theHeader.style.transitionDelay = 'all 1s';
    theHeader.style.transitionDuration = 'all 2s';
    topBackground.style.backgroundImage = 'linear-gradient(dodgerblue, lightblue)';
});


// 2. On Click
let funClick = document.querySelector('header div h1');
let step = true;
funClick.addEventListener('click', (event) => {
    step = !step;
    if (step === false){theBackground.style.backgroundColor = 'lightsalmon';}
    else {theBackground.style.backgroundColor = '#fafad2';}
});


// 3.  Blur / Focus
let blurFocus = document.querySelector('div header img');
blurFocus.style.filter = 'blur(6px)';
blurFocus.addEventListener('mouseover', (event) => {
    blurFocus.style.filter = 'initial';
});
blurFocus.addEventListener('mouseout', (event) => {
    blurFocus.style.filter = 'blur(6px)';
});

// 4.



// 5.



// 6.



// 7.



// 8.



// 9.



// 10.



// 10.


