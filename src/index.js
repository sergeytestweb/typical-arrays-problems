exports.min = function min(array) {
    if (array && array.length) {
        return Math.min.apply(null, array);
    } else {
        return 0;
    }
};

exports.max = function max(array) {
    if (array && array.length) {
        return Math.max.apply(null, array);
    } else {
        return 0;
    }
};

exports.avg = function avg(array) {
    if (array && array.length) {
        let avr = 0;
        for (let elem of array) {
            avr += elem / array.length;
        }
        return avr.toFixed(2);
    } else {
        return 0;
    }
};
