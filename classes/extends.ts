(() => {

  class Avenger{
    constructor(
      public name: string,
      public realName: string,
    ){
      console.log('Constructor Avenger llamado!');
    }

    protected getFullName(){
      return `${ this.name } ${ this.realName}`;
    }
  }

  class Xmen extends Avenger{
    constructor(
      public isMutant: boolean,
      public realName: string,
      public name: string
    ){
      super(name, realName);
      console.log('Constructor Xmen llamado');
    }

    get fullName(){
      return `${ this.name } - ${ this.realName }`
    }

    set fullName(name: string){
      this.name = name;
    }

    getFullNameDesdeXmen(){
      console.log(super.getFullName());
    }
  }

  const wolverine = new Xmen(true, 'Wolverine', 'Logan');
  wolverine.getFullNameDesdeXmen();
  console.log(wolverine.fullName);
  console.log(wolverine.fullName = 'Adrian');

})()