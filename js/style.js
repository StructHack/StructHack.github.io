window.addEventListener('DOMContentLoaded',()=>{
    // Just setting the aside's height
    let nav = document.querySelector('.aside_container');
    nav.style.height = window.innerHeight+'px';

    // Onclicking the ctf's link

    let ctf = document.querySelectorAll('.ctf');
    ctf.forEach(items=>{
        items.addEventListener('click',(event)=>{
            page=event.target.id;
            window.location.target="_blank";
            window.location.href=`${page}.html`;
        })
    })

})

