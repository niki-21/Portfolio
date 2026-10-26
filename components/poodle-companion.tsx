"use client";
import { useState } from "react";

export function PoodleCompanion() {
  const [paused,setPaused]=useState(false);
  return <aside className={`poodle-companion ${paused ? "is-paused" : ""}`} aria-label="Toy poodle companion">
    <div className="poodle-track" aria-hidden="true"><div className="poodle-facing"><div className="poodle-sprite" /></div></div>
    <button className="poodle-toggle" onClick={()=>setPaused(!paused)} aria-pressed={paused}>{paused ? "Let poodle run" : "Pause poodle"}</button>
  </aside>;
}
