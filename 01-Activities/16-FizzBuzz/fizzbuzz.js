var fizzBuzz = function () {
    for (var i = 1; i <= 100; i++) {
        if (i / 3 === 0 && i / 5 === 0) {
            console.log(i);
            console.log("Fizz Buzz");
        } else if (i % 3 === 0) {
            console.log(i);
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log(i);
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
};

fizzBuzz();