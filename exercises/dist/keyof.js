"use strict";
function printUserProperty(user, key) {
    console.log(user[key]);
}
let user = { name: 'claudia', karma: 90000, moderator: true };
printUserProperty(user, 'moderator');
