"use strict";
function printLength(val) {
    if (typeof val === 'string') {
        console.log(`String length: ${val.length}`);
    }
    else {
        console.log(`Array count: ${val.length}`);
    }
}
printLength('5');
