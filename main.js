"use strict";

let lang = prompt("ru", "en");


if (lang == "ru") {
    console.log("Понедельник" + " " + "Вторник" + " " + "Среда" + " " + "Четверг" + " " + "Пятница" + " " + "Суббота" + " " + "Воскресенье");
} else if (lang == "en") {
    console.log("Monday" + " " + "Tuesday" + " " + "Wednesday" + " " + "Thursday" + " " + "Friday" + " " + "Saturday" + " " + "Sunday");
} else {
    console.log("Ошибка");
};


switch (lang) {
    case "ru":
        console.log("Понедельник" + " " + "Вторник" + " " + "Среда" + " " + "Четверг" + " " + "Пятница" + " " + "Суббота" + " " + "Воскресенье");
        break;

    case "en":
        console.log("Monday" + " " + "Tuesday" + " " + "Wednesday" + " " + "Thursday" + " " + "Friday" + " " + "Saturday" + " " + "Sunday");
        break;

    default:
        console.log("Ошибка");
        break;
};


const language = {
    ru: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
    en: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
};
console.log(language[lang]);


let namePerson = prompt("Введите имя");
let post = "Положение";

namePerson === "Артем" ? (
    post = "директор",
    console.log(namePerson + ': ' + post)
) : (
    namePerson === "Александр" ? (
        post = "преподаватель",
        console.log(namePerson + ': ' + post)
    ) : (
        post = "студент",
        console.log(namePerson + ': ' + post)
    )
);