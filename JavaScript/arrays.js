var name = "sam";
for ( var x = 1; x <= 100; x++ ){
    if ( x % 3 === 0 && x % 5 === 0 ){
        console.log("FuzzBuzz")
    }
    else if ( x%5 === 0 )console.log("Buzz");
    else if ( x % 3 == 0 )console.log("Fuzz")
    else console.log(x)
}