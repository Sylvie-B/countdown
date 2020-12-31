let Counter = function (date, hMonth, year) {
    this.date = date;
    this.month = hMonth - 1;
    this.year = year;

    // display countdown
    this.display = function () {
        let finalDate = new Date(this.year, this.month, this.date)
        let instant = new Date();
        let interval = finalDate - instant;
        this.setEndTime(interval);

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

let clock = new Counter(6, 1, 2021);
clock.goButton();
clock.button();
clock.display();
