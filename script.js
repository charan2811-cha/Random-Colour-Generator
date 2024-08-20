let body=document.querySelector("body")
let h3=document.querySelector("h3")
let btn=document.querySelector("button")


btn.addEventListener("click",()=>{
    let red=Math.floor(Math.random()*255)
    let green=Math.floor(Math.random()*255)
    let blue=Math.floor(Math.random()*255)
    let color=`rgb(${red},${green},${blue})`
    // console.log(color)
    h3.innerHTML=color;
    body.style.backgroundColor=color
    
})