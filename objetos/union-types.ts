(() => {

  type Hero = {
    name: string;
    age?: number;
    powers: number[];
    getName?:() => string;
  }

  let myCustomVariable: (string | number | Hero) = 'Fernando';
  console.log(typeof myCustomVariable);

  myCustomVariable = 20;
  console.log(typeof myCustomVariable);

  myCustomVariable = {
    name: 'Adrian',
    age: 23,
    powers: [1]
  };
  console.log(typeof myCustomVariable);

})()