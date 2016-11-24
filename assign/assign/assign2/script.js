function sumAfterP(){
  var i=0;
  var sum =0;
  var a = document.getElementById("myValue").value;

  var b = '';
  for (i = 0; i < a.length; ) {
    b='';
    if(a.charCodeAt(i)==80 || a.charCodeAt(i)==112){
      i++;
     while (a.charCodeAt(i) != 44) {
          b = b + a[i];
          i++;
     }
     sum = sum + parseInt(b);
   }
     else
        i++;

     }
    return(sum);

}



function myFunction() {
document.getElementById("myText").value = sumAfterP();
}
