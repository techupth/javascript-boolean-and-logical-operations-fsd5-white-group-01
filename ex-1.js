let isOver18;
let hasCriminalBlacklist;

let isAllow;

// Start coding here

//James
let age = 18;
hasCriminalBlacklist = false;

//cond

isOver18 = age >= 18;
isAllow = isOver18 && !hasCriminalBlacklist;

console.log(isAllow);
