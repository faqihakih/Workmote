import React, { useState, useEffect } from "react";
import "./ConverstationStyles.css";

export const ConversationContainer = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const temp = [];
    for (let i = 0; i < 111; i++) {
      temp.push("Project " + i.toString());
    }
    setProjects(temp);
  }, []);

  return (
    <div className="detail">
      <div className="detail-top">
        {
          projects.map((p) => (<h1>{p}</h1>))
        }
      </div>
      <div className="detail-bottom">
        <input className="messageBox"/>
        <button>Send</button>
      </div>
    </div>
  );
};
