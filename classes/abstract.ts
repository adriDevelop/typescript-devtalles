(() => {

  abstract class Mutante{
    constructor(
      public name:string,
      public realName:string
    ){}
  }

  class Xmen extends Mutante {

    salvarMundo(){
      return `El mundo ha sido salvado!`;
    }

  }
  class Villian extends Mutante{

    conquistarElMundo(){
      return `El mundo ha sido conquistado`;
    }
  }

  const wolverine = new Xmen('Wolverine', 'Logan');
  const magneto = new Villian('Magneto', 'Magnus');

  console.log(wolverine.salvarMundo());
  console.log(magneto.conquistarElMundo());

})()