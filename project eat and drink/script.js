var csr =document.querySelector("#cursor")
var csr1 =document.querySelector("#cursor-b")
document.addEventListener("mousemove",function(dets){
    csr.style.left= dets.x+"px"
    csr.style.top= dets.y+"px"
    csr1.style.left= dets.x - 150 +"px"
    csr1.style.top= dets.y -150 +"px"
})
var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    csr.style.scale = 3;
    csr.style.border = "1px solid #fff";
    csr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    csr.style.scale = 1;
    csr.style.border = "0px solid #95C11E";
    csr.style.backgroundColor = "#95C11E";
  });
});
gsap.to("#nav",{
    backgroundColor:"black",
    height:"100px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroll:"body",
        start:"top -10%",
        end:"top -11%",
        scrub: 1
    }
})
gsap.to("#main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#main",
        scroll:"body",
        start:"top -20%",
        end:"top -75%",
        scrub:1
    }
})
gsap.from("#about-us img,#about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });
  gsap.from(".card", {
    scale: 0.8,
    // opacity:0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".card",
      scroller: "body",
      // markers:false,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });
  gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      // markers:true,
      start: "top 75%",
      end: "top 70%",
      scrub: 3,
    },
  });