document.addEventListener("DOMContentLoaded", function(){
    var circles = document.querySelectorAll('.circle');

    function setTimeOfDay(t) {
        document.querySelector('.wrapper').className = 'wrapper ' + t;
        localStorage.setItem('dayOrNight', t)
    }

    if (localStorage.getItem('dayOrNight')) {
        var dayOrNight = localStorage.getItem('dayOrNight');
        setTimeOfDay(dayOrNight)
    } else {
        localStorage.setItem('dayOrNight', 'day')
        setTimeOfDay('day')
    }

    circles.forEach(function(circle) {
        circle.addEventListener('click', function() {
            var dayOrNight = this.dataset.time;
            setTimeOfDay(dayOrNight)
        });
    })
});
