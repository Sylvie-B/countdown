let Counter = function () {

    // display countdown
    this.display = function (hourCount, minCount, secCount) {
        // total time in seconds
        let timeLeft = secCount + minCount * 60 + hourCount * 3600;
        console.log(timeLeft);

        // counter display
        let globalFrame = document.createElement('div');
        let txt = document.createElement('div');
        txt.innerHTML = 'Compte à rebour :';
        let countFrame = document.createElement('div');
        let hourFrame = document.createElement('div');
        let minFrame = document.createElement('div');
        let secFrame = document.createElement('div');

        document.body.appendChild(globalFrame);
        globalFrame.appendChild(txt);
        globalFrame.appendChild(countFrame);
        countFrame.style.display = 'flex';
        countFrame.appendChild(hourFrame);
        countFrame.appendChild(minFrame);
        countFrame.appendChild(secFrame);

        setInterval(function (){

            let hourLeft = Math.floor(timeLeft / 3600);
            let minLeft = Math.floor((timeLeft - hourLeft * 3600) / 60);
            let secLeft = Math.floor(timeLeft - hourLeft * 3600 - minLeft * 60);

            hourFrame.innerHTML = Math.floor(hourLeft / 10).toString();
            hourFrame.innerHTML += hourLeft - Math.floor(hourLeft/10) * 10 + ":";
            minFrame.innerHTML = Math.floor(minLeft/10).toString();
            minFrame.innerHTML += minLeft - (Math.floor(minLeft/10) * 10) + ":";
            secFrame.innerHTML = Math.floor(secCount/10).toString();
            secFrame.innerHTML += secLeft - (Math.floor(secLeft/10) * 10);

            timeLeft --;

        }, 1000);

    }

    // start button
    this.goButton = function () {
        let start = document.createElement('button');
        start.innerHTML = 'start';
        document.body.appendChild(start);
        start.addEventListener('click', function (){

        })
    }

    // reset button
    this.razButton = function () {
        let raz = document.createElement('button');
        raz.innerHTML = 'reset';
        document.body.appendChild(raz);
        raz.addEventListener('click', function () {

        })
    }
}

let newCount = new Counter();
newCount.display(0,10,0);
newCount.goButton();
newCount.razButton();