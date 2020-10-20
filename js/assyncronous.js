console.log ('Starting');
let image;
const divImage = document.querySelector('.image');

fetch('https://www.peoplespharmacy.com/wp-content/uploads/CoffeCup1-900px-400x400.jpg')
.then((response) => {
  console.log('It worked :)')
  return response.blob();
}).then((myBlob) => {
    console.log(myBlob);
  let objectURL = URL.createObjectURL(myBlob);
  image = document.createElement('img');
  image.src = objectURL;
  divImage.appendChild(image);
}).catch((error) => {
  console.log('There has been a problem with your fetch operation: ' + error.message);
});

console.log ('All done!');

// With a named function
let greeting = setTimeout(function sayHi() {
    console.log('Hello, Mr. Universe!');
  }, 2000)
  
  // With a function defined separately
  function sayHi() {
    console.log('Hello!');
  }
  
  let myGreeting = setTimeout(sayHi, 3000);

/* Clock */
/*function displayCount() {
        // Calculate current hours, minutes, and seconds
        let hours = Math.floor(secondCount/3600);
        let minutes = Math.floor((secondCount % 3600)/60);
        let seconds = Math.floor(secondCount % 60)

        // Display a leading zero if the values are less than ten
        let displayHours = (hours < 10) ? '0' + hours : hours;
        let displayMinutes = (minutes < 10) ? '0' + minutes : minutes;
        let displaySeconds = (seconds < 10) ? '0' + seconds : seconds;

        // Write the current stopwatch display time into the display paragraph
        displayPara.textContent = displayHours + ':' + displayMinutes + ':' + displaySeconds;

        // Increment the second counter by one
        secondCount++;
      }
*/
const btnStart = document.querySelector('.btnStart');
const btnStop = document.querySelector('.btnStop');
const btnReset= document.querySelector('.btnReset');
let stopWatch;
let stopSeconds;

  function displayTime() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    document.getElementById('demo').textContent = time;
 }

 let seconds = (startTime) => {
     let time = Math.floor((Date.now() - startTime) / 1000);
     document.getElementById('time').textContent = time + ' seconds';
 }
 
 btnStart.onclick = () => {
    let startTime = Date.now();
    stopWatch = setInterval(displayTime, 1000);
    stopSeconds = setInterval(seconds, 1000, startTime);
    btnStart.disabled = true;
 }


 btnStop.onclick = () => {
    clearInterval(stopWatch);
    clearInterval(stopSeconds);
    console.log('stop');
    btnStart.disabled = false;
 }

 btnReset.onclick = () => {
    clearInterval(stopWatch);
    clearInterval(stopSeconds);
    document.getElementById('demo').textContent = " ";
    document.getElementById('time').textContent = '';
    btnStart.disabled = false;
 }

 /* spinner animation */
const spinner = document.querySelector('.spinner');
let rotateCount = 0;
let startTime = null;
let rAF;

let draw = (timestamp) => {
    if (!startTime) {
        startTime = timestamp;
       }
     
       rotateCount = (timestamp - startTime) / 3;
       if (rotateCount > 359) {
        rotateCount %= 360;
      }
      spinner.style.transform = `rotate(${rotateCount}deg)`;
      rAF = requestAnimationFrame(draw);
}

draw();

spinner.onclick = () => {
    cancelAnimationFrame(rAF);
}


/* */
fetch('https://lh3.googleusercontent.com/proxy/L1XeqY4A7YBCcnedVBHj7_IT-sBLUgrEdkoCsfCJp7ndwqm9VaRerFZ6A-T1tLLwP8rDXx4Y6Qoz7NwCC7c9Pf-68_asRMNoIsgtAAyCGSDs9NSFM0wH1af3zoTCpsdCBOwk')
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    return response.blob();
  }
})
.then(myBlob => {
    console.log(myBlob);
  const joia = document.querySelector('.joia');
  let objectURL = URL.createObjectURL(myBlob);
  let image = document.createElement('img');
  image.src = objectURL;
  joia.appendChild(image);
})
.catch(e => {
  console.log('There has been a problem with your fetch operation: ' + e.message);
});

let timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve('Success!');
    }, 2000);
  });

  timeoutPromise
.then((message) => {
   alert(message);
})

function timePromise(message, interval) {
    return new Promise((resolve, reject) => {
      if (message === '' || typeof message !== 'string') {
        reject('Message is empty or not a string');
      } else if (interval < 0 || typeof interval !== 'number') {
        reject('Interval is negative or not a number');
      } else {
        setTimeout(function(){
          resolve(message);
        }, interval);
      }
    });
  };

  timePromise('Hello there!', 1000)
.then(message => {
   alert(message);
})
.catch(e => {
  console.log('Error: ' + e);
});