//let, const e var

const string = "Leo Serrao";
const number = 5;
const boolean = true;
const Obj = {name: 'Leo Serrao'};

const nullVar = null;
const undefinedVar = undefined;
interface Address{
    address: string;
    city: string;
}

//type
interface MyInterface {
    name: string;
    prop1: number;
    metodo: () => string;
    address?: Address;
}

const Obj1: MyInterface = {
    name: "Leo Serrao",
    prop1: 5.5,
    metodo(){
        return "Leo Serrao"
    },
    address: {
        address: "Rua x",
        city: "Laranjal do Jari"
    }
}

//Funções
function soma(a:number, b:number): number {
    return a+b;
}

console.log(soma(5,3));

//Função com um ou mais parâmetros não obrigatórios
function funcao(a:number, b?:number): number {
    return a+b;
}

console.log(funcao(5));