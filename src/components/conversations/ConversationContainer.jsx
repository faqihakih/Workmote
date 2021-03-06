import React from "react";
import { Link } from "react-router-dom";
import "./ConverstationStyles.css";

export const ConversationContainer = ({ selectedChat }) => {
  return (
    <div className="detail">
      <div className="flex detail-bottom justify-between -mt-12 sm:-mt-4 md:-mt-5 lg:-mt-4">
        <h3 className="text-white mt-3 ml-10">Project Name</h3>
        <div className="flex mb-4 pt-4">
          <Link class="iconify mr-5 " data-icon="ant-design:paper-clip-outlined" data-inline="false" style={{ color: 'white' }} data-width="20" data-height="20"></Link>
          <Link class="iconify mr-5 " data-icon="fa-solid:video" data-inline="false" style={{ color: 'white' }} data-width="20" data-height="20"></Link>
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
        <Link className="messageSend"><span class="iconify" style={{ color: "white" }} data-icon="zondicons:send" data-inline="false"></span></Link>
      </div>
    </div>
  );
};
