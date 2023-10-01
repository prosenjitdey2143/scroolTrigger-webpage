var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "0% 95%",
    end: "50% 50%",
    scrub: true,
    // markers: true,
  },
});

tl.to(
  "#fanta",
  {
    top: "110%",
    left: "15%",
  },
  "oneElem"
)
  .to(
    "#orange2",
    {
      width: "20vw",
      top: "160%",
      right: "5%",
    },
    "oneElem"
  )
  .to(
    "#orangeslice",
    {
      top: "150%",
      left: "5%",
      width: "20vw",
      rotate: "360deg",
    },
    "oneElem"
  )
  .to(
    "#leaf",
    {
      top: "110%",
      left: "50%",
      rotate: "90deg",
    },
    "oneElem"
  );
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".three",
    start: "0% 85%",
    end: "50% 50%",
    scrub: true,
    // markers:true
  },
});
tl2
  .to(
    "#fanta",
    {
      top: "213%",
      left: "44%",
      width: "13vw",
    },
    "+=2"
  )
  .from(
    ".three-leaf2",
    {
      right: "-10%",
      rotate: "30deg",
    },
    "+=4"
  )
  .from(
    ".can1",
    {
      left: "-120%",
      bottom: "-100%",
      rotate: "-30deg",
    },
    "can"
  )
  .from(
    ".can2",
    {
      right: "-120%",
      bottom: "-100%",
      rotate: "30deg",
    },
    "can"
  )
  .from(
    ".cardfruit",
    {
      width: "0",
      rotate: "30deg",
    },
    "+=3"
  )
  .from(
    ".three-leaf1",
    {
      left: "-10%",
      rotate: "30deg",
    },
    "+=2"
  );
