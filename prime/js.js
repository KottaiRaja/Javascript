for(let i=2;i<=100;i++){
    a=true;
    for(let j=2;j<i;j++){
        if(i%j==0){
            a=false;
        }
    }
    if(a){
        console.log(i);
    }
}