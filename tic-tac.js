let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn")
let msg=document.querySelector("#winner")
let container=document.querySelector(".msg-container")
let newgame=document.querySelector("#new-btn")
count=0;
let turn0=true
const winnerpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const resetgame=()=>{
    turn0=true
    enableboxes();
    container.classList.add("hide")

}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("BOX WAS CLICKED ")
    if(turn0){
        box.innerText="0";
        turn0=false;
    }else{
        box.innerText="x";
        turn0=true;
    }
    box.disabled=true;

    checkwinner();
    });
});

const disableboxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
};
const enableboxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}; 
const showwinner=(winner)=>{
   msg.innerText=`Congratulations.....Winner is ${winner}`
   container.classList.remove("hide")
   disableboxes()
}

const checkwinner =()=>{
  for(pattern of winnerpatterns){
        position1=boxes[pattern[0]].innerText;
        position2=boxes[pattern[1]].innerText;
        position3=boxes[pattern[2]].innerText;

        if(position1!="" && position2!="" && position3!=""){
            if(position1==position2 && position2==position3){
                console.log(`Winner${position1}`);
                showwinner(position1);
        }
    }
  }
};
newgame.addEventListener("click",(resetgame));
resetbtn.addEventListener("click",(resetgame));
 
 
 
