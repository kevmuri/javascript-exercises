const fibonacci = function(input) {
    let sequence = [0, 1]
    input = Number(input);

    if (input < 0) {
        return "OOPS";
    }

    for (let i = 2; i <= input; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }

    return sequence[input];
};

// Do not edit below this line
module.exports = fibonacci;
