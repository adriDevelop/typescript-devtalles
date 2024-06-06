(() => {

  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
  }

  const avengers:Avengers = {
    nick: 'Samuel L. Jackson',
    ironman: 'Robert Downey Jr.',
    vision: 'Paul Bettany',
    activo: true,
    poder: 1500
  }

  const returnAvenger = ({ ironman }:Avengers) => {
    console.log(ironman);
  }

  const { poder, vision } = avengers
  console.log(poder, vision.toUpperCase())
  returnAvenger(avengers);

  const avengersArr = [ 'Capitan América', 'Ironman', 'Hulk' ];

  const [ capitan, ironman,  ] = avengersArr;
  console.log({ ironman, capitan });
  
})()