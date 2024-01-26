let cursor=document.querySelector(".cursor")
let icons=document.querySelectorAll(".icons")
document.querySelector(".main").addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        opacity:0.4,
        scale:1,
        x:dets.x,
        y:dets.y,
        transform:"translate(-50%,-50%)"
    })
})
