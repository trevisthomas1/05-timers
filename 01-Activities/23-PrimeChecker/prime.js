// var primeChecker = function (num) {
//     for (var i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false;
//         } else {
//             return true;
//         }
//     }
// };

// console.log(primeChecker(43));

var primeChecker = function () {
    var num = prompt("Type in a number and hit enter!");
    var isPrime = true;
    var temp = parseInt(num);

    for (var i = 2; i < temp; i++) {
        if (temp % i === 0) {
            isPrime = false;
        }
    };

    if (isPrime === false) {
        alert("Not Prime!");
    } else {
        alert("Prime!");
    };
};

$(window).ready(function () {
    primeChecker();
});