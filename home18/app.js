function generateArray(k) {
    var length = Math.round(Math.random() * k),
        arr = new Array(length),
        limits = requestLimits();
    for (var i = 0; i < length; i++) {
        arr[i] = getRandomNumber(limits.from, limits.to);
    }
    return arr;

}

function getRandomNumber(from, to) {
    return Math.round(from + Math.random() * (to - from));
}

function requestLimits() {
    var from = Number(prompt('Введите от:')),
        to;
    do {
        to = Number(prompt('Введите до:'));
    } while (to <= from);
    return {
        from: from,
        to: to
    };

}

var arr = generateArray(prompt('Введите максимальную длину массива'));
for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            var a = arr[i];
            arr[i] = arr[j];
            arr[j] = a;
        }
    }
}

console.log(arr);
