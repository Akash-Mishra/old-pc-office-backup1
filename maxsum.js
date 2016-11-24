
var arr = new Array();
var sum = new Array();
var kk;
var i;
var j;
var noOfRows =5;

for(i=0;i<noOfRows;i++){
  arr[i] = [ ];
  sum[i] = [ ];
  for(j=0;j<i;j++){
    arr[i][j] = 0;
    sum[i][j] = 0;
  }
}

for(i=0;i<noOfRows;i++){
  arr[i] = [ ];

  for(j=0;j<i;j++){
    arr[i][j] = 100*Math.random();

  }
}

sum[0][0] = arr[0][0]

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


kk=sum[2][0];
for(i=1;i<noOfRows;i++)
{
if(sum[2][i]>kk)
   kk=sum[2][i];

}

alert(kk);
