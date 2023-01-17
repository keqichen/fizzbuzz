//Define an object

for (let i=1;i<=150;i++){

    let numberStringPairs = {
        3:"fizz",
        5:"buzz",
        7:"bang",
        11:"wow"
    };

    let array=[];

    for (let key in numberStringPairs){
        if (i % key == 0){
            array.join(numberStringPairs[key]);
        }
    }

    if (array.length !==0){
        console.log(array);
    }else{
        console.log(i);
    }
}

