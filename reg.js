 function LongestWord(sen) { 
var longest;
var word =/\w+/;

var match;
match=sen.match(word);
match.forEach(function (word) {
	console.log(word);

});


  return longest; 
         
}
   
// keep this function call here 

console.log(LongestWord("a beautiful sentence^&!"));                            















                            
                            
                            
  
