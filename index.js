
const answer = Math.floor(Math.random()*10+1);
const usernumber = document.querySelector('#usernumber');

const btn = document.querySelector('.btn');
const reset = document.querySelector('.reset');
const result = document.querySelector('.resultinput label p');

let guesses = 0;


btn.addEventListener("click", ()=>{
    guesses+=1;
    let userinput = usernumber.value;
    if(userinput==answer){
      
        result.textContent= (`Succesfull The number is ${userinput} It tooks you ${guesses}`)
        
    }
    else if(userinput > answer){
        alert('Too High');
    }

    else{
        alert('Too low');
    }
})
reset.onclick=()=>{
    location.reload();
;}
