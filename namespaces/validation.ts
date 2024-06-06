
namespace Validations {

  export const validateText = (text:string) => {
    return (text.length > 3) ? true : false;
  }

  export const validateDate = (fecha:Date) : boolean =>{
    return (isNaN(fecha.valueOf()))
    ? false : true;
  }

}