function sumNumbers(input){
  let goalNumber = Number(input[0]);
  let sumOfNumbers = 0;
  let index = 1;
  let currentNumber = Number(input[index]);
  while(sumOfNumbers <=goalNumber){
    sumOfNumbers+=currentNumber;
    index++;
    currentNumber = Number(input[index]);
    if(index === (input.length)){
      console.log(sumOfNumbers);
      break;
    }
  }
}
