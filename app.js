const tl = gsap.timeline({ defaults: { ease: "power1.out" } });


tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.25 });
tl.fromTo(".navlinks", { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.25 });
tl.fromTo(".navapp", { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.25 });
tl.fromTo(".greeting", { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.25 });
tl.fromTo(".explore", { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.25 });