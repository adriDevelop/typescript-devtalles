(() => {

  interface Client {
    name: string;
    age?: number;
    address: Address;
    getFullAddress(id: string):string;
  }

  interface Address {
    id: number,
    zip: number,
    city: string
  }

  const client:Client = {
    name: 'Adrian',
    age: 25,
    address: {
      id: 1,
      zip: 14650,
      city: 'Bujalance'
    },
    getFullAddress(id: string){
      return 'hola'
    }
  }

})()