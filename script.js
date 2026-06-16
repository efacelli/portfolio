gsap.registerPlugin(ScrollTrigger);

/* NAV */
const nav = document.getElementById('nav');
window.addEventListener('scroll',()=>nav.classList.toggle('solid',scrollY>50),{passive:true});

/* INDICATOR */
const secs = ['hero','about','services','projects','stack','contact'];
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

/* GOLD RULE */
ScrollTrigger.create({
  trigger:'#about',start:'top 70%',
  onEnter:()=>gsap.to('.gold-rule',{scaleX:1,duration:1.1,ease:'power3.out'})
});

/* SECTION REVEALS */
document.querySelectorAll('.rv').forEach(el=>{
  if(el.closest('#hero'))return;
  gsap.fromTo(el,
    {opacity:0,y:64,scale:.98},
    {opacity:1,y:0,scale:1,duration:.85,ease:'power3.out',
     scrollTrigger:{trigger:el,start:'top 82%',toggleActions:'play none none reverse'}}
  );
});

/* FADE OUT on exit */
['about','services','projects','stack','contact'].forEach(id=>{
  const s=document.getElementById(id);if(!s)return;
  gsap.to(s,{opacity:.55,scale:.985,ease:'power1.in',
    scrollTrigger:{trigger:s,start:'bottom 15%',end:'bottom -10%',scrub:true}});
  gsap.to(s,{opacity:1,scale:1,ease:'none',
    scrollTrigger:{trigger:s,start:'top 85%',end:'top 15%',scrub:true}});
});

/* SMOOTH ANCHOR LINKS */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href').slice(1);
    const el=document.getElementById(id);
    if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'})}
  });
});