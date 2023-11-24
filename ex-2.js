// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000;
let isWeekday;
let hasBoughtProductFromITCategory;
let hasAttendedDiscountEvent;
let isPlatinum;

let hasPromotion;

//John
lastMonthPaidMoreThan4000 = true; //4001
isWeekday = true; //friday
hasBoughtProductFromITCategory = false; //nope
hasAttendedDiscountEvent = true; //2nd one
isPlatinum = false; //gold

hasPromotion =
  (lastMonthPaidMoreThan4000 &&
    isWeekday &&
    !hasBoughtProductFromITCategory &&
    !hasAttendedDiscountEvent) ||
  isPlatinum;

console.log(hasPromotion);
