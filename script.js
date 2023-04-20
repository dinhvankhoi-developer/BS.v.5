'use strict';
const sum  = (a , b , callback) =>{
    return callback(a + b);
}

const result = (a , b) => {
    return a + b;
}

sum(45 ,56 , (result) => {
    console.log(result);
})