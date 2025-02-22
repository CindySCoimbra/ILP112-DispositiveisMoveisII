//Aula de Dispositivos Moveis II- 22/02/2024
//Professor: Thomas da Costa
// console.log("Hello World!");

//Exemplo I- Declaração de variaveis
const c=50; //constante(const), variavel imutável- não muda durante seu tempo de execução

var a= 1; //variaveis globais, podem ser alteradas durante seu tempo de execução
let b=2; // let são variaveis locais, podem ser alteradas durante seu tempo de execução
let d = 10;

console.log(a,b,c,d); // Console.log é o comando de saída de dados

//Exemplo II- Tipos de Variaveis- Numerais
const ano= 1991;
let atrasoEmSegundos= 0.00016;
let area=(16*3.14);
let metadeArea= area/2;

console.log("Ano:" + ano) //1991
console.log("Atraso em segundos:" + atrasoEmSegundos); // 0.00016;
console.log("Area:" + area); // 50.24
console.log("Tipo:" + typeof metadeArea); // number

let a1 = 10; //decimal
let b2 = 0x10; //hexadecimal
let c3 = 0o10;//octal
let d4 = 0b10; //binario

console.log(a); // 10
console.log(b); // 16
console.log(c); // 8
console.log(d); // 2

let x= (9e3);
let y= (123e-5);

console.log(x);//9000
console.log(y);//0.00123

let z = 0x21;
console.log(z);

//Exemplo III- Tipos de Variaveis- String e Ttpeof
let pais= "Brasil";
let continente= 'America do Sul';

console.log(pais); //Brasil
console.log(typeof pais); //string
console.log(continente); //America do Sul
console.log(typeof continente); //string

let message1= "O navio 'Mars' fez escala no porto.";
let message2= 'Chuva forte passará perto da cidade de São Paulo.';

console.log(message1); //O navio 'Mars' fez escala no porto.
console.log(message2); //Chuva forte passará perto da cidade de São Paulo.

//Exemplo IV- String- Templestes literiais
let nome = "João";
let idade = 30;

//Usando template literais
let mensagem = `Olá, ${nome}! Você tem ${idade} anos.`;
console.log(mensagem);
//Exibe: Olá, joão! Você tem 30 anos.

//Exemplo V- String Multilinhas
let multiLineString = 'Esta é uma string que abrange múltiplas linha sem a necessidade de usar \n (caracteres de escape).';
console.log(multiLineString);

//Exemplo VI- String- Outras operações
let texto = "Olá, mundo!";

console.log(texto.startsWith( "Olá"));//true
console.log(texto.endsWith("mundo!"));//true
console.log(texto.includes("mundo"));//true
console.log("abc".repeat(3));//abcabcabc

//Exemplo VII- String- String Raw
//let caminho = String.raw'C:\Users\Nome\Deocuments';
//console.log(caminho);//Exibe: C:\Users\Nome\Documents

//Exemplo VIII- String- Outras Operações
let texto0= "javaScript";
console.log(texto.charAt(4));//Exibe: 5
//chartAT retorna o caractere na posição especificada

let frase1 = "O gato subiu no telhado e depois pulou.";
console.log(frase1.indexOf("gato")); //Exibe: 2
//indexOf retorna a posição do PRIMEIRO caractere especificado
console.log(frase1.lastIndexOf("pulou"))//Exibe:37
//lastIndexOf retorna a posição do ULTIMO caractere especificado

let palavra = "abcdefgh";
console.log(palavra.substring(2,5));//Exibe: cde
//substring retorna uma parte da string especificada

let texto1 = "Esta é uma string";
console.log(texto1.slice(5,7)); //Exibe: é
//slice retorna uma parte da string especificada

let lista="maça,banana,uva,melancia";
let frutas = lista.split(",");
console.log(frutas); //Exibe: [ 'maça', 'banana', 'uva', 'melancia' ]
//split retorna um array a partir da string especificada

let frase2 = "O JavaScript é incrivel";
let novaFrase = frase2.replace("JavaScript", "Python");
console.log(novaFrase); //Exibe: O Python é incrivel
//replace substitui uma parte da string por outra

let texto2 = "JavaSCRIPT";
console.log(texto2.toLowerCase()); //Exibe: javascript
//toLowerCase converte todos os caracteres da string para minúsculas

console.log(texto2.toUpperCase());//Exibe: JAVASCRIPT
//toUpperCase converte todos os caracteres da string para maiúsculas

let texto3 = "Espaços ao redor";
console.log(texto3.trim()); //Exibe: Espaços ao redor
//trim remove os espaços em branco no início e no final da string

//Exemplo IX- Tipos de variáveis- Boolean
let isDataValida= true;
let isGameOver= false;

console.log(false); //false
console.log(typeof false); //boolean
console.log(isGameOver); //false
console.log(typeof isGameOver); //boolean

//Exemplo X- Funções em JavaScrip
let resultadoSoma;

function soma(a,b){
  return a +b;
}
//As funções são blocos de código que podem ser chamados e reutilizados. Elas permitem a organização do código e a reutilização de código.
resultadoSoma= soma(1,2);
console.log("Resultado da Soma:" + resultadoSoma);//Exibe: Resultado da Soma: 3

//Exemplo XI- Funções em JavaScript
let multiplicar = function(a,b){
  return a * b;
}

console.log(multiplicar(4,3));//Exibe: 12

//Exemplo XII- Objetos em JavaScript
//objetos são conjuntos de pares chave-valor. São valores em Json que podem ser acessados por meio de chaves.

let usuario1={}
console.log(usuario1);
console.log(typeof usuario1);

let usuario2={
  nome: "João",
  sobrenome: "da Silva",
  idade: 28,
  email:"joão@email.com"
}
console.log(usuario2.nome+ " " + usuario2.sobrenome); //Exibe: João da Silva
console.log(usuario2.idade); //Exibe: 28
console.log(usuario2.email); //Exibe: joão@email.com

let usuario3={
  nome:"Maria",
  sobrenome:"da Silva",
  idade:25,
  email:"maria@email.com"
}

console.log(usuario3.nome+ " " + usuario3.sobrenome); //Exibe: Maria da Silva
usuario3.idade = 30;
console.log(usuario3.idade); //Exibe: 30

//Exemplo XIII- Objetos em JavaScript
let carro={
  marca: "Toyota",
  modelo:"Corolla",
  acelerar:function(){
    console.log("O carro está acelerando");
  }
};
carro.acelerar(); //Exibe: O carro está acelerando
//Nesse exemplo, o objeto carro tem três propriedades: marca, modelo e acelerar. Aqui podemos notar que a função acelerar está dentro do objeto carro. Porém é um objeto unico e exclusivo da variavel carro.