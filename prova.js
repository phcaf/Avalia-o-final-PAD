// 1° Quesito

function someFun(parametro, callback) 
{
  callback(parametro.someProperty)
  return 1;
}

// 2° Quesito

function someFn(numero) 
{
const funçãoRetornar = (value) => 
{
  switch (value) 
   {
      case 3:
        return 4;
      case 1:
        return 5;
      case 5:
        return 10;
  }
}

  return funçãoRetornar;
}

// 3° Quesito

function calculator(numero1, numero2)
{
  return callback => callback(numero1, numero2);
}


// 5° Quesito

function tabua(numero3) {
  for (let i = 1; i = 10; i++)
  {
    console.log({numero3} X {i} = {numero3 * i})
  }
}
