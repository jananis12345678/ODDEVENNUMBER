var player1= {
    name:"player 1",
    p1_val:[]
};
var player2={
    name:"player 2",
    p2_val:[]
};
var count=0;
function playEvenodd(){
    var p1= Math.floor(Math.random()*80+1);
    var p2=Math.floor(Math.random()*80+1);
    player1.p1_val.push(p1);
    player2.p2_val.push(p2);
    if(count==5){
         if(player1.p1_count==player2.p2_count){
            document.getElementById("result").textcontent="Match Draw!!";
         }
         else if(player2.p2_count==player1.p1_count){
            document.getElementById("result").textcontent="Match Draw!!";

         }
    }
    else{
        count++;
        if(p1%2==0){
            player1.p1_count++;
            document.getElementById("player1_scores").textcontent=player1.p1_count;

        }
        if(p2%2==0){
            player2.p2_count++;
            document.getElementById("player2_scores").textcontent=player2.p2_count;
        }
        updateCircle();
    }
}
function updateCircle(){
    var p1_circle=document.getElementById("player1").children;
    player1.p1_val.forEach((run,value)=>{
     if(run%2==0){
        p1_circle[value].computedStyleMap.backgroundColor="green";
     }
     else{
        p1_circle[value].computedStyleMap.backgroundColor="red";
     }
    });
    console.log(p1_circle)
}
function updateCircle(){
    var p1_circle=document.getElementById("player2").children;
    player2.p2_val.forEach((run,value)=>{
     if(run%2==0){
        p2_circle[value].computedStyleMap.backgroundColor="green";
     }
     else{
        p2_circle[value].computedStyleMap.backgroundColor="red";
     }
    });
    console.log(p2_circle)

}