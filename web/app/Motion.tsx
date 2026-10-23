"use client";

import { useEffect } from "react";

// Reveals each [data-reveal] once as it enters, and cycles the lit standard name.
export default function Motion() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));

    const names = Array.from(document.querySelectorAll<HTMLElement>("[data-standard]"));
    const topic = document.querySelector<HTMLElement>("[data-standard-topic]");
    let i = 0;
    const light = () => {
      names.forEach((n, j) => n.classList.toggle("is-lit", j === i));
      if (topic) topic.textContent = names[i]?.dataset.standard ?? "";
    };
    light();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = reduce
      ? undefined
      : window.setInterval(() => {
          i = (i + 1) % names.length;
          light();
        }, 2000);

    return () => {
      io.disconnect();
      if (timer) window.clearInterval(timer);
    };
  }, []);

  return null;
}
