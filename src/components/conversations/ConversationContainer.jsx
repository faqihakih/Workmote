import React, { useState, useEffect } from "react";
import "./ConverstationStyles.css";

export const ConversationContainer = ({ selectedChat }) => {
  return (
    <div className="detail">
      <div className="flex justify-between fixed nameChat">
        <h3 className="text-white mt-6">Nama Project</h3>
        <div className="flex mb-4 pt-4">
          <span class="iconify mr-5 " data-icon="ant-design:paper-clip-outlined" data-inline="false" style={{ color: 'white' }} data-width="40" data-height="40"></span>
          <span class="iconify mr-5 " data-icon="fa-solid:video" data-inline="false" style={{ color: 'white' }} data-width="40" data-height="40"></span>
        </div>
      </div>
      <div className="detail-top">
        {
          selectedChat.chats.map((c) => {
            return (
              <div className={c.is_me ? "rightChat" : "leftChat"}>
                <div className="chat rounded">
                  <h5 className="text-xs">{c.sender.name}</h5>
                  <h4 className="text-base">{c.message}</h4>
                  <div className="inline-flex parent chat">
                    <p className="text-xs">{c.date}</p>
                    <span class="iconify" data-icon="bi:check-all" data-inline="false" style={{ color: '#0CC0B5' }}></span>
                  </div>
                </div>
              </div>

            )
          })
        }
      </div>
      <div className="detail-bottom">
        <input className="messageBox px-4" placeholder="Tulis Pesan" />
        <a className="messageSend"><span class="iconify" style={{ color: "white" }} data-icon="zondicons:send" data-inline="false"></span></a>
      </div>
    </div>
  );
};
