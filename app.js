document.addEventListener("DOMContentLoaded", function(){
    const box = document.querySelector(".main");
    const plupp=document.querySelector(".plupp");
    const mainWidth=600;
    const mainHeight=600;
    const pluppSize=50;
    let isGoingDown=false;
    let isGoingUp=false;
    let isGoingLeft=false;
    let isGoingRight=false;
    let pluppLeft;
    let pluppTop;

    function init (){
        pluppTop=((mainHeight/2)-(pluppSize/2));
        pluppLeft=((mainWidth/2)-(pluppSize/2));
        plupp.style.top=pluppTop+'px';
        plupp.style.left=pluppLeft+'px';
        box.style.width=mainWidth+'px';
        box.style.height=mainHeight+'px';
        isGoingLeft=false;
        isGoingRight=false;
        isGoingUp=false;
        isGoingDown=false;
    }

    function moveLeft(){
        //if inte på vänsterkant flytta vänster else flytta höger
    }

    function main(){
        init();
    }
    main();
});
