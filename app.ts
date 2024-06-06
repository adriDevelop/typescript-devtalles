(() => {

    // Tipos
    const batman: string = 'Bruce';
    const superman: string = 'Clark';
  
    const existe: boolean = false;
  
    // Tuplas
    const parejaHeroes: [typeof batman, typeof superman] = [batman,superman];
    const villano: [string, number, boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    enum Fuerzas {
      flash = 5,
      batman = 1,
      acuaman = 0,
      superman = 100
    }
    const fuerzaFlash: Fuerzas = Fuerzas.flash;
    const fuerzaSuperman: Fuerzas = Fuerzas.superman;
    const fuerzaBatman: Fuerzas = Fuerzas.batman;
    const fuerzaAcuaman: Fuerzas = Fuerzas.acuaman;
  
    // Retorno de funciones
    function activar_batiseñal(): string{
      return 'activada';
    }
  
    function pedir_ayuda(): void{
    console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = ( poder as string).length;
    console.log( largoDelPoder );
  
  })()
  
  