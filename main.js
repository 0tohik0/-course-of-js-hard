'use strict';

let arr = ['432', '2364', '64', '543', '276', '449'];

for (let i = 0; i < arr.length; i++) {
  if (arr[i].startsWith('2') || arr[i].startsWith('4')) {
    console.log(arr[i]);
  } else {
      console.log('Нет совпадений');
  }
}


newPrime:
for (let a = 2; a <= 100; a++) {

  for (let b = 2; b < a; b++) {
    if (a % b == 0) continue newPrime;
  }

  console.log(a + ' - ' + "Делители этого числа: 1 и" , a)
}