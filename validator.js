
const validator = {
  isValid,
  maskify
};

// Enmascarar número de tarjeta.
function maskify(creditCardNumber) {
  //Por medio de la expresion regular despues del cuarto dígito comienzo a enmascarar con # (Dejando los ultimos cuatro descubiertos)
  let maskifyString = creditCardNumber.replace(/.(?=.{4})/g, "#");
  return maskifyString //retorna el reemplazo de los digitos por #
}

// Validar tarjeta.
function isValid(creditCardNumber) {
  // Convierto el string a array, luego lo doy vuelta y mapeo convirtiendo en número el string.
  let arrayValidation = creditCardNumber.split('').reverse().map(Number);
  //console.log(arrayValidation)

  const arrayNotmultiplied = arrayValidation.filter(function (_, index) {
      return index % 2 == 0;
  });
  //console.log(`Retorna los números que no se multiplican${arrayNotmultiplied}`)

  const arrayIfMultiplied = arrayValidation.filter(function (_, index) {
      return index % 2 !== 0;
  });
  //console.log(`Retorna los números que se multiplican ${arrayIfMultiplied}`)

  // Multiplica los números x 2 y el resultado si resulta en dos digitos se suman entre si.
  const arrayMultiplicate = arrayIfMultiplied.map(function (element) {
      let num = element;
      num = num * 2;
      if (num >= 9) {
          num = num - 9;
      }
      return num;
  });
  //console.log(`Números multiplicados ${arrayMultiplicate}`)

  const arrayCombine = arrayNotmultiplied.concat(arrayMultiplicate);

  //console.log(`Muestra los dos array juntos ${arrayCombine}`);

  // Sumar todos los números del array
  let sum = 0;
  for (let i = 0; i < arrayCombine.length; i++) {
      sum = sum + arrayCombine[i];
  }
  // //console.log(sum)

  if (sum % 10 == 0) {
      return true;
  } else {
      return false;
  }
}

export default validator;