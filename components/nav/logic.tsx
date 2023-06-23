'use client';

// Toggle Menu Navbar Mobile
export function toggleMenu(e:any){
    const mobileMenu = document.getElementById('mobile-menu');
    if(mobileMenu?.classList.contains('hidden')){
       mobileMenu?.classList.remove('hidden');
    }else{
        mobileMenu?.classList.remove('animate-slide_left')
        mobileMenu?.classList.add('animate-slide_right')
        
        mobileMenu?.addEventListener('animationend',(ev: AnimationEvent)=>{
            if(ev.animationName == 'slideRight'){
                mobileMenu.classList.add('hidden')
                mobileMenu.classList.add('animate-slide_left')
                mobileMenu.classList.remove('animate-slide_right')
            }
        })       
    }
}
