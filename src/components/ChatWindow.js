import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import BotMessage from "./BotMessage";
import UserMessage from "./UserMessage";
import Messages from "./Messages";
import Input from "./Input";
import Header from "./Header";
import "./styles/styles.css";

import API from "./ChatbotAPI";

function Chatbot() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        async function loadWelcomeMessage() {
            // TODO: Make first API call with HI
            setMessages([
                <BotMessage
                    key="0"
                    fetchMessage={async () => await API.GetChatbotResponse("hi")}
                />
            ]);
        }

        loadWelcomeMessage();
    }, []);

    const send = async text => {
        const newMessages = messages.concat(
            <UserMessage key={messages.length + 1} text={text} />,
            // TODO: Handle messages from bot here
            <BotMessage
                key={messages.length + 2}
                fetchMessage={async () => await API.GetChatbotResponse(text)}
            />
        );
        setMessages(newMessages);
    };

    return (
        <div className="chatbot">
            <Header />
            <Messages messages={messages} />
            <Input onSend={send} />
        </div>
    );
}

export default Chatbot

