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


//ADD Class Active A Link iF Scroll Start from same name
let allSections=Array.from(document.querySelectorAll('section'));
let linkSidbar=document.querySelectorAll('.sidbar ul li a');
addEventListener('scroll',()=>{
    allSections.forEach((section,index)=>{
        if(window.scrollY>=section.offsetTop-200 && window.scrollY<allSections[index+1].offsetTop-200){
            linkSidbar.forEach((link)=>{
                link.classList.remove('active');
                if(link.getAttribute('data-section')==section.id){
                    link.classList.add('active');
                }
            })
        }
    })
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

// My Projects 
let portfolioContent=document.querySelector('.portfolio-content');
let allProjects;
fetch('JS/projects.json').then(res=>res.json()).then((projects)=>{
    console.log(projects)
    for(let x=0;x<projects.length;x++){
        portfolioContent.innerHTML+=`
            <div class="item all ${projects[x].category}" >
                <img src="${projects[x].img}" alt="" />
                <span class="name">${projects[x].name}</span>
                <div class="links">
                    <a href="${projects[x].review}" target="_blank"><i class="fas fa-eye"></i></a>
                    <a href="${projects[x].code}" target="_blank"><i class="fas fa-link"></i></a>
                </div>
            </div>
        `
    }
    allProjects=document.querySelectorAll('.portfolio-content .item');
})

//Filter My Projects
let listProjects=document.querySelectorAll('.list-portfolio li');
addEventListener('load',()=>{
})
listProjects.forEach((li)=>{
    li.addEventListener('click',()=>{
        console.log(li);
        listProjects.forEach((e)=>e.classList.remove('active'));
        li.classList.add('active');
        console.log(allProjects);
        allProjects.forEach((e)=>{
            if(e.classList.contains(`${li.getAttribute('data-name')}`)){
                e.classList.remove('active');
                e.classList.remove('hidden');
                setTimeout(()=>{
                    e.classList.add('active');
                },.1)
            }else{
                e.classList.add('hidden')
                e.classList.remove('active');
            }
        })
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