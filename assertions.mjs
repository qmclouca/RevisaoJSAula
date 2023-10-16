import * as assert from 'assert';
print();
//comparação normal
// function print() {
//     setInterval(
//         () => {
//             try{
//                 assert.equal(3+5,8);
//                 console.log("Resultado está correto!");
//             } catch(error){
//                 console.log("Erro: ", error.message);
//             }
//         }, 10000
//     );
// }
// function print() {
//     setInterval(
//         () => {
//             try{
//                 assert.deepEqual({a:1, b:"tipo",c: 8}, {a:1, b:"tipo",c: 8});
//                 console.log("Resultado está correto!");
//             } catch(error){
//                 console.log("Erro: ", error.message);
//             }
//         }, 5000
//     );
// }
function divide(x,y){
    if(y === 0){
        throw new Error("Não é possível dividir um número real por 0.");
    }
    return x/y;
}

function print() {
    setInterval(
        () => {
            try{
                divide(5,0);
                assert.fail("Não é possível dividir um número real por 0.");
            } catch(error){
                console.log("Erro: ", error.message);
            }
        }, 5000
    );
}