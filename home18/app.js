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

var mas = generateArray(prompt('Введите максимальную длину массива'));
for (i=0; i<mas.length; i++){
    for (j=0; j<mas.length; j++){
        if (mas[i]>mas[j]){
            var a = mas[i];
            mas [i]= mas [j];
            mas [j]= a;}
    }
}



console.log(mas);
