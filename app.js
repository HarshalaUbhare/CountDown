
const endDate="21 January 2024 2:18 PM";
document.getElementById("end-date").innerHTML= endDate;

const inputs= document.querySelectorAll("input");


function clock(){
    const end =new Date(endDate);
    const now = new Date();
    const diff= (end-now)/ 1000; //by dividing milisecond we get the diff in seconds
    // console.log(end); 
    // console.log(now);
    console.log(diff);
    if(diff<0) return;
    //conver second to days 
    inputs[0].value=(Math.floor(diff/ 3600/24));//days 
    inputs[1].value=(Math.floor((diff/3600) % 24));//hourse
    inputs[2].value=(Math.floor((diff/60 )% 60));//minutes
    inputs[3].value=Math.floor(diff) % 60 ;//seconds
    
}
clock();

// 1 day = 24hr
// 1hr = 60 min
// 60 min = 3600 sec
  
 setInterval(
    ()=>{
   clock();
 }, 1000)