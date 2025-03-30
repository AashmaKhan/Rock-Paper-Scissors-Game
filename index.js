const array=["Rock","Paper","Scissors"];
const user=document.getElementById("user");
const computer=document.getElementById("computer");
const display=document.getElementById("display");
let button;
let user_count=0;
let computer_count=0;
let total_play=0;
document.getElementById("btn").addEventListener("click",()=>{
button=document.getElementById("btn").value;
user.textContent=`User Choice: ${button}`;
output();
});
document.getElementById("btn1").addEventListener("click",()=>{
button=document.getElementById("btn1").value;
user.textContent=`User Choice: ${button}`;
output();
});
document.getElementById("btn2").addEventListener("click",()=>{
button=document.getElementById("btn2").value;
user.textContent=`User Choice: ${button}`;
output();
});
function output(){
const randomNumber=Math.floor(Math.random()*(array.length+1));
const computer_output=array[randomNumber];
computer.textContent=`Computer choice: ${computer_output}`;

if(button===computer_output){
display.textContent=`It's a draw!`;
total_play=total_play+1;
final_result();
}else if(button==="Rock"&&computer_output==="Scissors"){
display.textContent=`User has won!`;
user_count=user_count+1;
total_play=total_play+1;
final_result();
}else if(button==="Scissors"&&computer_output==="Paper"){
display.textContent=`User has won!`;
user_count=user_count+1;
total_play=total_play+1;
final_result();
}else if(button==="Paper"&&computer_output==="Rock"){
display.textContent=`User has won!`;
user_count=user_count+1;
total_play=total_play+1;
final_result();
}else{
display.textContent=`The Computer has won!`;
computer_count=computer_count+1;
total_play=total_play+1;
final_result();
}

document.getElementById("h1").textContent=`Total Round: ${total_play}`;
document.getElementById("user_count").textContent=`User: ${user_count}`;
document.getElementById("computer_count").textContent=`Computer: ${computer_count}`;
}
function final_result(){
if(total_play>=5){
        user.textContent="";
        computer.textContent="";
        display.textContent="";
    if(user_count===computer_count){
       display.textContent="Final result: The game ended as a draw!";      
    }else if(user_count>computer_count){
        display.textContent="Final result: The user has won this game!";
    }else if(user_count<computer_count){
        display.textContent="Final result: The computer has won this game!";
    }else{
        console.log("Something went wrong!");
    }
    reset();
}
}
function reset(){
user_count=0;
computer_count=0;
total_play=0;
}