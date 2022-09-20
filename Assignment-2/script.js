let xs = document.getElementById("xs");
let md = document.getElementById("md");

let spxs="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png";
let spmd="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png";
let suxs="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png";
let sumd="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png";
let Auxs="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png";
let Aumd="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png";
let Wixs="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png";
let Wimd="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png";

function spring(){
    xs.src=spxs;
    md.src=spmd;
    
}
function summer(){
    xs.src=suxs;
    md.src=sumd;
}
function autumn(){
    xs.src=Auxs;
    md.src=Aumd;
}
function winter(){
    xs.src=Wixs;
    md.src=Wimd;
}