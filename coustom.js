const side_login = document.querySelector(".container_log_in");
const side_bottom = document.querySelector(".container_button_animation")
;


const button_click = document.querySelector(".botton");
const login_click = document.querySelector(".log_in");

let data=true;
button_click.addEventListener("click",()=>{
    if (data==true) {
        side_bottom.style.width="40%";
        data=false;
    }else{
        side_bottom.style.width="0%";
        data=true;
    }
});



const title_login = document.querySelector(".container_log_in h1");
const input_login = document.querySelectorAll(".box_login ul li input");


let dark = true;
login_click.addEventListener("click",()=>{
    if (data==true) {
        side_login.style.width="40%";
        title_login.style.display="block";
        for(let i of input_login){
            i.style.display="inline";
        }
        data=false;
    }else{
        side_login.style.width="4%";
        title_login.style.display="none";
        for(let i of input_login){
            i.style.display="none";
        }
        data=true;
    }
});


// clock section

setInterval(() => {
    const hourse = document.querySelector(".hours");
    const minute = document.querySelector(".mnut");
    const secounds = document.querySelector(".secound");
    const title_clocks = document.querySelector(".title_horse");
    
    
    let Data = new Date();
    let h = Data.getHours();
    let m = Data.getMinutes();
    let s = Data.getSeconds();
    let p = h>= 12?"PM":"AM"; 
    
    if(h<=13){
       h=h - 12;
    }

    m= m<=9? m=`0${m}`:m;
    s= s<=9? s=`0${s}`:s;


    hourse.innerHTML=h;
    minute.innerHTML=m;
    secounds.innerHTML=s;
    title_clocks.innerHTML=p; 
});

function Scroll() {
    let data = document.querySelector(".animation_scroll");
    let W = window.innerHeight;
    let T = data.getBoundingClientRect().top;
    let V = 100;
    if (T<W - V) {
        data.classList.add("active");
    } else {
        data.classList.remove("active");
    }
}
window.addEventListener("scroll",Scroll);

const footers = document.querySelector("footer");
footers.addEventListener("click",()=>{
    side_login.style.width="0%";
    console.log(true);
});

