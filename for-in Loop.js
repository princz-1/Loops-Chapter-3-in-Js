/*  for-in loop
loops are used to execute a piece of code again & again
*/

let student = {
  name : "Prince",
  age :18,
  cgpa : 9.2,
  isPass : true,
};

for(let key in student){
  console.log("key =",key,"value =",student[key]);
}
