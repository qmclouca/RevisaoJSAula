//Object.assign(): Copia valores de propriedades de um ou mais objetos fontes para um objeto destino
const target = {a: 1};
// const source = {b: 2, c: 3};
// const source2 = {d: 4, e: 5};

// Object.assign(target, source, source2);
// console.log(target);
// console.log(source);

//Object.create(): Cria um novo objeto com o protótipo e propriedades especificados
// const prototypeObj = { greet: () => "Hello" };
// const p2 = { teste2: () => "teste2",
//              teste3: () => "test3" };
// const newObj = Object.create(prototypeObj);
// const newObjTeste = Object.create(p2);
// console.log(newObj.greet());

// console.log(newObjTeste.teste2());
// console.log(newObjTeste.teste3());

//Object.defineProperty(): Adiciona a propriedade nomeada descrita por um determinado descritor a um objeto
// Object.defineProperty(target, 'd', {
//     value: 4,
//     writable: true,
//     enumerable: true,
//     configurable: true
// });
// console.log(target);

//Object.defineProperties(): Adiciona as propriedades nomeadas descritas pelos descritores próprios a um objeto
Object.defineProperties(target, {
    'e': {value: 5, writable: true, enumerable: true, configurable: true},
    'f': {value: 6, writable: true, enumerable: true, configurable: true}
});
// console.log(target.e);
// console.log(target.f);
// console.log(target);

//Object.entries(): Retorna uma matriz contendo todos os pares [chave, valor] das propriedades próprias enumeráveis de um determinado objeto
//console.log("Entries: " + Object.entries(target));

//Object.keys(): Retorna uma matriz contendo os nomes de todas as propriedades próprias enumeráveis de um determinado objeto
//console.log("Keys: " + Object.keys(target));

//Object.values(): Retorna uma matriz contendo os valores de todas as propriedades próprias enumeráveis de um determinado objeto
//console.log("Values: " + Object.values(target));

// //Object.freeze(): Congela um objeto: outros códigos não podem excluir ou alterar nenhuma propriedade
// Object.freeze(target);
// target.e = 10;
// console.log(target);

// //Object.isFrozen(): Determina se um objeto foi congelado
// console.log(Object.isFrozen(target));

//Object.seal(): Impede que outros códigos excluam propriedades de um objeto
// const objetoSelado = {x: 10, y: 20};
// Object.seal(objetoSelado);
// objetoSelado.z = 30;
// console.log(objetoSelado);

//Object.isSealed(): Determina se um objeto está selado
// console.log(Object.isSealed(objetoSelado));

//Objec.hasOwnProperty: retorna se o objeto possui a propriedade especificada como uma propriedade própria (não herdada)
//console.log(target.hasOwnProperty('a'));