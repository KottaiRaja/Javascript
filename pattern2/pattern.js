let es = "";
for(let i=0;i<=5;i++){
    for(let j=0;j<=i;j++){
        es+="*"
    }
    es+="\n"
}
for(let i=0;i<=5;i++){
    for(let j=4;j>=i;j--){
        es+="*"
    }
    es+="\n"
}
console.log(es);