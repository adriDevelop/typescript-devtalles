(() => {

  interface Xmen {
    name: string;
    realName: string;
    mutantPower(id: number): string;
  }

  class Mutant implements Xmen {
    public name: string = "";
    public realName: string = "";

    mutantPower( id: number ): string {
      return this.name + ' ' + this.realName;
    }
    
  }

})