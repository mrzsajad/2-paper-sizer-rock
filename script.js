var btn1=document.querySelector(".btn1");
var btn2=document.querySelector(".btn2");
var btn3=document.querySelector(".btn3");

var sp1=document.querySelector(".sp1");
var sp2=document.querySelector(".sp2");
var sp3=document.querySelector(".sp3");

var me=document.querySelector(".me")
var you=document.querySelector(".you")
var input=null;

btn1.addEventListener("click",function(){
    sp1.textContent= btn1.textContent;
    console.log(sp1.textContent);
    randomItems();
    resultMaker();

});
btn2.addEventListener("click",function(){
    sp1.textContent= btn2.textContent;
    console.log(sp1.textContent)
    randomItems();
    resultMaker();
});
btn3.addEventListener("click",function(){
    sp1.textContent= btn3.textContent;
    console.log(sp1.textContent)
    randomItems();
    resultMaker();
});

function randomItems(){
    var rnd=Math.floor(Math.random()*3+1) 
    //1 --> paper
    //2 --> rock
    //3 --> sizer
    if(rnd==1){
       sp2.textContent="rock" ;
    }
    else if(rnd==2){
        sp2.textContent="paper" ;
    }else{
        sp2.textContent="sizer" ;
    }   
}

function resultMaker(){
    switch (sp2.textContent) {
        case "rock":
            if(sp1.textContent=="rock"){
                sp3.textContent="draw"
            }else if( sp1.textContent=="paper"){
                sp3.textContent="You Win!";
                // me.textContent+=1;
            }
            else{
                sp3.textContent="PC Win!";
                // you.textContent+=1;
            }
            break;
        case "paper":
            if(sp1.textContent=="paper"){
                sp3.textContent="draw"
            }else if( sp1.textContent=="sizer"){
                sp3.textContent="You Win!";
                // me.textContent+=1;
            }
            else{
                sp3.textContent="PC Win!";
                // you.textContent+=1;
            }
            break;    
        case "sizer":
            if(sp1.textContent=="sizer"){
                sp3.textContent="draw"
            }else if( sp1.textContent=="rock"){
                sp3.textContent="You Win!";
                // me.textContent+=1;
            }
            else{
                sp3.textContent="PC Win!";
                // you.textContent+=1;
            }
            break;
        default:
            break;
    }
}