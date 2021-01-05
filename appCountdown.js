let Counter = function () {

    // counter frame
    let globalFrame = document.createElement('div');
    globalFrame.style.border = '1px solid red';
    globalFrame.style.width = '20em';
    let txt = document.createElement('div');
    txt.style.width = '250px';
    txt.style.margin = 'auto';
    txt.innerHTML = 'compte à rebours';

    // form
    let inputTime = document.createElement("div");
    inputTime.style.width = '250px';
    inputTime.style.margin = 'auto';
    inputTime.style.display = 'flex';

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

    let button = document.createElement('button');
    button.innerHTML = 'valider';
    button.style.margin = '5px 0 0 5px';
    inputTime.appendChild(button);

        // counter display
    globalFrame.appendChild(txt);
    globalFrame.appendChild(inputTime);

    document.body.appendChild(globalFrame);

    // start countdown
    button.addEventListener('click', function (){

        // get input time
        let nHour = formHour.value;
        let nMin = formMin.value;
        let nSec = formSec.value;

        // time in tenth of second
        let timeLeft = parseInt(nSec) * 10 + parseInt(nMin) * 10 * 60 + parseInt(nHour) * 10 * 3600;
        console.log(timeLeft)

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


                timeLeft --;
            }
            else {
                let display = document.createElement('div');
                display.innerHTML = 'Fin';
                globalFrame.appendChild(display);
                clearInterval(countdown);
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
