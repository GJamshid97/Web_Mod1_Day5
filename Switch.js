
let language = "FR" // it, fr, ....

let greeting
if (language === "EN") {
    greeting = "Hello!"
} else if (language === "FR") {
    greeting = "Salut"
} else if (language === "ES") {
    greeting = "Hola"
 {
    greeting = "Hello!"
}
}
console.log(greeting)

switch (language) {
    case "EN": greeting = "Hello!"; break
    case"IT": greeting = "Ciao!"; break
    case "FR": greeting = "Salut!"; break
    case "ES": greeting = "Hola!"; break
    case "PT": greeting = "OLá!"; break
    case "DE": greeting = "Hallo!"; break
    default: greeting = "Hello!"; break
    }
    console. log(greeting)
