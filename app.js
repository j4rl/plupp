document.addEventListener("DOMContentLoaded", function () {
    const box = document.querySelector(".box");
    const bob = document.querySelector(".bob");
    const disp = document.querySelector(".disp");
    const boxSize = 500;
    let bobSize = 50;
    let bobSpeed = boxSize / 100 + 2;
    let hits = 0;
    let bobLeft = boxSize / 2 - bobSize / 2;
    let bobTop = boxSize / 2 - bobSize / 2;
    let maxBob = boxSize / 2;
    let isGoingUp = false;
    let isGoingDown = false;
    let isGoingRight = false;
    let isGoingLeft = false;
    let upTimer;
    let downTimer;
    let rightTimer;
    let leftTimer;
  
    function init() {
      bob.style.left = bobLeft + "px";
      bob.style.top = bobTop + "px";
      box.style.width = boxSize + "px";
      box.style.height = boxSize + "px";
      disp.style.width = boxSize + "px";
      coords();
    }
    function stopHammerTime() {
      isGoingUp = false;
      isGoingDown = false;
      isGoingRight = false;
      isGoingLeft = false;
    }
    function timerReset() {
      clearInterval(upTimer);
      clearInterval(downTimer);
      clearInterval(rightTimer);
      clearInterval(leftTimer);
    }
  
    function moveUp() {
      stopHammerTime();
      isGoingUp = true;
  
      //timerReset();
      // upTimer = setInterval(function () {
      if (bobTop >= 0) {
        bobTop -= bobSpeed;
        bob.style.top = bobTop + "px";
      } else {
        moveDown();
        grow();
      }
      //   });
    }
    function moveDown() {
      stopHammerTime();
      isGoingDown = true;
      //timerReset();
      //   downTimer = setInterval(function () {
      if (bobTop + 10 + bobSize <= boxSize) {
        bobTop += bobSpeed;
        bob.style.top = bobTop + "px";
      } else {
        moveUp();
        grow();
      }
      //  });
    }
    function moveRight() {
      stopHammerTime();
      isGoingRight = true;
      //timerReset();
      //  rightTimer = setInterval(function () {
      if (bobLeft <= boxSize - (bobSize + 10)) {
        bobLeft += bobSpeed;
        bob.style.left = bobLeft + "px";
      } else {
        moveLeft();
        grow();
      }
      //   });
    }
    function moveLeft() {
      stopHammerTime();
      isGoingLeft = true;
      //timerReset();
      //leftTimer = setInterval(function () {
      if (bobLeft >= 0) {
        bobLeft -= bobSpeed;
        bob.style.left = bobLeft + "px";
      } else {
        moveRight();
        grow();
      }
      // });
    }
    function grow() {
      hits++;
      bob.innerHTML = hits;
      bobSize += bobSpeed;
      //if (bobSize <= maxBob) {
      bob.style.width = bobSize + "px";
      bob.style.height = bobSize + "px";
      //  } else {
      //gameover?
      //    }
    }
    function control(e) {
      switch (e.key) {
        case "ArrowUp":
          moveUp();
          break;
        case "ArrowDown":
          moveDown();
          break;
        case "ArrowRight":
          moveRight();
          break;
        case "ArrowLeft":
          moveLeft();
          break;
        default:
          break;
      }
      coords();
    }
  
    function coords() {
      let Y = bobTop + bobSize / 2;
      let X = bobLeft + bobSize / 2;
      disp.innerHTML = X + ", " + Y;
    }
  
    function main() {
      init();
      document.addEventListener("keydown", control);
    }
    main();
  });
  