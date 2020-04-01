import React from "react";
import ChatMessage from "../component/ChatMessage/ChatMessage";
import ChatBox from "../component/ChatBox/ChatBox";

class ChatUI extends React.Component {
  state = {
    messages: [
      {
        msg: "What Is Your Name?",
        questionType: 0,
        type: "text",

        ans: null,
        isCamRequired: false
      }
    ],
    currentQuestion: 0
  };

  addMessage = message => {
    const newMessage = [...this.state.messages];
    newMessage.push(message);
    this.setState({
      messages: newMessage
    });
    console.log("sdf", newMessage);
  };

  accepted = value => {
    if (this.state.currentQuestion > this.props.allQuestions.length) return;
    console.log(this.state.currentQuestion, this.props.allQuestions.length);
    const messages = [...this.state.messages];
    if (typeof value !== "string") messages[messages.length - 1].ans = "Yes";
    else messages[messages.length - 1].ans = value;
    this.setState(prevState => {
      let currentQuestion = prevState.currentQuestion;
      if (currentQuestion < this.props.allQuestions.length) {
        messages.push(this.props.allQuestions[this.state.currentQuestion]);
        // prevState.currentQuestion + 1;
      }
      return {
        messages: messages,
        currentQuestion: currentQuestion + 1
      };
    });
  };

  declined = value => {
    if (this.state.currentQuestion > this.props.allQuestions.length) return;
    console.log(this.state.currentQuestion, this.props.allQuestions.length);

    const messages = [...this.state.messages];
    messages[messages.length - 1].ans = value;
    this.setState(prevState => {
      console.log(this.state.currentQuestion, this.props.allQuestions.length);

      let currentQuestion = prevState.currentQuestion + 2;
      if (currentQuestion < this.props.allQuestions.length) {
        messages.push(this.props.allQuestions[this.state.currentQuestion + 1]);
        //currentQuestion = prevState.currentQuestion + 1;
      }
      return {
        messages: messages,
        currentQuestion: currentQuestion
      };
    });
  };

  render() {
    console.log(this.state.currentQuestion, this.props.allQuestions.length);

    const chats = this.state.messages.map(message => {
      console.log(message);
      return (
        <ChatMessage
          message={message}
          accepted={this.accepted}
          declined={this.declined}
          ans={message.ans}
        />
      );
    });

    let response = null;
    if (this.state.currentQuestion > this.props.allQuestions.length) {
      response = <h3>Thanks For Answering The Questions</h3>;
    }

    return (
      <div>
        {chats}
        {/* <ChatBox sendMessage={this.addMessage} /> */}
        {response}
      </div>
    );
  }
}

export default ChatUI;
