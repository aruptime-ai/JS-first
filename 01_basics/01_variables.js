const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

let accountState;

//accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountEmail, accountPassword, accountCity, accountState])


/* prefer not to use var 
because of issues with block scop and functional scop */
