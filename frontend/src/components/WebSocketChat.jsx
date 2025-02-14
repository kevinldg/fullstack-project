import { useState } from "react";
import useWebSocket from "../hooks/useWebSocket.jsx";

const WebSocketChat = () => {
    const { messages, sendMessage } = useWebSocket("ws://192.168.178.40:8080/ws");
    const [input, setInput] = useState("");

    return (
        <div>
            <h2>WebSocket Chat</h2>
            <div>
                {messages.map((msg, index) => (
                    <p key={index}>{msg}</p>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="border-black border"
            />
            <button onClick={() => { sendMessage(input); setInput(""); }} className="border-black border">
                Senden
            </button>
        </div>
    );
};

export default WebSocketChat;