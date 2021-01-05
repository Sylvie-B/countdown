let Counter = function () {

    // form
    let inputTime = document.createElement("div");
    inputTime.style.width = '250px';
    inputTime.style.margin = 'auto';
    inputTime.style.display = 'flex';

    let txHour = document.createElement('div');
    txHour.innerHTML = 'heure';
    inputTime.appendChild(tHour);
    let formHour = document.createElement('input');
    formHour.style.width = '40px';
    formHour.type = 'number';
    formHour.value = '0';
    formHour.min = '0';
    txHour.appendChild(formHour);
    txHour.style.display = 'flex';
    txHour.style.flexDirection = 'column';

    let tMin = document.createElement('div');
    tMin.innerHTML = 'min';
    inputTime.appendChild(tMin);
    let formMin = document.createElement('input');
    formMin.style.width = '40px';
    formMin.type = 'number';
    formMin.value = '0';
    formMin.min = '0';
    tMin.appendChild(formMin);
    tMin.style.display = 'flex';
    tMin.style.flexDirection = 'column';

    let tSec = document.createElement('div');
    tSec.innerHTML = 'second';
    inputTime.appendChild(tSec);
    let formSec = document.createElement('input');
    formSec.style.width = '40px';
    formSec.type = 'number';
    formSec.value = '0';
    formSec.min = '0';
    tSec.appendChild(formSec);
    tSec.style.display = 'flex';
    tSec.style.flexDirection = 'column';

    let button = document.createElement('button');
    button.innerHTML = 'valider';
    inputTime.appendChild(button);

    // counter frame
    let globalFrame = document.createElement('div');
    globalFrame.style.border = '1px solid red';
    globalFrame.style.width = '20em';
    let txt = document.createElement('div');
    txt.innerHTML = 'compte à rebours';
    let countFrame = document.createElement('div');
    let hourFrame = document.createElement('div');
    hourFrame.style.border = '1px black solid';
    hourFrame.style.width = '42px';
    hourFrame.style.height = '1.5em';
    let minFrame = document.createElement('div');
    minFrame.style.border = '1px black solid';
    minFrame.style.width = '42px';
    minFrame.style.height = '1.5em';
    let secFrame = document.createElement('div');
    secFrame.style.border = '1px black solid';
    secFrame.style.width = '42px';
    secFrame.style.height = '1.5em';

    // counter display
    globalFrame.appendChild(inputTime);
    globalFrame.appendChild(txt);
    globalFrame.appendChild(countFrame);
    countFrame.style.display = 'flex';
    countFrame.appendChild(hourFrame);
    countFrame.appendChild(minFrame);
    countFrame.appendChild(secFrame);

    document.body.appendChild(globalFrame);

    button.addEventListener('click', function (){
        // time in milliseconds
        let nHour = formHour.value;
        let nMin = formMin.value;
        let nSec = formSec.value;
        let timeLeft = parseInt(nSec) *10 + parseInt(nMin) *10 * 60 + parseInt(nHour) * 10 * 3600;
        console.log(timeLeft);
        let counter = setInterval(function (){

            let hourLeft = Math.floor(timeLeft / 3600 / 10);
            let minLeft = Math.floor((timeLeft - hourLeft * 3600 * 10) / 60 / 1000);
            let secLeft = Math.floor(timeLeft - hourLeft * 3600 * 10 - minLeft * 60 * 1000);
            let dixSecLeft = Math.floor(timeLeft - hourLeft * 3600 * 10 - minLeft * 60 * 1000 - secLeft * 1000)

            hourFrame.innerHTML = Math.floor(hourLeft / 10).toString();
            hourFrame.innerHTML += hourLeft - Math.floor(hourLeft/10) * 10 + ":";
            minFrame.innerHTML = Math.floor(minLeft/10).toString();
            minFrame.innerHTML += minLeft - (Math.floor(minLeft/10) * 10) + ":";
            secFrame.innerHTML = Math.floor(secLeft/10).toString();
            secFrame.innerHTML += secLeft - (Math.floor(secLeft/10) * 10);

            if (timeLeft > 0){
                timeLeft --;
            }
            else {
                let display = document.createElement('div');
                display.innerHTML = 'Fin';
                globalFrame.appendChild(display);
                clearInterval(counter);
            }

        }, 100);
    })

    // reset button
    this.razButton = function () {
        let raz = document.createElement('button');
        raz.innerHTML = 'reset';
        globalFrame.appendChild(raz);
        raz.addEventListener('click', function () {
        })
    }
}

let newCount = new Counter();
