//return largest number

var numberList = [ 1, 5, 2, 20, 7, 90, 3 ];

var largest = numberList.reduce(function(x,y) {
       return (x > y) ? x : y;

});
console.log(largest);


//function for if number appears in array
Array.prototype.contains = function ( needle ) {
   for (i in this) {
       if (this[i] == needle) return true;
   }
   return false;
}

var numberArray = [1, 5, 2, 20, 7, 90, 3];
if (numberArray.contains('7')) {
   console.log("Here it lives!")
}
else {
	console.log("Try again!")}

// //function to return odd position only

var arr = [4,5,7,8,14,45,76];

function odd(a){
  var ar = [];

  for (var i = 1; i < a.length; i++) {
    if(i % 2 === 1) { // index is odd
        ar.push(a[i]);
    }
}

return ar;
}

console.log(odd(arr));

// //sum all numbers in array

var sum = [1, 5, 2, 20, 7, 90, 3 ].reduce(add, 0);

function add(a, b) {
    return a + b;
}

console.log(sum);

//check for palindrome
function checkPalindrom(palindrom)
{
  palindrom= palindrom.toLowerCase();
   var flag = true;
   var j;
   j = (palindrom.length) -1 ;
   //console.log(j);
   var cnt = j / 2;
   //console.log(cnt);
    for( i = 0; i < cnt+1 ; i++,j-- )
    {

        if( palindrom[i] != palindrom[j] )
        {
           flag = false;
           break; 
        }


    }
  if( flag ) {
  console.log('The word is a palindrome.');
  }
  else {
console.log('The word is not a palindrome.');
  }
}
checkPalindrom('racecar');