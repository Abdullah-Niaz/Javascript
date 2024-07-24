// Nulish colesing operator 
// particularly designed for null and undefined
// sometimes you work with database, and return answer may have two value
// it check them, either it is null/undefined or some value.
// if value is there it will return that
// else null/undefined will be returned

const val1 = 5 ?? 10;
console.log(val1);