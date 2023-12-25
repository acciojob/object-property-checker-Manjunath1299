const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };
let obj=Object.keys(sampleObject);
// console.log(obj+" "+typeof(obj));
function hasKey(key) {
  //   write your code here
  for( let i=0;i<obj.length;i++){
      if(obj[i]===key)
       return true
    //   console.log(obj[i]);
  }
	
	return false;
}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
