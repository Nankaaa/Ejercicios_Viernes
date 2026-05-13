/* 1. Crea dos variables: una con tu nombre y otra con tu
apellido. Imprime ambos juntos en un solo console.log() */

let nombre ="Nancy";
let apellido ="Pérez";
console.log(nombre, apellido);
console.log(nombre +" "+ apellido);
console.log(`${nombre} ${apellido}`); 

/*2. Crea una variable con un número.
Súmale 5, luego multiplícalo por 3 e imprime 
el resultado.*/
let numero1 = 5;
let numero2 = 3;

console.log((numero1 + 5) * 3);

/* 3. Crea una variable con tu comida favorita 
e imprímela en consola*/
let comidaFavorita = "zapallo italiano con arroz";
console.log(comidaFavorita);

/* 4. Crea dos variables `a = 10` y `b = 3`
    
    Imprime:
    
    - La suma
    - La resta
    - La multiplicación
    - El resultado del módulo (`%`) // resto de división
    - Ahora cambia los valores por tipo de datos string
 y luego string y number ¿Qué sucede en cada uno? */

 let a = 10  // a tiene un valor de 10;
 let b = 3 // b tiene un valor 3;

 console.log(a + b);
 console.log( a - b);
 console.log(a * b);
 console.log(a % b);

 console.log("10" + "3"); // no realiza la operación de suma, resulta 103 al escribir string
 console.log("10" - "3"); // realiza la resta a pesar de ser variable string
 console.log("10" * "3"); // realiza la multiplicación a pesar de ser variable string
 console.log("10" % "3"); // realiza la división entregando el residuo

 console.log("10" + 3); // no realiza la operción de suma, 103 es literal lo que arroja al ser string ambos números 
 console.log("10" - 3); // realiza la resta 
 console.log("10" * 3); // realiza la multiplicación
 console.log("10" % 3); // realiza la división resultando 1 como resto

 /* conclusion: en los ejercicios anteriores, todas las operaciones
 matemáticas se logran realizar excepto la primera, en ambas ocasiones
 el símbolo + no se considera como un operador matemático ,
 si no como un operador de concatenación. De tal modo que,
  el + une dos cadenas de texto "string" en el primer caso y 
  en el segundo caso une una cadena de texto con un numero, 
  prevaliendo el texto literal, antes que la operación, esto
  dado que el sistema no reconoce realizar operaciones con palabras,
  si no con números*/

 /* 5. Crea una variable `edad = 15`
    
    Imprime si:
    
    - es mayor a 10
    - es menor a 18 */

let edad = 15;

console.log(edad > 10 && edad < 18); 





















