import React, {useState} from "react"

function SendMessage ()  {
      return (
        <form
          className="send-message-form">
          <input
            // onChange={this.handleChange}
            // value={this.state.message}
            placeholder="Type your message and hit ENTER"
            type="text" />
        </form>
      )
    }
  
export default SendMessage;