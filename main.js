'use strict';

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
}
