var arr = new Array();
var sum = new Array();
var kk;
var i;
var j;
var noOfRows;


$(document).ready(function(){

});

function generateStairs(){
  var y = 20;
  var lineHeight = 20;
  var i=0,j=0;
  //var noOfRows;
  var x = document.getElementById("myValue").value;

  //noOfRows = document.getElementById("numberOfRows").value;
  noOfRows = parseInt(x);
  for(i=0;i<noOfRows;i++){
    arr[i] = [ ];
    sum[i] = [ ];
    for(j=0;j<=i;j++){
      //var z = parseInt(100*Math.random());
      //alert("Hello");
      arr[i][j] = Math.floor(Math.random()*100);
      sum[i][j] = 0;

     $(".stairs").append('<div style="height:' + lineHeight + 'px; width:' + y + 'px;  display: inline-block; border: 1px; background-color:red;">'+ arr[i][j] +'</div>');
    }
  $(".stairs").append("<br>");
  }

  sum[0][0] = arr[0][0];
  for(i=1;i<noOfRows;i++)
  {

    for(j=0;j<=i;j++)
      {

        if(j==0)
          {
            sum[i][j]=sum[i-1][j]+arr[i][j];
          }

        else if(j==i)
          {
            sum[i][j]=sum[i-1][j-1]+arr[i][j];
          }
        else
          {
            sum[i][j]=Math.max(sum[i-1][j-1]+arr[i][j],sum[i-1][j]+arr[i][j]);

          }

       }

  }


  kk=sum[noOfRows-1][0];
  for(i=1;i<=noOfRows;i++)
  {
     if(sum[noOfRows-1][i]>kk)
         {
           kk=sum[noOfRows-1][i];
          }

   }

}



// for(i=1;i<noOfRows;i++)
// {
//
//   for(j=0;j<=i;j++)
//     {
//
//       if(j==0)
//         {
//           sum[i][j]=sum[i-1][j]+arr[i][j];
//         }
//
//       else if(j==i)
//         {
//           sum[i][j]=sum[i-1][j-1]+arr[i][j];
//         }
//       else
//         {
//           sum[i][j]=Math.max(sum[i-1][j-1]+arr[i][j],sum[i-1][j]+arr[i][j]);
//
//         }
//
//      }
//
// }
//
//
// kk=sum[2][0];
// for(i=1;i<noOfRows;i++)
// {
//    if(sum[2][i]>kk)
//        {
//          kk=sum[2][i];
//         }
//
//  }


function myFunction() {
document.getElementById("myText").value = kk;
}
