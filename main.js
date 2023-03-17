/* ------Great Horned Owl Sequence------  */
gsap.set(".katakana-super", { yPercent: -5});
gsap.set(".dotsBlue", { yPercent: 10});
gsap.set(".compA", { yPercent: -20});
gsap.set(".clusterA", { yPercent: 5});

gsap.to(".katakana-super", {
  yPercent: 5,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterA",
    scrub: 1
  }, 
});

gsap.to(".dotsBlue", {
  yPercent: -10,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterA",
    scrub: 1
  }, 
});


gsap.to(".compA", {
  yPercent: 20,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterA",
    scrub: 1
  }, 
});

gsap.to(".caption", {
  yPercent: 100,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterA",
  // markers:true,
    end: "bottom center",
    scrub: 1
  }, 
});

gsap.to(".clusterA", {
  yPercent: -5,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterA",
    end: "bottom center",
    scrub: 1
  }, 
});



/* ------SECOND Sequence------  */
gsap.set(".titleBurrowing", { yPercent: -5, opacity: 0});
gsap.set(".katakana-computer", { yPercent: 5,});
gsap.set(".dotsWhite", { yPercent: 10});
gsap.set(".compB", { yPercent: -20});
gsap.set(".clusterB", { yPercent: 5});

gsap.to(".titleBurrowing", {
  yPercent: 5,
  ease: "none",
  opacity: 1,
  scrollTrigger: {
    trigger: ".caption",
    start: "top center",
    scrub: 1
  }, 
});

gsap.to(".katakana-computer", {
  yPercent: 5,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterB",
    scrub: 1
  }, 
});

gsap.to(".dotsWhite", {
  yPercent: -10,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterB",
    scrub: 1
  }, 
});


gsap.to(".compB", {
  yPercent: 20,
  ease: "none",
  opacity: 1,
  scrollTrigger: {
    trigger: ".clusterB",
    scrub: 1
  }, 
});


gsap.to(".captionBurrowing", {
  yPercent: 200,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterB",
  // markers:true,
    end: "bottom center",
    scrub: 1
  }, 
});

gsap.to(".clusterB", {
  yPercent: -5,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterB",
  // markers:true,
    end: "bottom center",
    scrub: 1
  }, 
});




/* ------Small Sequence------  */
gsap.set(".small-container", { yPercent: -5,});
gsap.set(".dotsThree", { yPercent: 20});
gsap.set(".clusterB", { yPercent: 5});

gsap.to(".small-container", {
  yPercent: 5,
  ease: "none",
  scrollTrigger: {
    trigger: ".image-sm",
    start: "top center",
    end: "center center",
    scrub: 1
  }, 
});


gsap.to(".dotsThree", {
  yPercent: -30,
  ease: "none",
  scrollTrigger: {
    trigger: ".small-container",
    start: "top center",
    scrub: 1
  }, 
});


gsap.to(".dotsWhite", {
  yPercent: -10,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterB",
    scrub: 1
  }, 
});


gsap.to(".compB", {
  yPercent: 20,
  ease: "none",
  opacity: 1,
  scrollTrigger: {
    trigger: ".clusterB",
    scrub: 1
  }, 
});


gsap.to(".captionBurrowing", {
  yPercent: 200,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterB",
  // markers:true,
    end: "bottom center",
    scrub: 1
  }, 
});

gsap.to(".clusterB", {
  yPercent: -5,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterB",
  // markers:true,
    end: "bottom center",
    scrub: 1
  }, 
});



// COUNTER

// Get all the elements with the class name "vote"
let votes = document.getElementsByClassName("vote");

// Loop through each element
for (let vote of votes) {
  // Get the arrow elements inside each vote element by class name
  let voteUp = vote.querySelector(".vote-up");
  // let voteDown = vote.querySelector(".vote-down");

  // Get the counter element inside each vote element by class name
  let voteCounter = vote.querySelector(".vote-counter");

  // Add a click event listener to the up arrow
  voteUp.addEventListener("click", function() {
    // Increment the counter value by one
    voteCounter.textContent = parseInt(voteCounter.textContent) + 1;
  });

  // Add a click event listener to the down arrow
  // voteDown.addEventListener("click", function() {
  //   // Decrement the counter value by one
  //   voteCounter.textContent = parseInt(voteCounter.textContent) - 1;
  // });
}