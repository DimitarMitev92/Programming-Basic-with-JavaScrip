function invalidNumber (input){
    let num = Number(input[0]);

    if( (num !== 0 && num < 100) || (num !== 0 && num > 200)){
        console.log("invalid")
    }
}
