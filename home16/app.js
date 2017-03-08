var bInput = prompt('Введите фамилию'),
    aInput = prompt('Введите имя'),
    cInput = prompt('Введите отчество'),
    ageInput = Number(prompt('Введите возраст')),
    d = ageInput * 365,
    gender = confirm('Выберите пол: ок - муж, отмена - жен') ? 'муж' : 'жен',
    c = ageInput + 5,
e;

if (ageInput > 60) {
    e = 'да';
}
else {
    e = 'нет';
}

alert('Ваше ФИО: ' + bInput + ' ' + aInput + ' ' + cInput + '\nваш возраст в годах: ' + ageInput + '\nваш возраст в днях: ' + d
    + '\nчерез 5 лет вам будет: ' + c + '\nваш пол: ' + gender + '\nвы на пенсии: ' + e);

var gender1 = confirm('Ваш пол мужской?');
if (gender1) {
    gender1 = 'муж';
    /*alert('Ваше ФИО: ' + bInput + ' ' + aInput + ' ' + cInput + '\nваш возраст в годах: ' + ageInput + '\nваш возраст в днях: ' + d
        + '\nчерез 5 лет вам будет: ' + c + '\nваш пол: ' + 'муж');*/
}
else {
    gender1 = 'жен';
    /*alert('Ваше ФИО: ' + bInput + ' ' + aInput + ' ' + cInput + '\nваш возраст в годах: ' + ageInput + '\nваш возраст в днях: ' + d
        + '\nчерез 5 лет вам будет: ' + c + '\nваш пол: ' + 'жен')*/
}
alert('Ваше ФИО: ' + bInput + ' ' + aInput + ' ' + cInput + '\nваш возраст в годах: ' + ageInput + '\nваш возраст в днях: ' + d
    + '\nчерез 5 лет вам будет: ' + c + '\nваш пол: ' + gender1 + '\nвы на пенсии: ' + e);


