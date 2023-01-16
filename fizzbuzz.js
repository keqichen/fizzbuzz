//Define an object

for (let i=1;i<=150;i++){

    let numberStringPairs = {
        3:"fizz",
        5:"buzz",
        7:"bang",
        11:"wow"
    };

    let counter=0;
    let array=[];

    for (let key in numberStringPairs){
        if (i % key == 0){
            counter++;
            array.push(numberStringPairs[key]);
        }
    }

    if (counter==2){
        console.log(array[0]+array[1]);
    }else if (counter==1){
        console.log(array[0]);
    }else{
        console.log(i);
    }
}

