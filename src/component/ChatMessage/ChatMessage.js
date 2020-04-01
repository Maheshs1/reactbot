import React from "react";
import "./ChatMessage.css";
import Button from "../../UI/Button/Button";
import { Input } from "reactstrap";

class ChatMessage extends React.Component {
  state = {
    inputValue: "",
    isDelayed: false,
    messages: [],
    shouldShowUserMessage: false
  };

  //For Direct Values
  handleInputUsingValue = value => {
    this.setState({ inputValue: value });
  };

  //For Values Using Input Tag Of Form Attribute
  handleInput = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  handleForm = e => {
    if (e) e.preventDefault();
    this.props.accepted(this.state.inputValue);
  };

  render() {
    const {
      msg,
      questionType,
      ans,
      type,
      buttons,
      radioButtons
    } = this.props.message;

    let userMessageState = ["Message", "UserMessage"]; // false stands for answering, true stands for answered

    console.log("b", buttons);
    let { delay } = this.props.message;
    if (delay === undefined) delay = null;
    let question = null;
    const typeProp = {
      value: this.state.inputValue,
      onChange: this.handleInput,
      style: {
        padding: 10,
        border: "none",
        borderBottom: "2px solid grey",
        backgroundColor: "transparent",
        color: "white",
        fontSize: 14,
        outline: "none"
      }
    };
    if (this.state.messages.length === 0) {
      if (Array.isArray(msg)) {
        let delay = 0;
        msg.map(m => {
          delay += 1000;

          setTimeout(() => {
            const msgs = [...this.state.messages];
            msgs.push(m);
            this.setState({ messages: msgs });
          }, delay);
        });

        setTimeout(() => {
          this.setState({ shouldShowUserMessage: true });
        }, 1000 * msg.length);
      } else {
        const msgs = [...this.state.messages];
        msgs.push(msg);
        this.setState({ messages: msgs, shouldShowUserMessage: true });
      }
    }
    if (ans !== null) {
      question = <p className="Message UserMessage">{ans}</p>;
    } else {
      userMessageState.push("AnsweringQuestion");
      if (questionType === 1) {
        console.log(ans);
        let optionButtons;
        if (buttons !== undefined) {
          optionButtons = buttons.map(b => {
            return (
              <Button
                onClick={
                  b.acceptance
                    ? () => this.props.accepted(b.value)
                    : () => this.props.declined(b.value)
                }
                styling={b.acceptance ? "Success" : "Danger"}
              >
                {b.text}
              </Button>
            );
          });
        } else if (radioButtons !== undefined) {
          optionButtons = radioButtons.map(rb => {
            console.log(rb);
            return (
              <div>
                <Input
                  type={type}
                  {...typeProp}
                  name={rb.text}
                  value={rb.value}
                  onChange={e => {
                    console.log("---------------------------------");
                    this.handleInput(e);

                    setTimeout(() => {
                      (rb.acceptance
                        ? () => this.props.accepted(rb.value)
                        : () => this.props.declined(rb.value))();
                    }, 0);
                  }}
                />
                {rb.value}
              </div>
            );
          });
        }
        question = (
          <div className={userMessageState.join(" ")}>
            {optionButtons}
            {/* <Button onClick={this.props.accepted} styling="Success">
              Yes
            </Button>
            <Button onClick={this.props.declined} styling="Danger">
              No
            </Button> */}
          </div>
        );
      } else if (questionType === 0) {
        console.log(type);
        const { options } = this.props.message;
        let input;
        if (type === "carousel") {
          userMessageState.push("UserCarousel");
          input = options.map(option => {
            return (
              <div
                className="carousel"
                onClick={() => {
                  this.handleInputUsingValue(option.title);
                  setTimeout(() => {
                    this.handleForm();
                  }, 1);
                }}
              >
                <img className="carousel-img" src={option.imgSrc} />
                <p className="carousel-title" style={{ fontStyle: "bold" }}>
                  {option.title}
                </p>
                <p className="carousel-desc">{option.desc}</p>
              </div>
            );
          });
        } else {
          input = <Input type={type} {...typeProp} />;
          if (options !== undefined) {
            input = (
              <Input
                type={type}
                {...typeProp}
                onChange={e => {
                  this.handleInput(e);
                  setTimeout(() => {
                    this.handleForm(e);
                  }, 0);
                }}
              >
                {options.map(o => (
                  <option style={{ backgroundColor: "#25CEB6", padding: 10 }}>
                    {o}
                  </option>
                ))}{" "}
              </Input>
            );
          }
        }
        //Default type: Input

        question = (
          <form
            onSubmit={this.handleForm}
            className={userMessageState.join(" ")}
          >
            {input}
            <button style={{ display: "none" }}></button>
          </form>
        );
      }
    }

    console.log(this.state.messages);
    let view = (
      <div>
        {this.state.messages.map(msg => (
          <p className="Message">{msg}</p>
        ))}
        {/* <div className={userMessageState.join(" ")}></div> */}
        {this.state.shouldShowUserMessage ? question : null}
      </div>
    );
    console.log(this.state.isDelayed, delay);
    if (delay !== null) {
      const t = setTimeout(() => {
        this.setState({ isDelayed: true });
      }, delay);
      if (this.state.isDelayed) {
        delay = null;
        clearTimeout(t);
        return view;
      } else {
        return <p></p>;
      }
    }

    return view;
  }
}

export default ChatMessage;
