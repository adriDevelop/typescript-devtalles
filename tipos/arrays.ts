(() => {

  const numbers: number[] = [1,2,3,4,5,6,7,8,9,10];

  const villians = ['Omega Rojo', 'Dormammu', 'Duende Verde'];

  villians.forEach(v => console.log(v.toUpperCase()));

  numbers.push(11);

  console.log(numbers);

})()