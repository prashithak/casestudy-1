let A=[2,4,8];
let ans=0;
let n=A.length;
for( let i=0;i<n;i++)
{
    ans+=(A[i]*A[i]);
    console.log(A[i]);
}
console.log("The sum of squares of elements of array  is " +ans);