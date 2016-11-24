#include<bits/stdc++.h>
using namespace std;


int main()
{

int a[3][3];
int sum[3][3];
int kk;
int i;
int j;
for(i=0;i<3;i++)
{

    for(j=0;j<3;j++)
  {
        a[i][j]=0;
        sum[i][j]=0;


}
}
a[0][0]=11;
a[1][0]=1;
a[1][1]=9;
a[2][0]=63;
a[2][1]=65;
a[2][2]=20;


sum[0][0]=11;

for(i=1;i<3;i++)
{

    for(j=0;j<=i;j++)
       {

        if(j==0)
            {

    sum[i][j]=sum[i-1][j]+a[i][j];
}
else if(j==i)
{

sum[i][j]=sum[i-1][j-1]+a[i][j];
}
else
{

sum[i][j]=max(sum[i-1][j-1]+a[i][j],sum[i-1][j]+a[i][j]);

}

       }




}



kk=sum[2][0];
for(i=1;i<3;i++)
{
if(sum[2][i]>kk)
   kk=sum[2][i];

}


cout<<kk;

return 0;
}
