var places = ["Ohio", "Kentucky", "Virginia", "Mississippi"];
var ticketPrices = [11, 12, 13, 14];
var isAttending = [true, false, false, true]

// pop method. This method will remove the last element in the array. In this case it will remove "Mississippi"
places.pop() 
console.log(places)

//slice method. This method will return a new array  selected from start to end, not including the end without modifying the orginial. in this case i will get a return array of 11 and 12.
// because slice does not mutate, we got the orriginal array back when console logging the variable. 
var updatedPrices = ticketPrices.slice(0,2);
console.log(updatedPrices);
 console.log(ticketPrices)
// the slice method does not change the original array, so inorder to access the value of the sliced array, you must instantiate a new varaible to store the value of the sliced array.

//push method. This method will add elements to the end of your array. 
var count = isAttending.push(false, false, false)
//expected output 7
console.log(count)
//expected output [true, false, false, true, false, false, false]
console.log(isAttending)