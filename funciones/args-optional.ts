(()=>{

  const devuelveValores = (name:string, lastName?:string) => {

    return `${ name }, ${ lastName }`

  }

  console.log(devuelveValores('Adrian'));

})()