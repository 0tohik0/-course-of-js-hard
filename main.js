'use strict';

//задание 1
let lang = prompt('Выберите язык', 'ru');

if (lang === 'ru') {
    console.log('Понедельник' + ' ' + 'Вторник' + ' ' + 'Среда' + ' ' + 'Четверг' + ' ' + 'Пятница' + ' ' + 'Суббота' + ' ' + 'Воскресенье');
} else if (lang === 'en') {
    console.log('Monday' + ' ' + 'Tuesday' + ' ' + 'Wednesday' + ' ' + 'Thursday' + ' ' + 'Friday' + ' ' + 'Saturday' + ' ' + 'Sunday');
} else {
    console.log('Выберите ru или en');
};


switch (lang) {
    case 'ru': 
        console.log('Понедельник' + ' ' + 'Вторник' + ' ' + 'Среда' + ' ' + 'Четверг' + ' ' + 'Пятница' + ' ' + 'Суббота' + ' ' + 'Воскресенье');
        break
    case 'en': 
        console.log('Monday' + ' ' + 'Tuesday' + ' ' + 'Wednesday' + ' ' + 'Thursday' + ' ' + 'Friday' + ' ' + 'Saturday' + ' ' + 'Sunday');
        break
    default:
        console.log('Выберите ru или en');
        break
};

const language = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};

console.log(language[lang]);


//задание 2
let firstName = prompt('Введите имя требуемого человека');
let post = "Положение";

firstName === "Артем" ? (
    post = "директор",
    console.log(firstName + ' ', '-' + ' ' + post)
) : (
    firstName === "Александр" ? (
        post = "преподаватель",
        console.log(firstName + ' ', '-' + ' ' + post)
    ) : (
        post = "студент",
        console.log(firstName + ' ', '-' + ' ' + post)
    )
);

