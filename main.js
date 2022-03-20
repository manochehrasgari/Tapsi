

const tab = document.querySelectorAll('.tab')
const tabContent = document.querySelectorAll('.tab-content')

tab.forEach((item => {
    
    item.addEventListener('click' , ()=>{

    itemTarget = item.getAttribute('data-tab-target');
    
    tab.forEach((t) => t.classList.remove('active'));
    
    item.classList.add('active')


    tabContent.forEach((item=>{
    item.classList.remove('active')  

        if(item.id === itemTarget){
            item.classList.add('active')
        }

    }))    

    })
}))




const removeClass = ()=>{
    // for (let index = 0; index < slider.length; index++) {
    //     const element = slider[index];
    //     element.classList.remove('active');
    // }
    tab.forEach((t) => t.classList.remove('active'));
    tabContent.forEach((t) => t.classList.remove('active'));
}

let val;

const mainSlider = ()=>{

    let n = 0;
    
    val = setInterval(function(){  
            n++;
            removeClass();
                if(n>tabContent.length-1 && n>tab.length-1){
                    n=0;
                }
                tabContent[n].classList.add('active')
                tab[n].classList.add('active')
    
    },5000);

   
    
}

mainSlider()


tab.forEach((e => {
   
   e.addEventListener('click' , ()=>{
           clearInterval(val)
   })
}))




const menu = document.querySelector(".main-header-body_nav")
const hambergerMenu = document.querySelector(".hamberger-menu")


hambergerMenu.addEventListener('click', ()=>{
    menu.classList.toggle('active')
})


 
const accordionHeaders = document.querySelectorAll(".accordion-header");
const accBody = document.querySelectorAll(".accordion-body");

accordionHeaders.forEach(acc => {
    
    acc.addEventListener('click',()=>{
      
        acc.parentElement.classList.toggle('opened')
        
      
  })
})

const title = document.querySelectorAll('.paralex-main-body')

title.forEach(element => {
    element.addEventListener('mouseover', ()=>{
        element.children[1].classList.add('active')
    })
    element.addEventListener('mouseleave', ()=>{
        element.children[1].classList.remove('active')
    })

});