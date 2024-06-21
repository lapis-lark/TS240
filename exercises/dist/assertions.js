"use strict";
let x = 5;
let yu = 'ayy';
let zu = yu; // less specific
console.log(yu);
// x as string;
// unallowed; only more specific or less specific versions of a type allowed
// use an initial assertion to any to allow more complex type conversions TS can't parse
// const a = expr as any as T;
