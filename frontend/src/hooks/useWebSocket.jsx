import { useEffect, useState } from "react";

const useWebSocket = (url) => {
    const [socket, setSocket] = useState(null);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const ws = new WebSocket(url);

        ws.onopen = () => console.log("WebSocket verbunden!");
        ws.onmessage = (event) => {
            console.log("Nachricht erhalten:", event.data);
            setMessages((prev) => [...prev, event.data]);
        };
        ws.onclose = () => console.log("WebSocket geschlossen");

        setSocket(ws);

        return () => ws.close();
    }, [url]);

    const sendMessage = (msg) => {
        if (socket && socket.readyState === WebSocket.OPEN) {
            socket.send(msg);
        }
    };

    return { messages, sendMessage };
};

export default useWebSocket;
