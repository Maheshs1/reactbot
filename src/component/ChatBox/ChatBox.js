import React from "react";
import "./ChatBox.css";

class ChatBox extends React.Component {
  state = {
    message: ""
  };

  onTyping = e => {
    this.setState({
      message: e.target.value
    });
  };

  clearTyping = e => {
    e.preventDefault();
    this.setState({
      message: ""
    });
  };

  render() {
    return (
      <div className="ChatBox">
        <form>
          <input
            type="text"
            value={this.state.message}
            onChange={this.onTyping}
          />
          <button
            onClick={e => {
              this.clearTyping(e);
              this.props.sendMessage(this.state.message);
            }}
          >
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default ChatBox;
