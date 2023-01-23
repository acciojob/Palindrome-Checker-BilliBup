// complete the given function

function palindrome(str){
   let n = str.length();
   const s = str.toLowerCase();
   let start = 0;
   let end =  n-1;
   while(start<=end){
	   if(s.charAt(start)!=s.charAt(end)){
		   break;
	   }
	   start++;
	   end--;
   }
  if(start>end){
	  return true;
  }
  else{
	   return false;
  }
}
module.exports = palindrome
