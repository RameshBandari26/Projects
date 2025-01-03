import React, { useState } from "react";
import { Undo2 } from "lucide-react";
import Joke from "./Joke";
import ChatDashboard from "./ChatDashboard";
const AuthSelectScreen = () => {
  const [selectedScreen, setSelectedScreen] = useState("Chat");
  return (
    <>
      {selectedScreen === "Login" ? <Joke /> : <ChatDashboard />}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          backgroundColor: "white",
          color: "black",
          paddingLeft: "2%",
          paddingRight: "2%",
          paddingTop: "1%",
          paddingBottom: "1%",
          borderRadius: "2vw",
        }}
        onClick={() => {
          setSelectedScreen(selectedScreen === "Login" ? "Chat" : "Login");
        }}
      >
        <Undo2 />
      </div>
    </>
  );
};

export default AuthSelectScreen;
