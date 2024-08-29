// 2. Reversión de cadena
// Torres Reyes Jaime Camil
function revertirFrase(frase) {
    return frase.split(" ").reverse().join(" ");
}

const frase = "Instituto Tecnologico de Tepic";
console.log("Frase invertida:", revertirFrase(frase));