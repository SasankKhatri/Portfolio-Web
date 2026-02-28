// Theme
function toggleTheme(){
  document.body.classList.toggle("light");
}

// Typing effect
const text = ["Web Developer", "Computer Programming Student", "UI/UX Enthusiast"];
let i=0,j=0,isDeleting=false;
const typing=document.querySelector(".typing");

function type(){
  if(i<text.length){
    typing.textContent=text[i].substring(0,j);
    if(!isDeleting && j++===text[i].length){isDeleting=true;}
    if(isDeleting && j--===0){isDeleting=false;i=(i+1)%text.length;}
  }
  setTimeout(type,isDeleting?70:120);
}
type();

// Scroll reveal
window.addEventListener("scroll",()=>{
  document.querySelectorAll(".reveal").forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight-100){
      el.classList.add("active");
    }
  });
});