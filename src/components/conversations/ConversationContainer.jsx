import React, { useState, useEffect } from "react";
import "./ConverstationStyles.css";

export const ConversationContainer = ({ selectedChat }) => {
  return (
    <div className="detail">
      <div className="detail-top">
        {
          selectedChat.chats.map((c) => {
            return (
              <div className={c.is_me ? "rightChat" : "leftChat"}>
                <h3>{c.sender.name}</h3>
                <h4>{c.message}</h4>
                <p>{c.date}</p>
              </div>

            )
          })
        }
      </div>
      <div className="detail-bottom">
        <input className="messageBox"/>
        <button>Send</button>
      </div>
    </div>
  );
};
