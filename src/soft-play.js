// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

function occupancy1(){
  return {adults, children};
}
function enter1(numAdults, numChildren){
  if(numChildren> numAdults || numChildren < 0 || numAdults < 0){
    return false;
  }
adults += numAdults;
children += numChildren;
return true; 
}

function leave1(numAdults, numChildren){
  if (numAdults > adults || numChildren > children || numChildren > numAdults){
    return false;
  }
  adults -= numAdults;
  children -= numChildren;
  return true;
}

console.log(enter1(2, 1));
console.log(occupancy1());
console.log(leave1(1, 1));
console.log(occupancy1());







// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter1,
  leave: leave1,
  occupancy: occupancy1
}
