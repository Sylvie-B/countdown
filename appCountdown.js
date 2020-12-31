let Counter = function () {

    // display countdown
    this.display = function (hourCount, minCount, secCount) {
        let globalFrame = document.createElement('div');
        let hourFrame = document.createElement('div');
        let minFrame = document.createElement('div');
        let secFrame = document.createElement('div');

        setInterval(function (){
            let instant = new Date();
            hourCount = instant.getHours();
            minCount = instant.getMinutes();
            secCount = instant.getSeconds();

            console.log(instant);

            document.body.appendChild(globalFrame);
            globalFrame.appendChild(hourFrame);
            globalFrame.appendChild(minFrame);
            globalFrame.appendChild(secFrame);

            globalFrame.style.display = 'flex';
            hourFrame.innerHTML = parseInt(hourCount/10);
            hourFrame.innerHTML += hourCount - parseInt(hourCount/10) * 10 + ":";
            minFrame.innerHTML = parseInt(minCount/10)
            minFrame.innerHTML += minCount - (parseInt(minCount/10) * 10) + ":";
            secFrame.innerHTML = parseInt(secCount/10)
            secFrame.innerHTML += secCount - (parseInt(secCount/10) * 10);

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
    this.button = function () {
        let raz = document.createElement('button');
        raz.innerHTML = 'reset';
        document.body.appendChild(raz);
        raz.addEventListener('click', function () {

        })
    }

    // set date for user choice left time : param ms time => day, hour, min, sec, ms
    this.setEndTime = function (timeLeft) {
        let days = Math.floor(timeLeft / 1000 / 60 / 60 / 24);
        let hours = Math.floor( (timeLeft - (days * 1000 * 60 * 60 *24))/ 1000 / 60 / 60);
        let min = Math.floor((timeLeft - (days * 1000 * 60 * 60 * 24) - (hours * 1000 * 60 *60))/ 1000 / 60);
        let sec = Math.floor((timeLeft - (days * 1000 * 60 * 60 * 24) - (hours * 1000 * 60 *60) - (min * 1000 * 60))/ 1000);

    }
}

let newCount = new Counter();
newCount.display(0,0,0);
