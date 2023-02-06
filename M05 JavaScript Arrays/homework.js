/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0] ;
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length-1];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var masuno = array.map((num) => {return num+1});
   return masuno;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var palabraConcatenada = palabras.join(' ');
   return palabraConcatenada
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar True si está, o False si no está.
   // Tu código:
   var bandera= false;
   for (var i=0; i<array.length;i++) {
      if (elemento === array[i]) {
         bandera = true;
      }   
   }
    if (bandera){
      return true;
    }
    else {
      return false;
    }

}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var ac=0
   for (var i=0; i<arrayOfNums.length;i++){
      ac=ac+arrayOfNums[i];
   }
   return ac;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var i=0;
   var ac=0
   var prom=0;
   while (i<resultadosTest.length) {
      ac=ac+resultadosTest[i];
      i=i+1;
   }
   prom = ac/i;
   return prom;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var num=arrayOfNums[0];
   for (var i=0;i<arrayOfNums.length;i++) {
      if (num < arrayOfNums[i]){
         num = arrayOfNums[i];
      }
   }
   return num;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var cero=0;
   var producto=1;
     if (arguments.length===0) {
       return cero;
     }
     else {
       for (var i=0; i<arguments.length; i++ ) {
         producto=producto*arguments[i];
      }
     return producto;
     } 
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var mayorA18=0;
   for (var i=0; i<array.length;i++){
      if (array[i]>18) {
         mayorA18=mayorA18+1;
      }
   }

   return mayorA18;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia >=2 && numeroDeDia <=6 ) {
      var diaLaboral='Es dia laboral';
      return diaLaboral
   }
   else {
      var finDeSemana='Es fin de semana';
      return finDeSemana;
   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar True si el entero inicia con 9 y False en otro caso.
   // Tu código:
   const resp= num.toString().split('');
   const newResp = resp.filter(iterator => iterator[0] === '9')
   if (newResp[0] === '9') {
   return true;
   } else {
     return false;
   }
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar True.
   // Caso contrario retornar False.
   // Tu código:
   var primerElemento = array[0];
   for (var i=1; i < array.length;i++) {
      if (primerElemento === array[i]) { 
         return true;
      }
      else {
         return false;
      }
   }

}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   notOk = ['Marzo', 'Diciembre', 'Julio', 'Noviembre'];
   var meses = [];
   var j=0;
   var MesesPedidos= false;
   var noSeEncontraron = 'No se encontraron los meses pedidos'
   for (var i=0 ; i<array.length;i++){
      if (array[i] === 'Enero' || array[i] === 'Marzo' || array[i]=== 'Noviembre' ){
         meses[j] = array[i];
         j=j+1;
         MesesPedidos = true;
      }
   }

   if (j <= 2) {
      return noSeEncontraron;
   }
   else {
      return meses;
   }
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var TablaMultiplicar = [];
   for (var i=0; i <= 10; i++ ) {
      TablaMultiplicar[i] =  6*i;
   }
   return TablaMultiplicar;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var mayoresA100 = [];
   var j=0;
   for (var i=0; i < array.length; i++) {
      if (array[i] > 100) {
        mayoresA100[j] = array[i];
        j=j+1; 
      }
   } 
   return mayoresA100;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var array=[];
   var termino ='Se interrumpió la ejecución'
   var i=0;
   while (i < 10) {
      num =num +2
      array[i] = num;
      if (num === i ) {
         return termino;
         break; 
      }
      i=i+1;
   }
   return array;


}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var array= [];
   var i=0;
   do{
     num=num+2;
     array[i]=num;
     i=i+1;
     if (i === 5) { 
       continue;
     } 
   }while (i<9)
   return array;
  
 }

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
