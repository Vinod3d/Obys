

function locoScroll() {
  // Register GSAP ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Initialize Locomotive Scroll
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  // Update ScrollTrigger on Locomotive Scroll events
  locoScroll.on("scroll", ScrollTrigger.update);

  // Proxy Locomotive Scroll methods to ScrollTrigger
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // Refresh ScrollTrigger and update Locomotive Scroll
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}








function loadingAnimation(){
  var tl = gsap.timeline()

  tl.from(".line h1", {
    y:150,
    stagger:0.2,
    duration:1,
    delay:0.5,
  })

  tl.from("#line1-part1, .line h2", {
    opacity: 0,
    onStart: function(){
      var h5timer = document.querySelector("#line1-part1 h5");
      var grow = 0;

      var interval = setInterval(function() {
        if (grow < 100) {
          grow++;
          h5timer.textContent = grow;
        } else {
          clearInterval(interval); // Stop the interval when reach 100
        }
      }, 30);
    }
  })

  tl.to(".line h2", {
    animationName: "anime",
    opacity: 1,
  })

  tl.to("#loader", {
    opacity:0,
    delay: 2.8,
    duration:0.5
  })

  tl.from("#page1", {
    delay: 0.2,
    y: 1200,
    opacity:0,
    ease: Power4
  })

  tl.to("#loader", {
    display:"none"
  })

  tl.from("#nav", {
    opacity:0
  })

  tl.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1", {
    y: 150,
    delay: 0,
    duration: 1,
    stagger:0.2,
  })
}
loadingAnimation();

function cursorAnimation(){
  document.addEventListener("mousemove", function(dets){
    gsap.to("#crsr", {
      left:dets.x,
      top:dets.y,
    })
  })

  Shery.makeMagnet("#nav-part2 h4");
}
cursorAnimation();

