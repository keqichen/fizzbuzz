console.log("1");
console.log("2");

for(let i=1;i<=100;i++){
    var string3 = "fizz";
    var string5 = "buzz";
    var string7 = "bang";
    var string11 = "else";
    if (i%5==0 && i%3==0){
        console.log(string3+string5)
    }else if(i%5==0){
        console.log(string5)
    }else if(i%3==0){
        console.log(string3)
    }else if(i%7==0){
        console.log(string7)
    }else if(i%11==0){
        console.log(string11)
    }else{console.log(i);
    }
}



