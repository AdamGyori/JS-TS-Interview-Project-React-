import "./mainComponent.css"
import React from 'react';


export const MainComponent:React.FC =({children})=>{
  return (<div className="MainComponent">{children}</div>);
}
