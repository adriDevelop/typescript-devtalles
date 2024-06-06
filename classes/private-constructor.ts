(() => {

  class Apocalipsis{

    static instance: Apocalipsis;

    private constructor(
      public nombre:string
    ){}

    static callApocalipsis(nombre:string):Apocalipsis{
      if ( !Apocalipsis.instance ){
        Apocalipsis.instance = new Apocalipsis(nombre);
      }
      return Apocalipsis.instance;
    }


  }

  const apocalipsis = Apocalipsis.callApocalipsis('Andrea');
  const apocalipsis2 = Apocalipsis.callApocalipsis('Adrian');

  console.log(apocalipsis);
  console.log(apocalipsis2);

})()