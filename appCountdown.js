let Counter = function (countName, color) {
    // countdown display
    countName = document.createElement('div');
    countName.style.display = 'inline\-block';
    countName.style.backgroundColor = 'darkred';
    countName.style.margin = '5px';
    countName.style.padding = '5px';
    countName.style.fontFamily = 'monospace';
    countName.style.color = 'white';
    document.body.appendChild(countName);

    // counter frame
    let counterFrame = document.createElement('div');
    counterFrame.style.padding = '4px';
    countName.appendChild(counterFrame);

    let txt = document.createElement('div');
    txt.style.textAlign = 'center';
    txt.style.fontWeight = 'bold';
    txt.style.fontSize = '1.3rem';
    txt.innerHTML = 'Compte à rebours';
    counterFrame.appendChild(txt);

    // form
    let inputTime = document.createElement("div");
    inputTime.style.width = '80%';
    inputTime.style.margin = 'auto';
    inputTime.style.padding = '4px';
    inputTime.style.display = 'flex';
    inputTime.style.justifyContent = 'center';

    let txHour = document.createElement('div');
    txHour.innerHTML = 'heure';
    txHour.style.display = 'flex';
    txHour.style.flexDirection = 'column';
    inputTime.appendChild(txHour);

    let formHour = document.createElement('input');
    formHour.style.width = '40px';
    formHour.type = 'number';
    formHour.value = '0';
    formHour.min = '0';
    txHour.appendChild(formHour);

    let txMin = document.createElement('div');
    txMin.innerHTML = 'min';
    txMin.style.display = 'flex';
    txMin.style.flexDirection = 'column';
    inputTime.appendChild(txMin);

    let formMin = document.createElement('input');
    formMin.style.width = '40px';
    formMin.type = 'number';
    formMin.value = '0';
    formMin.min = '0';
    txMin.appendChild(formMin);

    let txSec = document.createElement('div');
    txSec.innerHTML = 'second';
    txSec.style.display = 'flex';
    txSec.style.flexDirection = 'column';
    inputTime.appendChild(txSec);

    let formSec = document.createElement('input');
    formSec.style.width = '40px';
    formSec.type = 'number';
    formSec.value = '0';
    formSec.min = '0';
    txSec.appendChild(formSec);

    // tenth of second
    let tenth = document.createElement('div');
    tenth.style.border = '1px dashed white';
    tenth.style.padding = '0 2px';
    tenth.innerHTML = '0';
    tenth.style.textAlign = 'center';
    tenth.style.alignSelf = 'flex-end';
    inputTime.appendChild(tenth);

    counterFrame.appendChild(inputTime);

    // start - end - reset
    let control = document.createElement('div');
    control.style.border = '4px solid ' + color;
    control.style.padding = '4px';
    control.style.display = 'flex';
    control.style.justifyContent = 'center';
    counterFrame.appendChild(control);

    let pause = document.createElement('button');
    pause.innerHTML = 'PAUSE';
    pause.style.display = 'none';
    control.appendChild(pause);

    let start = document.createElement('button');
    start.innerHTML = 'START';
    control.appendChild(start);

    let reset = document.createElement('button');
    reset.innerHTML = 'RESET';
    control.appendChild(reset);

    // start countdown
    start.addEventListener('click', function (){
        // start --> pause
        start.style.display = 'none';
        pause.style.display = 'block';

        // get input time
        let nHour = Math.abs(parseInt(formHour.value));
        let nMin = Math.abs(parseInt(formMin.value));
        let nSec = Math.abs(parseInt(formSec.value));

        // calculate time in tenth of second
        let timeLeft = parseInt(nSec) * 10 + parseInt(nMin) * 10 * 60 + parseInt(nHour) * 10 * 3600;

        // countdown
        let countdown = setInterval(function (){

            if (timeLeft >= 0){

                let hourLeft = Math.floor(timeLeft / 3600 / 10);
                let minLeft = Math.floor((timeLeft - hourLeft * 3600 * 10) / 60 / 10);
                let secLeft = Math.floor((timeLeft - hourLeft * 3600 * 10 - minLeft * 60 * 10) / 10);
                let dixSecLeft = Math.floor(timeLeft - hourLeft * 3600 * 10 - minLeft * 60 * 10 - secLeft *10);

                formHour.value = hourLeft.toString();
                formMin.value = minLeft.toString();
                formSec.value = secLeft.toString();
                tenth.innerHTML = dixSecLeft.toString();

                if(secLeft % 2 === 0){
                    control.style.backgroundColor = color;
                }
                else {
                    control.style.backgroundColor = 'darkred';
                }
                timeLeft --;
            }
            else {
                control.style.backgroundColor = 'darkred';
                pause.style.display = 'none';
                start.style.display = 'block';
                clearInterval(countdown);
            }
        }, 100);

        //standby
        pause.addEventListener('click', function () {
            clearInterval(countdown);
            start.style.display = 'block';
            pause.style.display = 'none';
        })

        // listen reset
        reset.addEventListener('click', function (){
            formHour.value = "0";
            formMin.value = "0";
            formSec.value = "0";
            tenth.innerHTML = "0";
            control.style.backgroundColor = 'darkred';
            clearInterval(countdown);
        })
    })
}

let newCount = new Counter('count01', 'black');
let count02 = new Counter('count02', 'red');
let count03 = new Counter('count03', 'white');
