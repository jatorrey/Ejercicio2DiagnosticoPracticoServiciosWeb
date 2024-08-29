// 2. Reversión de cadena
// Torres Reyes Jaime Camil
function revertirFrase(frase) {
    return frase.split(" ").reverse().join(" ");
}

const frase = "Hola a todos";
console.log("Frase invertida:", revertirFrase(frase));