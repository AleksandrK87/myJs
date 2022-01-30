'use strict';

function fact(n){ 
    if (n < 0 || !Number.isSafeInteger(n)) {
        throw new Error ('Argument')
    }
    if (n === 0) {
        return 1;
    }
    return n * fact(n - 1);
}

try {
    const f = fact(-10);

} catch (err){
    console.log('err :>>', err) 
}

console.log('End of script ');

function validateName(firstName) {
    if(typeof firstName !==string) {
        throw new TypeError('Name must be a string value')
    }
    if (firstName)
    return firstName;
}

try {
    const firstName = validateName('Test');
} catch (err) {
    console.log('err :>>', err)
}





function validateYears(years) {
    if(typeof years !== 'number') {
        throw new TypeError('Years must be a number value');
    }
    if (years <=  1 || years >= 100) {
        throw new Error('Years is don correct');
    }
    if (!Number.isInteger(years)) {
        throw new Error('Years is dont correct');
    }
    return years;
}

try {
    const years = validateYears('20');
    console.log('Years :>>', years);
} catch (err) { 
    if (err instanceof TypeError) {
        console.log('TypeError');
    } else if( err instanceof RangeError){
        console.log('RangeError');
    } else if(err instanceof Error){
        console.log('Error');
    }
}