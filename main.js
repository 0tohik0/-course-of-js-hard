'use strict';

let test = prompt('Введите аргумент', 'name');

function estimationArgumens (e) {
    if (typeof e !== 'string') {
        alert('Вы ввели не строку');
    } else if (typeof e === 'string' && e.length < 30) {
        console.log('Введена строка без пробелов' + ': ' + e.trim());
    } else if (typeof e === 'string' && e.length > 30) {
        console.log('Строка больше 30 символов' + ': ' + e.trim().substring(0, 30) + '...');
    }
};

estimationArgumens(test);

