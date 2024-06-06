type Automovil = {
  carroceria: string;
  modelo: string;
  antibalas: boolean;
  pasajeros: number;
  disparar?: () => void;
};

// Objetos
const batimovil: Automovil = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

const bumblebee: Automovil = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};


// Villanos debe de ser un arreglo de objetos personalizados
type Villian = {
  nombre:string;
  edad?:number;
  mutante:boolean;
}

const lex: Villian = {
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
}

const eri: Villian = {
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
}

const jam: Villian = {
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}

const villanos: Villian[] = [lex,eri,jam];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
type charles = {
  poder:"psiquico",
  estatura: 1.78
};

type apocalipsis = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: (charles|apocalipsis);

mystique = {
  poder:"psiquico",
  estatura: 1.78
};
mystique = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
};

