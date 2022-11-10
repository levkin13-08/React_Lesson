import React, {useState} from "react"

function MessageList() {
    const [messages, setMessages] = useState(
        [
            {
              text: 'take out trash',
              author: 'Pushkin'
            },
            {
              text: 'wife to dinner',
              author: 'Lermontov'
            },
            {
              text: 'make react app',
              author: 'Esenin'
            },
        ]
      );
    return messages.map((message) =>
    {
      return (
       <li key={message.text}>
         <div>
           {message.text}
         </div>
         <div>
           {message.author}
         </div>
       </li>
     )
   })};
    

    
export default MessageList;