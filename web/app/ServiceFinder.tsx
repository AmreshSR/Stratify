"use client";

import { useState } from "react";
import { SERVICE_GROUPS, SITUATIONS } from "./content";

export default function ServiceFinder({ children }: { children?: React.ReactNode }) {
  const [picked, setPicked] = useState<number | null>(null);
  const match = picked === null ? null : SITUATIONS[picked];

  return (
    <div className="services__grid">
      <div className="services__side">
        <div className="finder" data-reveal style={{ "--i": 1 } as React.CSSProperties}>
          <h3 className="finder__title">Where do you stand?</h3>
          <div className="finder__options" role="group" aria-label="Choose your situation">
            {SITUATIONS.map((s, i) => (
              <button
                key={s.label}
                type="button"
                className="option"
                aria-pressed={picked === i}
                onClick={() => setPicked(picked === i ? null : i)}
              >
                {s.label}
              </button>
            ))}
          </div>
          <p className="finder__answer" aria-live="polite">
            {match ? match.answer : "Pick the sentence closest to your situation to see where we would start."}
          </p>
        </div>
        {children}
      </div>

      <div className="services__list" data-reveal style={{ "--i": 2 } as React.CSSProperties}>
        {SERVICE_GROUPS.map((group) => (
          <div className="service-group" key={group.kind}>
            <h3 className="service-group__kind">{group.kind}</h3>
            <ul>
              {group.items.map((item) => {
                const lit = !match || match.ids.includes(item.id);
                return (
                  <li key={item.id} className={lit ? "service" : "service is-dim"}>
                    <span className="service__name">{item.name}</span>
                    <span className="service__standard">{item.standard ?? ""}</span>
                    <span className="service__text">{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
