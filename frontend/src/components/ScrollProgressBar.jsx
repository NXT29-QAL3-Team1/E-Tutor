import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function ScrollProgress() {
    const barRef = useRef(null);
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);
    }, [pathname]);


    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(barRef.current, {
                width: "100%",
                ease: "none",
                scrollTrigger: {
                    trigger: document.documentElement,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                },
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={barRef}
            style={{
                position: "fixed",
                top: "0",
                left: "0",
                height: "5px",
                backgroundColor: "#ff5e00ff",
                width: "0",
                zIndex: "99999",
            }}
        />
    );
}