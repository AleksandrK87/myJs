'use strict';

function pow(base,exponent) {
    if (typeof base !== 'number') {
        throw new TypeError('Base must be number type');
    }
    if (!Number.isInteger(exponent)) {
        throw new Error ('exponent has to be integer number');
    }
    return base ** exponent;
}

try {
    const pow1 = pow(3, 3.3);
    console.log('pow :>> ', pow1);
} catch (err) {
    if (err instanceof TypeError) {
        console.log('TypeError :>> '); 
    } else if (err instanceof Error) {
        console.log('Error :>> ');
    }
};