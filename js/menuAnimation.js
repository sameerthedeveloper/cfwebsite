
  document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector("#menubtn");
    const menu = document.getElementById("menu");

    let isOpen = false;

    // Start with hidden + collapsed
    gsap.set(menu, { height: 0, opacity: 0, display: "none" });

    menuBtn.addEventListener("click", () => {
      if (!isOpen) {
        // Open menu
        gsap.set(menu, { display: "flex" });
        gsap.to(menu, {
          height: "auto",
          opacity: 1,
          duration: 0.5,
          ease: "power2.out"
        });
      } else {
        // Close menu
        gsap.to(menu, {
          height: 0,
          opacity: 0,
          duration: 0.5,
          ease: "power1.in",
          onComplete: () => {
            gsap.set(menu, { display: "none" });
          }
        });
      }

      isOpen = !isOpen;
    });
  });

