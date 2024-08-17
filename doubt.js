let plus=document.querySelectorAll(".fa-solid.fa-plus");
let answer=document.querySelectorAll(".answer");
let doubts_title=document.querySelector(".doubts_title");
let doubtBox=document.querySelector(".doubtbox");
let clickCounter=Array(plus.length).fill(0);
for(let i=0;i<plus.length;i++){
    plus[i].addEventListener('click', () => {
    clickCounter[i]++;
    
    if (clickCounter[i] % 2 == 1) {
        answer[i].style.display = "block";
        doubtBox.style.backgroundColor = "black";
        doubts_title.style.backgroundColor = "#121212";
    } else {
        answer[i].style.display = "none";
    }
});
}
