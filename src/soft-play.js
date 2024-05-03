// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.


function enter(numAdults, numChildren){
  // Check if there are enough adults for every child entering.
  if(numChildren >numAdults || numAdults <= 0){
// Not enough adults or no adults at all.
    return false;
  }
  // Update the total count of adults and children inside.
adults += numAdults;
children += numChildren;
return true; 
}

function leave(numAdults, numChildren){
  //Check for attempting to leave with more adults or children than are present.
  if (numAdults > adults || numChildren > children){
    return false;
  }
  //Ensure no child leaves unattended
    if (numChildren > numAdults){
      return false;
    }
    //Ensure that if children remain, they are adequately supervised
if (children - numChildren > 0 && (adults - numAdults) < (children - numChildren)){
  return false;
}
// Update the counts upon succesful
  adults -= numAdults;
  children -= numChildren;
  return true;
}
function occupancy(){
  return {adults, children};
}


// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter,
  leave,
  occupancy
}
