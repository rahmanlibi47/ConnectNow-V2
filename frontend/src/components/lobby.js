import React, { useState } from "react";
import "./lobby.css";
import logo from "./static/images/chat-icon.png";

const Lobby = () => {
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const roomName = room.toUpperCase();

    // Perform fetch request to get the token
    const response = await fetch(`/get_token/?channel=${roomName}`);
    const data = await response.json();

    const UID = data.uid;
    const token = data.token;

    sessionStorage.setItem("UID", UID);
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("room", roomName);
    sessionStorage.setItem("name", name);
    window.open("/room", "_self");
  };

  return (
    <main>
      <section id="form-container">
        <img id="logo" src={logo} alt="ChatMe Logo" />

        <div id="welcome-message">
          <h1>ConnectNow</h1>
          <p style={{ color: "white", fontWeight: 700 }}>
            Instant Video Calls with Ease
          </p>
        </div>

        <form id="form" onSubmit={handleSubmit}>
          <div className="field-wrapper">
            <div className="form-field">
              <input
                name="room"
                placeholder="Enter a room name..."
                style={{
                  textTransform: "uppercase",
                  backgroundColor: "transparent",
                }}
                value={room}
                onChange={(e) => setRoom(e.target.value)}
              />
            </div>

            <div className="form-field">
              <input
                name="name"
                placeholder="Enter your name..."
                style={{
                  textTransform: "uppercase",
                  backgroundColor: "transparent",
                }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-field">
              <input type="submit" value="Join Stream" />
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Lobby;
