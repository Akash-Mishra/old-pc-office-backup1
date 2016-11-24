function lowercaseToUpperCaseAndViceVersa(){
  var i=0;
  var a = document.getElementById("myValue").value;

  var b = '';
  for (i = 0; i < a.length; i++) {
     if (a.charCodeAt(i) >= 65 && a.charCodeAt(i) <= 90) {
          b = b + a.charAt(i).toLowerCase();
     }
     else
          b = b + a.charAt(i).toUpperCase();
     }
    return(b);

}



function myFunction() {
document.getElementById("myText").value = lowercaseToUpperCaseAndViceVersa();
}
