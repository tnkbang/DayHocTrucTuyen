window.onload = function () {
    $("body").addClass("loaded");
};

$(document).ready(function () {
    $("body").backgroundCycle({
        imageUrls: [
            "/Content/Img/Resources/photo-02.jpg"
        ],
        fadeSpeed: 2000,
        duration: -1,
        backgroundSize: SCALING_MODE_COVER
    });
});
function loopError(a, b, c) {
    function randomNum() {
        "use strict";
        return Math.floor(Math.random() * 9) + 1;
    }
    var loop1, loop2, loop3, time = 30, i = 0, number, selector3 = document.querySelector('.thirdDigit'), selector2 = document.querySelector('.secondDigit'),
        selector1 = document.querySelector('.firstDigit');
    loop3 = setInterval(function () {
        "use strict";
        if (i > 40) {
            clearInterval(loop3);
            selector3.textContent = a;
        } else {
            selector3.textContent = randomNum();
            i++;
        }
    }, time);
    loop2 = setInterval(function () {
        "use strict";
        if (i > 80) {
            clearInterval(loop2);
            selector2.textContent = b;
        } else {
            selector2.textContent = randomNum();
            i++;
        }
    }, time);
    loop1 = setInterval(function () {
        "use strict";
        if (i > 100) {
            clearInterval(loop1);
            selector1.textContent = c;
        } else {
            selector1.textContent = randomNum();
            i++;
        }
    }, time);
}

function backPage() {
    window.history.back()
}