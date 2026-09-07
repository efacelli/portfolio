gsap.registerPlugin(ScrollTrigger);
 
/* NAV */
const nav = document.getElementById('nav');
window.addEventListener('scroll',()=>nav.classList.toggle('solid',scrollY>50),{passive:true});
 
/* INDICATOR */
const secs = ['hero','projects','services','contact'];
const dots = document.querySelectorAll('.idot');
function syncDots(){
  const mid = innerHeight*.48;
  secs.forEach((id,i)=>{
    const el=document.getElementById(id);if(!el)return;
    const r=el.getBoundingClientRect();
    dots[i].classList.toggle('on',r.top<=mid&&r.bottom>mid);
  });
}
window.addEventListener('scroll',syncDots,{passive:true});
dots.forEach((d,i)=>d.addEventListener('click',()=>document.getElementById(secs[i]).scrollIntoView({behavior:'smooth'})));
 
/* HERO REVEAL */
const lines = document.querySelectorAll('.h1 .ln');
gsap.to(lines,{opacity:1,y:0,duration:.95,ease:'power3.out',stagger:.13,delay:.2});
gsap.to('.hero-eyebrow',{opacity:1,y:0,duration:.7,ease:'power3.out',delay:.1});
gsap.to('.hero-sub',{opacity:1,y:0,duration:.8,ease:'power3.out',delay:.6});
gsap.to('.hero-acts',{opacity:1,y:0,duration:.7,ease:'power3.out',delay:.8});
gsap.to('.hero-meta',{opacity:1,duration:.8,ease:'power2.out',delay:1.05});
 
/* SECTION REVEALS */
document.querySelectorAll('.rv').forEach(el=>{
  if(el.closest('#hero'))return;
  gsap.fromTo(el,
    {opacity:0,y:48,scale:.98},
    {opacity:1,y:0,scale:1,duration:.82,ease:'power3.out',
     scrollTrigger:{trigger:el,start:'top 84%',toggleActions:'play none none reverse'}}
  );
});
 
/* SMOOTH ANCHOR LINKS */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href').slice(1);
    const el=document.getElementById(id);
    if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'})}
  });
});