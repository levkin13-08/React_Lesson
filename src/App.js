import React  from 'react';
import './App.css';
import MessageList  from "./components/MessageList";
import SendMessage  from "./components/SendMessage";

function App() {
  
  return (
    <div className="App">
        <MessageList />
        <SendMessage/>
    </div>
  );
}
export default App;
