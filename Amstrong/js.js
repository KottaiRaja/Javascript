let a,b,c,i,j,k,z=153;
let temp = z;
z = String(z);
a=z.substring(0,1);
b=z.substring(1,2);
c=z.slice(2);
i=parseInt(a);
j=parseInt(b);
k=parseInt(c);
if((i*i*i)+(j*j*j)+(k*k*k)==temp){
    console.log("It is Amstrong number")
}
else
{
    console.log("It is not a Amstrong number")
}
