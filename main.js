let num = 266219;
let arr = 1;

num.toString().split('').forEach(elem => arr *= elem); //в строку из числа, разбиваем на массив и перемножаем

let stn = arr ** 3; //массив в 3 степени

console.log('array: ', arr); 

console.log(stn);
console.log(stn.toString().substring(2,0));
