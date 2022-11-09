let sidbar=document.querySelector('.sidbar')
let closeSidbar=document.querySelector('.close-sidbar');
let openSidar=document.querySelector('.open-sidbar');
//Opensidbar
openSidar.addEventListener('click',()=>{
    sidbar.classList.add('active');
})
//Close sidbar
closeSidbar.addEventListener('click',()=>{
    sidbar.classList.remove('active');
})
//Close Sidbar If Scroll
addEventListener('scroll',()=>{
    sidbar.classList.remove('active');
})

//Toggle Mode
let modeSpan=document.getElementById('mood');
let iconTogg=document.querySelector('.mood i')
let mood;
if(localStorage.getItem('mood')!=null){
    if(localStorage.getItem('mood')=='dark'){
        iconTogg.classList.replace('fa-moon','fa-sun')
        mood='dark';
        document.body.classList.add('dark');
    }else{
        iconTogg.classList.replace('fa-sun','fa-moon')
        mood='light';
        document.body.classList.remove('dark');
    }
}
modeSpan.addEventListener('click',()=>{
    console.log(';llh');
    if(mood==="dark"){
        iconTogg.classList.replace('fa-sun','fa-moon')
        mood='light';
        localStorage.setItem('mood',mood);
        document.body.classList.remove('dark');
    }else{
        iconTogg.classList.replace('fa-moon','fa-sun')
        mood='dark'
        localStorage.setItem('mood',mood);
        document.body.classList.add('dark');
    }
})





//Progress
let sectionSkills=document.querySelector('.skills');
let allspanProg=document.querySelectorAll('.prog span');
addEventListener('scroll',()=>{
    if(scrollY>=sectionSkills.offsetTop-350){
        allspanProg.forEach((span)=>{
            span.style.width=span.getAttribute('data-prog');
        })
    }
})
//Add My Age
let age=document.querySelector('.age');
let mybirthday=new Date('16 Aug 2002');
let dateNow=new Date();
let myage=dateNow.getTime()- mybirthday.getTime();
age.textContent=Math.floor(myage/1000/365/24/60/60);

//Filter My Projects
let listProjects=document.querySelectorAll('.list-portfolio li');
listProjects.forEach((li)=>{
    li.addEventListener('click',()=>{
        listProjects.forEach((e)=>e.classList.remove('active'));
        li.classList.add('active');
    })
})









//Button Up
let upBtn=document.querySelector('.btn-up');
addEventListener('scroll',()=>{
    if(scrollY>=120){
        upBtn.classList.add('active')
    }else{
        upBtn.classList.remove('active')
    }
})
upBtn.addEventListener('click',()=>{
    window.scrollTo(0,0)
})