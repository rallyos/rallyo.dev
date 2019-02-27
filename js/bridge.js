document.addEventListener("DOMContentLoaded", function(){
    var circles = document.querySelectorAll('.circle');

    function setTimeOfDay(t) {
        document.querySelector('.wrapper').className = 'wrapper ' + t;
        localStorage.setItem('timeOfDay', t)
    }

    function getTimeOfDay() {
        var d = new Date()

        if (d.getHours() > 19 || d.getHours() < 7) {
            return 'night';
        }

        return 'day';
    }



    if (localStorage.getItem('timeOfDay')) {
        setTimeOfDay(localStorage.getItem('timeOfDay'));
    } else {
        setTimeOfDay(getTimeOfDay());
    }

    circles.forEach(function(circle) {
        circle.addEventListener('click', function() {
            var dayOrNight = this.dataset.time;
            setTimeOfDay(dayOrNight);
        });
    })



});
