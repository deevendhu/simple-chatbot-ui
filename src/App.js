import './App.css';

import { useState } from 'react';
import { createPortal } from 'react-dom';

import ChatWindow  from './components/ChatWindow'

function App() {
    let [ chatWindow, toggleChatWindow ] = useState(true)

    let chatbotDiv = document.getElementById("chat-ui")
    
    let handleClick = (e) => {
        toggleChatWindow(true)
    }

    return (
        <div>
            {chatWindow 
            ? <ChatWindow />
            : <div id="chat-root" onClick={(e) => handleClick(e)}></div>
            }
        </div>
    );
}

export default App;
