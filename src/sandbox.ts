let character : string
let age : number;
let isLoggedIn: boolean


//
age = 40
isLoggedIn = true

let ninjas : string[] = []

ninjas.push("rice")

// union types
let mixes : (string | number )[]
let mixed2 : string | number

let obj : {
    name: string,
    age: number,
    sex: string
}

let mixed3 :any[] = []

let ninjaObj : {
    name: any
}

//function

let greet: Function

greet = () => {
    console.log("greetings")
}

const add = (a: number, b: number, c : number|string = 10): void => {
    console.log(a+b)
}

add(1,2, "ade")

const minus = (a: number, b: number): number => {
    return a-b
}

//type
type StringOrNum = string | number;
type ObjName = {
    name: string,
    uid: StringOrNum
}
const logDetails = (uid: StringOrNum, item : string)=> {
    console.log(`${item} has a uid of ${uid}`);
}

const greeter = ( user: ObjName ) =>  {
    console.log(`${user.name} says hello `)
}