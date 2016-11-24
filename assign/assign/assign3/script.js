// var counter1 =0, counter2=0;
jQuery(document).ready(function($) {
var book = document.getElementById('tabViewBy');
var bookmarked1 = false, bookmarked2 = false, bookmarked3 = false; bookmarked4 = false;
document.getElementById('bookmarkthis1').innerHTML = "Bookmark";
document.getElementById('bookmarkthis2').innerHTML = "Bookmark";
document.getElementById('bookmarkthis3').innerHTML = "Bookmark";
document.getElementById('bookmarkthis4').innerHTML = "Bookmark";


//bookmarkTable1
var bookmarkTable1 = document.getElementById('bookmarkthis1');
bookmarkTable1.onclick = function(){
  //counter1++;

  if(bookmarked1 == false){
     bookmarked1 = true;
      document.getElementById('bookmarkthis1').innerHTML = "Unbookmark";
  }
  else{
    bookmarked1 = false;
    document.getElementById('bookmarkthis1').innerHTML = "Bookmark";
  }


}

var bookmarkTable2 = document.getElementById('bookmarkthis2');

bookmarkTable2.onclick = function(){
  //counter2++;

  if(bookmarked2 == false){
     bookmarked2 = true;
      document.getElementById('bookmarkthis2').innerHTML = "Unbookmark";
  }
  else{
    bookmarked2 = false;
    document.getElementById('bookmarkthis2').innerHTML = "Bookmark";
  }

}

var bookmarkTable3 = document.getElementById('bookmarkthis3');
bookmarkTable3.onclick = function(){
  //counter1++;

  if(bookmarked3 == false){
     bookmarked3 = true;
      document.getElementById('bookmarkthis3').innerHTML = "Unbookmark";
  }
  else{
    bookmarked3 = false;
    document.getElementById('bookmarkthis3').innerHTML = "Bookmark";
  }


}

var bookmarkTable4 = document.getElementById('bookmarkthis4');
bookmarkTable4.onclick = function(){
  //counter1++;

  if(bookmarked4 == false){
     bookmarked4 = true;
      document.getElementById('bookmarkthis4').innerHTML = "Unbookmark";
  }
  else{
    bookmarked4 = false;
    document.getElementById('bookmarkthis4').innerHTML = "Bookmark";
  }


}


//var tabul = book.options[book.selectedIndex].text;


// $( ".target" ).change(function() {
//   alert( "Handler for .change() called." );
// });
$("#tabViewBy").change(function(){

  var selectedTab = document.getElementById('tabViewBy').value;
  // document.getElementById('resultTab').innerHTML = selectedTab;
  if(selectedTab == 'tab1')
  {
    if(bookmarked1 == true && bookmarked2 == true){
      document.getElementById('result').innerHTML = " 'Tab 1 Bookmarked and Tab 2 Bookmarked' ";
    }
    else if (bookmarked1 ==true && bookmarked2 == false) {
      document.getElementById('result').innerHTML = "Tab 1 Bookmarked";
    }
    else if (bookmarked2 ==true && bookmarked1 == false) {
      document.getElementById('result').innerHTML = "Tab 2 Bookmarked";
    }

  }

  else {

    if(bookmarked3 == true && bookmarked4 == true){
      document.getElementById('result').innerHTML = " Tab 1 Bookmarked and Tab 2 Bookmarked ";
    }
    else if (bookmarked3 ==true && bookmarked4 == false) {
      document.getElementById('result').innerHTML = "Tab 1 Bookmarked";
    }
    else if (bookmarked3 ==true && bookmarked4 == false) {
      document.getElementById('result').innerHTML = "Tab 2 Bookmarked";
    }
  }


});














// if(bookmarked1 == true && bookmarked2 == true){
//   document.getElementById('content-3').innerHTML = "Tab 1 Bookmarked and Tab 2 Bookmarked";
// }
// else if (bookmarked1 ==true && bookmarked2 == false) {
//   document.getElementById('content-3').innerHTML = "Tab 1 Bookmarked";
// }
// else if (bookmarked2 ==true && bookmarked1 == false) {
//   document.getElementById('content-3').innerHTML = "Tab 2 Bookmarked";
// }

// if(document.getElementById('tab-3')!=false)
// {
//   alert(book.options[book.selectedIndex].text);
// }
});
