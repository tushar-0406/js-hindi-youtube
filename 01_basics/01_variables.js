const accountId = 462131
let accountEmail = "tushar.dashore860@gmail.com"
var accountPassword = "12345"
accountCity = "indore"
let accountState;

// accountId = 2 // not allowed


accountEmail = "dashore.tushar761@gmail.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

