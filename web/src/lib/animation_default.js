
var animate = {
 bounce(iterations = 1) {
   const keyframes = [
     { transform: 'translate3d(0,0,0)', offset: 0 },
     { transform: 'translate3d(0,0,0)', offset: 0.2 },
     { transform: 'translate3d(0,-30px,0)', offset: 0.4 },
     { transform: 'translate3d(0,-30px,0)', offset: 0.43 },
     { transform: 'translate3d(0,0,0)', offset: 0.53 },
     { transform: 'translate3d(0,-15px,0)', offset: 0.7 },
     { transform: 'translate3d(0,0,0)', offset: 0.8 },
     { transform: 'translate3d(0,-15px,0)', offset: 0.9 },
     { transform: 'translate3d(0,0,0)', offset: 1 }];
   const timing = { duration: 900, iterations: iterations, easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)' };
   return { keyframes, timing };
 },
 bounceIn(iterations = 1) {
   const keyframes = [
     { transform: 'scale3d(.3, .3, .3)', opacity: '0', offset: 0 },
     { transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2 },
     { transform: 'scale3d(.9, .9, .9)', offset: 0.4 },
     { transform: 'scale3d(1.03, 1.03, 1.03)', opacity: '1', offset: 0.6 },
     { transform: 'scale3d(.97, .97, .97)', offset: 0.8 },
     { transform: 'scale3d(1, 1, 1)', opacity: '1', offset: 1 }];
   const timing = { duration: 900, iterations: iterations, easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)' };
   return { keyframes, timing };
 },
 bounceOut(iterations = 1) {
   const keyframes = [
     { transform: 'none', opacity: '1', offset: 0 },
     { transform: 'scale3d(.9, .9, .9)', opacity: '1', offset: 0.2 },
     { transform: 'scale3d(1.1, 1.1, 1.1)', opacity: '1', offset: 0.5 },
     { transform: 'scale3d(1.1, 1.1, 1.1)', opacity: '1', offset: 0.55 },
     { transform: 'scale3d(.3, .3, .3)', opacity: '0', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 bounceInDown(iterations = 1) {
   const keyframes = [
     { transform: 'translate3d(0, -3000px, 0)', opacity: '0', offset: 0 },
     { transform: 'translate3d(0, 25px, 0)', opacity: '1', offset: 0.6 },
     { transform: 'translate3d(0, -100px, 0)', offset: 0.75 },
     { transform: 'translate3d(0, 5px, 0)', offset: 0.9 },
     { transform: 'none', opacity: '1', offset: 1 }];
   const timing = { duration: 900, iterations: iterations, easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)' };
   return { keyframes, timing };
 },
 bounceOutDown(iterations = 1) {
   const keyframes = [
     { transform: 'none', opacity: '1', offset: 0 },
     { transform: 'translate3d(0, 50px, 0)', opacity: '1', offset: 0.2 },
     { transform: 'translate3d(0, -20px, 0)', opacity: '1', offset: 0.4 },
     { transform: 'translate3d(0, -20px, 0)', opacity: '1', offset: 0.45 },
     { transform: 'translate3d(0, 2000px, 0)', opacity: '0', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 bounceInUp(iterations = 1) {
   const keyframes = [
     { transform: 'translate3d(0, 3000px, 0)', opacity: '0', offset: 0 },
     { transform: 'translate3d(0, -25px, 0)', opacity: '1', offset: 0.6 },
     { transform: 'translate3d(0, 100px, 0)', offset: 0.75 },
     { transform: 'translate3d(0, -5px, 0)', offset: 0.9 },
     { transform: 'translate3d(0, 0, 0)', opacity: '1', offset: 1 }];
   const timing = { duration: 900, iterations: iterations, easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)' };
   return { keyframes, timing };
 },
 bounceOutUp(iterations = 1) {
   const keyframes = [
     { transform: 'none', opacity: '1', offset: 0 },
     { transform: 'translate3d(0, 50px, 0)', opacity: '1', offset: 0.2 },
     { transform: 'translate3d(0, 20px, 0)', opacity: '1', offset: 0.4 },
     { transform: 'translate3d(0, 20px, 0)', opacity: '1', offset: 0.45 },
     { transform: 'translate3d(0, -2000px, 0)', opacity: '0', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 bounceInLeft(iterations = 1) {
   const keyframes = [
     { transform: 'translate3d(-3000px, 0, 0)', opacity: '0', offset: 0 },
     { transform: 'translate3d(25px, 0, 0)', opacity: '1', offset: 0.6 },
     { transform: 'translate3d(-100px, 0, 0)', offset: 0.75 },
     { transform: 'translate3d(5px, 0, 0)', offset: 0.9 },
     { transform: 'none', opacity: '1', offset: 1 }];
   const timing = { duration: 900, iterations: iterations, easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)' };
   return { keyframes, timing };
 },
 bounceOutLeft(iterations = 1) {
   const keyframes = [
     { transform: 'none', opacity: '1', offset: 0 },
     { transform: 'translate3d(100px, 0, 0)', opacity: '1', offset: 0.2 },
     { transform: 'translate3d(-20px, 0, 0)', opacity: '1', offset: 0.4 },
     { transform: 'translate3d(-20px, 0, 0)', opacity: '1', offset: 0.45 },
     { transform: 'translate3d(-2000px, 0, 0)', opacity: '0', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 bounceInRight(iterations = 1) {
   const keyframes = [
     { transform: 'translate3d(3000px, 0, 0)', opacity: '0', offset: 0 },
     { transform: 'translate3d(-25px, 0, 0)', opacity: '1', offset: 0.6 },
     { transform: 'translate3d(100px, 0, 0)', offset: 0.75 },
     { transform: 'translate3d(-5px, 0, 0)', offset: 0.9 },
     { transform: 'none', opacity: '1', offset: 1 }];
   const timing = { duration: 900, iterations: iterations, easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)' };
   return { keyframes, timing };
 },
 bounceOutRight(iterations = 1) {
   const keyframes = [
     { transform: 'none', opacity: '1', offset: 0 },
     { transform: 'translate3d(100px, 0, 0)', opacity: '1', offset: 0.2 },
     { transform: 'translate3d(-20px, 0, 0)', opacity: '1', offset: 0.4 },
     { transform: 'translate3d(-20px, 0, 0)', opacity: '1', offset: 0.45 },
     { transform: 'translate3d(2000px, 0, 0)', opacity: '0', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 flip(iterations = 1) {
   const keyframes = [
     { transform: 'perspective(400px) rotate3d(0, 1, 0, -360deg)', offset: 0 },
     { transform: 'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)', offset: 0.4 },
     { transform: 'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)', offset: 0.5 },
     { transform: 'perspective(400px) scale3d(.95, .95, .95)', offset: 0.8 },
     { transform: 'perspective(400px)', offset: 1 }];
   const timing = { duration: 900, iterations: iterations, easing: 'ease-in' };
   return { keyframes, timing };
 },
 flipInX(iterations = 1) {
   const keyframes = [
     { transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', opacity: '0', offset: 0 },
     { transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', offset: 0.4 },
     { transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)', opacity: '1', offset: 0.6 },
     { transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)', opacity: '1', offset: 0.8 },
     { transform: 'perspective(400px)', opacity: '1', offset: 1 }];
   const timing = { duration: 900, iterations: iterations, easing: 'ease-in' };
   return { keyframes, timing };
 },
 flipOutX(iterations = 1) {
   const keyframes = [
     { transform: 'perspective(400px)', opacity: '1', offset: 0 },
     { transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', opacity: '1', offset: 0.3 },
     { transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', opacity: '0', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 flipInY(iterations = 1) {
   const keyframes = [
     { transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: '0', offset: 0 },
     { transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)', offset: 0.4 },
     { transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)', opacity: '1', offset: 0.6 },
     { transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)', opacity: '1', offset: 0.8 },
     { transform: 'perspective(400px)', opacity: '1', offset: 1 }];
   const timing = { duration: 900, iterations: iterations, easing: 'ease-in' };
   return { keyframes, timing };
 },
 flipOutY(iterations = 1) {
   const keyframes = [
     { transform: 'perspective(400px)', opacity: '1', offset: 0 },
     { transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)', opacity: '1', offset: 0.3 },
     { transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: '0', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 flash(iterations = 1) {
   const keyframes = [
     { opacity: '1', offset: 0 },
     { opacity: '0', offset: 0.25 },
     { opacity: '1', offset: 0.5 },
     { opacity: '0', offset: 0.75 },
     { opacity: '1', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 pulse(iterations = 1) {
   const keyframes = [
     { transform: 'scale3d(1, 1, 1)', offset: 0 },
     { transform: 'scale3d(1.05, 1.05, 1.05)', offset: 0.5 },
     { transform: 'scale3d(1, 1, 1)', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 rubberBand(iterations = 1) {
   const keyframes = [
     { transform: 'scale3d(1, 1, 1)', offset: 0 },
     { transform: 'scale3d(1.25, 0.75, 1)', offset: 0.3 },
     { transform: 'scale3d(0.75, 1.25, 1)', offset: 0.4 },
     { transform: 'scale3d(1.15, 0.85, 1)', offset: 0.5 },
     { transform: 'scale3d(.95, 1.05, 1)', offset: 0.65 },
     { transform: 'scale3d(1.05, .95, 1)', offset: 0.75 },
     { transform: 'scale3d(1, 1, 1)', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 lightSpeedInRight(iterations = 1) {
   const keyframes = [
     { transform: 'translate3d(100%, 0, 0) skewX(-30deg)', opacity: '0', offset: 0 },
     { transform: 'skewX(20deg)', opacity: '1', offset: 0.6 },
     { transform: 'skewX(-5deg)', opacity: '1', offset: 0.8 },
     { transform: 'none', opacity: '1 ', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 lightSpeedOutRight(iterations = 1) {
   const keyframes = [{ transform: 'none', opacity: '1 ', offset: 0 },
     { transform: 'translate3d(100%, 0, 0) skewX(30deg)', opacity: '0', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 lightSpeedInLeft(iterations = 1) {
   const keyframes = [
     { transform: 'translate3d(-100%, 0, 0) skewX(-30deg)', opacity: '0', offset: 0 },
     { transform: 'skewX(20deg)', opacity: '1', offset: 0.6 },
     { transform: 'skewX(-5deg)', opacity: '1', offset: 0.8 },
     { transform: 'none', opacity: '1 ', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 lightSpeedOutLeft(iterations = 1) {
   const keyframes = [{ transform: 'none', opacity: '1 ', offset: 0 },
     { transform: 'translate3d(-100%, 0, 0) skewX(30deg)', opacity: '0', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 shake(iterations = 1) {
   const keyframes = [
     { transform: 'translate3d(0, 0, 0)', offset: 0 },
     { transform: 'translate3d(-10px, 0, 0)', offset: 0.1 },
     { transform: 'translate3d(10px, 0, 0)', offset: 0.2 },
     { transform: 'translate3d(-10px, 0, 0)', offset: 0.3 },
     { transform: 'translate3d(10px, 0, 0)', offset: 0.4 },
     { transform: 'translate3d(-10px, 0, 0)', offset: 0.5 },
     { transform: 'translate3d(10px, 0, 0)', offset: 0.6 },
     { transform: 'translate3d(-10px, 0, 0)', offset: 0.7 },
     { transform: 'translate3d(10px, 0, 0)', offset: 0.8 },
     { transform: 'translate3d(-10px, 0, 0)', offset: 0.9 },
     { transform: 'translate3d(0, 0, 0)', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 swing(iterations = 1) {
   const keyframes = [
     { transform: 'translate(0%)', offset: 0 },
     { transform: 'rotate3d(0, 0, 1, 15deg)', offset: 0.2 },
     { transform: 'rotate3d(0, 0, 1, -10deg)', offset: 0.4 },
     { transform: 'rotate3d(0, 0, 1, 5deg)', offset: 0.6 },
     { transform: 'rotate3d(0, 0, 1, -5deg)', offset: 0.8 },
     { transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 tada(iterations = 1) {
   const keyframes = [
     { transform: 'scale3d(1, 1, 1)', offset: 0 },
     { transform: 'scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)', offset: 0.1 },
     { transform: 'scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)', offset: 0.2 },
     { transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.3 },
     { transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: 0.4 },
     { transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.5 },
     { transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: 0.6 },
     { transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.7 },
     { transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: 0.8 },
     { transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.9 },
     { transform: 'scale3d(1, 1, 1)', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 wobble(iterations = 1) {
   const keyframes = [
     { transform: 'translate(0%)', offset: 0 },
     { transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)', offset: 0.15 },
     { transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)', offset: 0.45 },
     { transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)', offset: 0.6 },
     { transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)', offset: 0.75 },
     { transform: 'translateX(0%)', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 fadeIn(iterations = 1) {
   const keyframes = [
     { opacity: '0', offset: 0 },
     { opacity: '1', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 fadeOut(iterations = 1) {
   const keyframes = [
     { opacity: '1', offset: 0 },
     { opacity: '0', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 fadeInDown(iterations = 1) {
   const keyframes = [
     { opacity: '0', transform: 'translate3d(0, -100%, 0)', offset: 0 },
     { opacity: '1', transform: 'none', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 fadeOutDown(iterations = 1) {
   const keyframes = [{ opacity: '1', transform: 'none', offset: 0 },
     { opacity: '0', transform: 'translate3d(0, 100%, 0)', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 fadeOutUp(iterations = 1) {
   const keyframes = [{ opacity: '1', transform: 'none', offset: 0 },
     { opacity: '0', transform: 'translate3d(0, -100%, 0)', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 fadeOutUpBig(iterations = 1) {
   const keyframes = [
     { opacity: '1', transform: 'none', offset: 0 },
     { opacity: '0', transform: 'translate3d(0, -2000px, 0)', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 fadeInUp(iterations = 1) {
   const keyframes = [
     { opacity: '0', transform: 'translate3d(0, 100%, 0)', offset: 0 },
     { opacity: '1', transform: 'none', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 fadeInDownBig(iterations = 1) {
   const keyframes = [
     { opacity: '0', transform: 'translate3d(0, -2000px, 0)', offset: 0 },
     { opacity: '1', transform: 'none', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 fadeOutDownBig(iterations = 1) {
   const keyframes = [{ opacity: '1', transform: 'none', offset: 0 },
     { opacity: '0', transform: 'translate3d(0, 2000px, 0)', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 fadeInUpBig(iterations = 1) {
   const keyframes = [
     { opacity: '0', transform: 'translate3d(0, 2000px, 0)', offset: 0 },
     { opacity: '1', transform: 'none', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 fadeInRightBig(iterations = 1) {
   const keyframes = [
     { opacity: '0', transform: 'translate3d(2000px, 0, 0)', offset: 0 },
     { opacity: '1', transform: 'none', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 fadeOutLeftBig(iterations = 1) {
   const keyframes = [{ opacity: '1', transform: 'none', offset: 0 },
     { opacity: '0', transform: 'translate3d(-2000px, 0, 0)', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 fadeInLeft(iterations = 1) {
   const keyframes = [
     { opacity: '0', transform: 'translate3d(-100%, 0, 0)', offset: 0 },
     { opacity: '1', transform: 'none', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 fadeInLeftBig(iterations = 1) {
   const keyframes = [
     { opacity: '0', transform: 'translate3d(-2000px, 0, 0)', offset: 0 },
     { opacity: '1', transform: 'none', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 fadeInRight(iterations = 1) {
   const keyframes = [
     { opacity: '0', transform: 'translate3d(100%, 0, 0)', offset: 0 },
     { opacity: '1', transform: 'none', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 fadeOutLeft(iterations = 1) {
   const keyframes = [{ opacity: '1', transform: 'none', offset: 0 },
     { opacity: '0', transform: 'translate3d(-100%, 0, 0)', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 fadeOutRight(iterations = 1) {
   const keyframes = [
     { opacity: '1', transform: 'none', offset: 0 },
     { opacity: '0', transform: 'translate3d(100%, 0, 0)', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 fadeOutRightBig(iterations = 1) {
   const keyframes = [
     { opacity: '1', transform: 'none', offset: 0 },
     { opacity: '0', transform: 'translate3d(2000px, 0, 0)', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 rollIn(iterations = 1) {
   const keyframes = [{
     transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)',
     opacity: '0',
     offset: 0
   },
     { transform: 'none', opacity: '1', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 rollOut(iterations = 1) {
   const keyframes = [{ transform: 'none', opacity: '1', offset: 0 },
     { transform: 'translate3d(100%, 0, 0) rotate3d(0, 0, 1, -120deg)', opacity: '0', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 zoomIn(iterations = 1) {
   const keyframes = [{ transform: 'scale3d(.3, .3, .3)  ', opacity: '0', offset: 0 },
     { transform: 'none', opacity: '1', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 zoomOutDown(iterations = 1) {

   const keyframes = [{ transform: 'none', opacity: '1', transformOrigin: 'center bottom', offset: 0 },
     {
       transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)',
       opacity: '1',
       transformOrigin: 'center bottom',
       offset: 0.4
     },
     {
       transform: 'scale3d(.1, .1, .1) translate3d(0, 2000px, 0)',
       opacity: '0',
       transformOrigin: 'center bottom',
       offset: 1
     }];
   const timing = { duration: 900, iterations: iterations, easing: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)' };
   return { keyframes, timing };
 },
 zoomOutUp(iterations = 1) {

   const keyframes = [{ transform: 'none', opacity: '1', transformOrigin: 'center bottom', offset: 0 },
     {
       transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)',
       opacity: '1',
       transformOrigin: 'center bottom',
       offset: 0.4
     },
     {
       transform: 'scale3d(.1, .1, .1) translate3d(0, -2000px, 0)',
       opacity: '0',
       transformOrigin: 'center bottom',
       offset: 1
     }];
   const timing = { duration: 900, iterations: iterations, easing: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)' };
   return { keyframes, timing };
 },
 zoomOutRight(iterations = 1) {

   const keyframes = [{ transform: 'none', opacity: '1', transformOrigin: 'right center', offset: 0 },
     {
       transform: 'scale3d(.475, .475, .475) translate3d(-42px, 0, 0)',
       opacity: '1',
       transformOrigin: 'right center',
       offset: 0.4
     },
     {
       transform: 'scale(.1) translate3d(2000px, 0, 0)',
       opacity: '0',
       transformOrigin: 'right center',
       offset: 1
     }];
   const timing = { duration: 900, iterations: iterations, easing: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)' };
   return { keyframes, timing };
 },
 zoomOutLeft(iterations = 1) {

   const keyframes = [{ transform: 'none', opacity: '1', transformOrigin: 'left center', offset: 0 },
     {
       transform: 'scale3d(.475, .475, .475) translate3d(42px, 0, 0)',
       opacity: '1',
       transformOrigin: 'left center',
       offset: 0.4
     },
     {
       transform: 'scale(.1) translate3d(-2000px, 0, 0)',
       opacity: '0',
       transformOrigin: 'left center',
       offset: 1
     }];
   const timing = { duration: 900, iterations: iterations, easing: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)' };
   return { keyframes, timing };
 },
 zoomInDown(iterations = 1) {
   const keyframes = [{ transform: 'scale3d(.1, .1, .1) translate3d(0, -1000px, 0)', opacity: '0', offset: 0 },
     { transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)', opacity: '1', offset: 0.6 },
     { transform: 'none', opacity: '1', offset: 1 }];
   const timing = { duration: 900, iterations: iterations, easing: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)' };
   return { keyframes, timing };
 },
 zoomInLeft(iterations = 1) {
   const keyframes = [{ transform: 'scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)', opacity: '0', offset: 0 },
     { transform: 'scale3d(.475, .475, .475) translate3d(10px, 0, 0)', opacity: '1', offset: 0.6 },
     { transform: 'none', opacity: '1', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 zoomInRight(iterations = 1) {
   const keyframes = [{ transform: 'scale3d(.1, .1, .1) translate3d(1000px, 0, 0)', opacity: '0', offset: 0 },
     { transform: 'scale3d(.475, .475, .475) translate3d(-10px, 0, 0)', opacity: '1', offset: 0.6 },
     { transform: 'none', opacity: '1', offset: 1 }];
   const timing = { duration: 900, iterations: iterations, easing: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)' };
   return { keyframes, timing };
 },
 zoomInUp(iterations = 1) {
   const keyframes = [{ transform: 'scale3d(.1, .1, .1) translate3d(0, 1000px, 0)', opacity: '0', offset: 0 },
     { transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)', opacity: '1', offset: 0.6 },
     { transform: 'none', opacity: '1', offset: 1 }];
   const timing = { duration: 900, iterations: iterations, easing: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)' };
   return { keyframes, timing };
 },
 zoomOut(iterations = 1) {
   const keyframes = [{ transform: 'none', opacity: '1', offset: 0 },
     { transform: 'scale3d(.3, .3, .3)  ', opacity: '0', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 rotateIn(iterations = 1) {

   const keyframes = [{
     transform: 'rotate3d(0, 0, 1, -200deg)',
     opacity: '0',
     transformOrigin: 'center',
     offset: 0
   },
     { transform: 'none', opacity: '1', transformOrigin: 'center', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 rotateInDownLeft(iterations = 1) {

   const keyframes = [{
     transform: 'rotate3d(0, 0, 1, -45deg)',
     opacity: '0',
     transformOrigin: 'left bottom',
     offset: 0
   },
     { transform: 'none', opacity: '1', transformOrigin: 'left bottom', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 rotateInDownRight(iterations = 1) {
   const keyframes = [{
     transform: 'rotate3d(0, 0, 1, 45deg)',
     opacity: '0',
     transformOrigin: 'right bottom',
     offset: 0
   },
     { transform: 'none', opacity: '1', transformOrigin: 'right bottom', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 rotateInUpLeft(iterations = 1) {

   const keyframes = [{
     transform: 'rotate3d(0, 0, 1, 45deg)',
     opacity: '0',
     transformOrigin: 'left bottom',
     offset: 0
   },
     { transform: 'none', opacity: '1', transformOrigin: 'left bottom', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 rotateInUpRight(iterations = 1) {

   const keyframes = [{
     transform: 'rotate3d(0, 0, 1, -45deg)',
     opacity: '0',
     transformOrigin: 'right bottom',
     offset: 0
   },
     { transform: 'none', opacity: '1', transformOrigin: 'right bottom', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 rotateOutDownLeft(iterations = 1) {

   const keyframes = [{ transform: 'none', opacity: '1', transformOrigin: 'left bottom', offset: 0 },
     { transform: 'rotate3d(0, 0, 1, 45deg)', opacity: '0', transformOrigin: 'left bottom', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 rotateOutDownRight(iterations = 1) {

   const keyframes = [{ transform: 'none', opacity: '1', transformOrigin: 'right bottom', offset: 0 },
     { transform: 'rotate3d(0, 0, 1, -45deg)', opacity: '0', transformOrigin: 'right bottom', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 },
 rotateOutUpLeft(iterations = 1) {

   const keyframes = [{ transform: 'none', opacity: '1', transformOrigin: 'left bottom', offset: 0 },
     { transform: 'rotate3d(0, 0, 1, -45deg)', opacity: '0', transformOrigin: 'left bottom', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };

   return { keyframes, timing };
 },
 rotateOutUpRight(iterations = 1) {

   const keyframes = [{ transform: 'none', opacity: '1', transformOrigin: 'right bottom', offset: 0 },
     { transform: 'rotate3d(0, 0, 1, 45deg)', opacity: '0', transformOrigin: 'right bottom', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };

   return { keyframes, timing };
 },
 rotateOut(iterations = 1) {

   const keyframes = [{ transform: 'none', opacity: '1', transformOrigin: 'center', offset: 0 },
     { transform: 'rotate3d(0, 0, 1, 200deg)', opacity: '0', transformOrigin: 'center', offset: 1 }];
   const timing = { duration: 900, iterations: iterations };
   return { keyframes, timing };
 }
}

export default animate
