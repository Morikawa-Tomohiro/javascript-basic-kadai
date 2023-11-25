"use strict";

let today = new Date();

let year = today.getFullYear();
let month = today.getMonth() - 2;
let day = today.getDate() - 3;

console.log( year + '年' + month + '月' + day + '日');