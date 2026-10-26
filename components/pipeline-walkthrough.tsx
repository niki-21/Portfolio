"use client";
import { useState } from "react";

const steps = [
  { label: "Ingredients", title: "Start with the data.", detail: "Dish ingredients and user allergy preferences form the inputs to the pipeline.", output: "Dish ingredients + allergy preferences" },
  { label: "Inference", title: "Turn inputs into signals.", detail: "Ingredient-based allergen detection and rule-based inference identify potential conflicts.", output: "Ingredient-level allergen signals" },
  { label: "Ranking", title: "Make the result useful.", detail: "Scoring and user trust weighting help rank dishes for further review.", output: "Ranked dish recommendations" },
  { label: "Experience", title: "Put it in someone’s hands.", detail: "A Streamlit interface and Folium maps connect the inference pipeline to an interactive dining experience.", output: "Streamlit app + interactive map" },
];
export function PipelineWalkthrough() {
  const [active,setActive] = useState(0);
  return <div className="pipeline-demo" onClick={event=>event.stopPropagation()}>
    <div className="pipeline-demo-top"><span>ALLERNAV / INSIDE THE PIPELINE</span><span className="pipeline-pulse" aria-hidden="true" /></div>
    <div className="pipeline-stages" role="tablist" aria-label="Explore the AllerNav pipeline">{steps.map((step,index)=><button key={step.label} id={`pipeline-tab-${index}`} role="tab" aria-selected={active===index} aria-controls="pipeline-detail" onKeyDown={event=>{
      let next=active;
      if(event.key==="ArrowRight") next=(index+1)%steps.length;
      else if(event.key==="ArrowLeft") next=(index+steps.length-1)%steps.length;
      else if(event.key==="Home") next=0;
      else if(event.key==="End") next=steps.length-1;
      else return;
      event.preventDefault(); event.stopPropagation(); setActive(next);
      document.getElementById(`pipeline-tab-${next}`)?.focus();
    }} onClick={()=>setActive(index)}><span>0{index+1}</span>{step.label}</button>)}</div>
    <div className="pipeline-flow" aria-hidden="true"><span style={{width:`${(active+1)*25}%`}} /></div>
    <div id="pipeline-detail" role="tabpanel" aria-labelledby={`pipeline-tab-${active}`} className="pipeline-detail" key={active} tabIndex={0}><p className="pipeline-step">STEP 0{active+1} / 04</p><h3>{steps[active].title}</h3><p>{steps[active].detail}</p><div className="pipeline-output"><span>OUTPUT</span>{steps[active].output}</div></div>
    <div className="pipeline-demo-bottom"><span>Explore how the pieces connect</span><button onClick={()=>setActive((active+1)%steps.length)} aria-label="Explore next pipeline stage">Next stage ↗</button></div>
  </div>;
}
