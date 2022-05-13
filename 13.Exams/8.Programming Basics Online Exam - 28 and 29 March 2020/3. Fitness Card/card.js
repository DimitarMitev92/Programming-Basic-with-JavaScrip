function fitnessCard (input){
    let sumHave = Number(input[0]);
    let gender = (input[1]);
    let age = Number(input[2]);
    let sport = input[3];

    price = 1;
    if(age <= 19){
        price = 0.8;
    }

    if(sport === "Gym"){
        if(gender === "m"){
            price*=42;
        }else if(gender === "f"){
            price*=35;
        }
    }else if (sport === "Boxing"){
        if(gender === "m"){
            price*=41;
        }else if (gender === "f"){
            price*=37;
        }
    }else if (sport === "Yoga"){
        if(gender === "m"){
            price*=45;
        }else if ( gender === "f"){
            price*=42
        }
    }else if (sport === "Zumba"){
        if(gender === "m"){
            price*=34
        }else if ( gender === "f"){
            price*=31
        }
    }else if (sport === "Dances"){
        if(gender === "m"){
            price*=51
        }else if( gender === "f"){
            price*=53
        }
    }else if (sport === "Pilates"){
        if(gender === "m"){
            price*=39
        }else if ( gender === "f"){
            price*=37
        }
    }

    if(sumHave > price){
        console.log(`You purchased a 1 month pass for ${sport}.`);
    }else{
        console.log(`You don't have enough money! You need $${(price - sumHave).toFixed(2)} more.`)
    }
}
