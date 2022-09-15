setTimeout(() => {

    document.querySelector('.preLoader').style.display = "none";

}, 4500);


//let tl = gsap.timeline()



let elemIco = document.querySelectorAll(".moviment");
let lapTop = document.querySelector(".pc")
console.log('esta aqui', lapTop)

for (let i = 0; i < elemIco.length; i++){

   
    
    gsap.fromTo('#disc', 
        {
            x:160, 
            y:-600, 
            scale:6, 
            rotate:95
        }, 
            {
            x:-83, 
            y:209, 
            scale:1, 
            rotate:0, 
            duration:22
        });


    gsap.fromTo('#snap', 
        {
            x:160, 
            y:-600, 
            scale:6, 
            rotate:45
        }, 
        {
            x:-69, 
            y:172, 
            delay: 4, 
            scale:1, 
            rotate:0, 
            duration:15
        });

    gsap.fromTo('#safari', 
        {
            x:160, 
            y:-600, 
            scale:6, 
            rotate: 150
        }, 
        {
            x:-182, 
            y:125, 
            delay:6, 
            scale:1, 
            rotate:0, 
            duration:10
        });

    gsap.fromTo('#faceb', 
        {
            x:160, 
            y:-600, 
            scale:6, 
            rotate:352
        }, 
        {
            x:-145, 
            y:86, 
            delay:8, 
            scale:1.5, 
            rotate:0, 
            duration:8
        });

    gsap.fromTo('#tiktok', 
        {
            x:160, 
            y:-600, 
            scale:6, 
            rotate: 150
        }, 
        {
            x:-263, 
            y:30, 
            delay:10, 
            scale:1.5, 
            rotate:0, 
            duration:6
        });

    gsap.fromTo('#inst', 
        {
            x:160 , 
            y:-600, 
            scale:6, 
            rotate: 352
        }, 
        {
            x:-193, 
            y:-39, 
            delay:12, 
            scale:2, 
            rotate:0, 
            duration:4.8
        });

        
}
              // TEST ANIMATION


        gsap.timeline()
            .from('#TextRetro', 
            {
                y:160, 
                scale:8,
                rotate: 45,
                // delay:12, 
                stagger:2, 
                duration:22, 
                ease:"back"
            })
