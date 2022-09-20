let i,j,k,es="";
for(i=0;i<=5;i++){
    for(j=i;j<=5;j++){
        es+=" ";
    }
    for(k=0;k<=i;k++){
        es+=" *"
    }
    es+="\n";
}
console.log(es);