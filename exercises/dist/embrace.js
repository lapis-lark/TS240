"use strict";
function logUnknown(val) {
    if (typeof val === 'string') {
        console.log(val);
    }
}
logUnknown(5);
logUnknown('spooooky');
