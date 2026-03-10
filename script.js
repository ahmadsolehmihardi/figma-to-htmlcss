const fade = document.querySelectorAll('.scroll-anim');

const observe = new IntersectionObserver((e)=>{
    e.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });

},{threshold:0.2});

fade.forEach(key=>{
    observe.observe(key);
});