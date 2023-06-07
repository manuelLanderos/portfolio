import React from "react";
import './footer.css'

function footer() {
  return (
    <div className="footer">
      <ul className="under">
        {/* <li className="list"><a href="https://twitter.com/julesforrest">Twitter</a></li> */}
        <li className="list"><a href="https://github.com/manuelLanderos" target="_blank" rel="noreferrer">Github</a></li>
        <li className="list"><a href="mailto:manuel.landeros@icloud.com" target="_blank" rel="noreferrer">Email</a></li>
        <li className="list"><a href="https://www.linkedin.com/in/manuel-landeros-a4332b219/" target="_blank" rel="noreferrer" >LinkedIn</a></li>
        {/* <li className="list"><a href="https://dribbble.com/julesforrest">Dribbble</a></li> */}
        <li className="list">
          <p className="hand">👋</p>
        </li>
      </ul>
    </div>
  );
}

export default footer;