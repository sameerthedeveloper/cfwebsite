document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector("#menubtn");
  const menu = document.getElementById("menu");
  const links = menu.querySelectorAll("button");

  // Start with hidden + collapsed
  gsap.set(menu, { height: 0, opacity: 0, display: "none" });
  gsap.set(links, { opacity: 0, y: 20 });

  const tl = gsap.timeline({ paused: true });

  tl.set(menu, { display: "flex" }) // Show menu (flex)
    .to(menu, {
      height: "auto",
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    })
    .to(
      links,
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
      },
      "-=0.3"
    );

  let isOpen = false;

  menuBtn.addEventListener("click", () => {
    if (!isOpen) {
      tl.play();
    } else {
      gsap.to(links, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        stagger: {
          each: 0.05,
          from: "end",
        },
        ease: "power1.in",
        onComplete: () => {
          gsap.to(menu, {
            height: 0,
            opacity: 0,
            duration: 0.4,
            ease: "power1.in",
            onComplete: () => {
              gsap.set(menu, { display: "none" });
              tl.pause(0); // Reset timeline
            },
          });
        },
      });
    }

    isOpen = !isOpen;
  });
});
