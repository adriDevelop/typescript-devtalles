(()=>{

  const devuelveValores = (name:string, lastName?:string, upper:boolean = false):string => {
  
    if(upper){
      return `${ name }, ${ lastName }`.toUpperCase();
    } else {
      return `${ name }, ${ lastName }`;
    }

  }

  console.log(devuelveValores('Adrian', 'Velasco'));

})()