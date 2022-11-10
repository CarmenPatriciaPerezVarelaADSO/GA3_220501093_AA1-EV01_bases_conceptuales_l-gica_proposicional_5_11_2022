addEventListener("DOMContentLoaded",(e)=>{
    console.log((2 * 5) < 8 || ((4 * 6) > (2 * 5) ));
})

// 1.	Ejercicio 
// (2 * 5) < 8    OR        ((4 * 6) > (2 * 5) ) 
// 10      < 8       v         24 > 10
// 10      < 8       v         24 > 10


// Identificar el problema
// Se trata de calcular la operación y demostrar si el resultado es menor que 8 o si el segundo resultado es mayor que 10. 

// Descomponer el enunciado
// 10 es menor que 8 o 24 es mayor que 10

// p  : 10 es menor que 8          f
// q :  24 es mayor que 10        v

// Determinar los casos
// p v q

// Evaluar los posibles casos derivados del enunciado anterior.
// p	Q	p v q
// V	V	V
// V	F	F
// F	V	F
// F	F	F


console.log((4+ 5) < 3 && ( ( 5 * 5 ) + (4 + 25 < 3) ))

// 2.	Ejercicio 
// (4+ 5) < 3 AND ( ( 5 * 5 ) + (4 + 25 < 3) ) 
// 9        <  3   ∧    (25) + (29<3)
// 9        <  3   ∧    54<3


// Identificar el problema
// Se trata de calcular la operación y demostrar si cualquiera de los dos resultados es menor que 3 o si el segundo resultado. 

// Descomponer el enunciado
// 9 es menor que 3 y 54 es menor que 3

// p: 9 es menor que 3      f
// q: 54 es menor que 3    f


// Determinar los casos
// p ∧ q

// Evaluar los posibles casos derivados del enunciado anterior.

// p	Q	p ∧ q
// V	V	V
// V	F	F
// F	V	F
// F	F	F


