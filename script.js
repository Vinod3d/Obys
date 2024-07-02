

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

locoScroll()



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

  tl.from("#hero1, #page2", {
    opacity:0,
  }, "-=1.2");
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

  var videoContainer = document.querySelector("#video_container")
  var crsr = document.querySelector("#crsr")
  var video = document.querySelector("#video_container video")
  videoContainer.addEventListener("mouseenter", function(){
    crsr.innerHTML = `<i class="ri-play-fill"></i>`
    videoContainer.addEventListener("mousemove", function(dets){
      gsap.to("#crsr", {
        width: "8vw",
        height: "8vw",
        backgroundColor: "#ff0000",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
        duration: 0.5
      })
      gsap.to("#video_cursor", {
        opacity: 0,
      })
    })
  })

  videoContainer.addEventListener("mouseleave", function(){
    crsr.innerHTML = ``
    gsap.to("#crsr", {
      height: "2.5vw",
      width: "2.5vw",
      zIndex: "9999",
      backgroundColor: "transparent",
    })

    gsap.to("#video_cursor", {
      opacity: 1,
    })
  })

  var flag = 0;
  videoContainer.addEventListener("click", function(){
    if(flag == 0){ 
      video.play();
      video.style.opacity = 1;
  
      document.querySelector("#crsr").innerHTML = `<i class="ri-pause-fill"></i>`
      gsap.to("#crsr", {
        scale:0.5
      })
      flag = 1;
    } else{
      video.pause();
      video.style.opacity = 0;
  
      document.querySelector("#crsr").innerHTML = `<i class="ri-play-fill"></i>`
      gsap.to("#crsr", {
        scale:1
      })
      flag = 0;
    }
  })
}
cursorAnimation();

function sheryAnimation(){
  Shery.imageEffect(".image-div", {
    style: 3,
    config: {"uFrequencyX":{"value":12,"range":[0,100]},"uFrequencyY":{"value":12,"range":[0,100]},"uFrequencyZ":{"value":10,"range":[0,100]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272749932567818},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.32,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    gooey:true,
  });
}

sheryAnimation()

function flagAnimation(){
  document.addEventListener("mousemove", function(dets){
    gsap.to("#flag", {
      x: dets.clientX,
      y: dets.clientY,
    })
  })
  
  document.querySelector("#hero3").addEventListener("mouseenter", function(){
    gsap.to("#flag", {
      opacity:1
    })
  })
  document.querySelector("#hero3").addEventListener("mouseleave", function(){
    gsap.to("#flag", {
      opacity:0
    })
  })
}

flagAnimation()

function footerTextAnimation(){
  $(document).ready(function() {
    $('#footer h1').textillate({
      in: { effect: 'fadeIn' },
      out: { effect: 'fadeOut' },
    });
  
    document.querySelector("#footer h1").addEventListener("mouseenter", function(){
      gsap.from("#footer h1", {
        onStart: function() {
          $('#footer h1').textillate('in');
        },
      });
    });
  
  });
}

footerTextAnimation();