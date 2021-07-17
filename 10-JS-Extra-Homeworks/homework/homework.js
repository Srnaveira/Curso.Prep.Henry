// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var array = Object.entries(objeto);
  return array;

  //var array = [];
  //for(var clave in objeto){
  //      array.push([clave, objeto[clave]]);
  //}
  //return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var array= {};
  for(var i = 0; i <string.length; i++){
      if(!array[string[i]]){
        array[string[i]] = 0;
      }
    array[string[i]] = array[string[i]] + 1;    
  }
  return array;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var suma = '';
  var suma2 = '';
  for (i = 0; i < s.length ; i++ ){
          if(s.toUpperCase()[i] === s[i]) {
                      suma = suma + s[i];
              } else {
                      suma2 = suma2 + s[i];
                    }  
  }
  return suma + suma2;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> 
  //Escribe tu código aquí
  // var rts = '' //almaceno la str invertida
  // var array = [];
  // for (var i = str.length -1; i >= 0 ; i--){ 
  //       rts += str[i]; // con este for invierto el contenido
  // }
  // rts = rts.split(' ');  // convierte el string de texto de esto "!esolc si egnellahC yrneH ehT" en esto ["!esolc" ,"si" ," egnellahC" , "yrneH","ehT"]
  // for(var i = rts.length -1; i >= 0 ; i--){
  //       array.push(rts[i]); //recorro el rts y lo agrego al array invertido
  // }
  // return array.join(' '); // lo vuelvo a tranformar en una string cambiando las "," por espacios " "

  var sumacaracter = '';
  var sumacaracter2 = '';
  for(var i = 0; i <= str.length; i++){
             if ((str[i] != ' ') && (i != str.length)){
                            sumacaracter = str[i] + sumacaracter;
                    } else {
                            if(str[i] === ' '){
                                                sumacaracter2 = sumacaracter2 + sumacaracter + str[i];
                                                sumacaracter = ''
                                      } else {
                                                sumacaracter2= sumacaracter2 + sumacaracter;
                                              }
                            }
  }
return sumacaracter2;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var oremun = '';
  var temporal = numero.toString();
  for(var i = temporal.length -1 ; i >= 0; i--){
          oremun = oremun + temporal[i];
  }
  //lo de abajio funciona ya que no uso === si usara ese metodo no puede comparar un numero contra una
  //string por tal motivo lo transformo con el metodo parseInt():
  //oremun = parseInt(oremun); // transforme la strin en un mumero como ambos son numeros puedo usar el ===.
  if( numero == oremun){ 
           return 'Es capicua';
   } else {
           return 'No es capicua';
   }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

