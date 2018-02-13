import React from "react";
import Timer from "./timer";

const questions = [
  "In your career thus far what has been your favorite job and why?",
  "What do you hope to be doing professionally five years from now",
  "Imagine you are hired to work for a home repair company. Please describe how you would go about generating new customers for your company?",
  "You receive an email from a home a client. Please write a response below:",
  "What is a CRM? What are the greatest benfits of using a CRM?"
];

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curQuestion: 1,
      curResponse: ""
    };
    this.userId = this.props.match.params.userId;
  }

  handleChange(e) {
    let value = e.target.value;
    this.setState({ curResponse: value });
  }
  // require(:question).permit(:user_id, :question_id, :response)
  handleSubmit(e) {
    if (e){
      e.preventDefault();
    }
    $.post({
      context: this,
      url: "/api/questions",
      data: {question: 
          {
          user_id: this.userId,
          question_id: this.state.curQuestion,
          response: this.state.curResponse
        }
      }
    })
    .then(
      resp => {
        if (this.state.curQuestion === 5){
          this.props.history.push("/done");
        } else{
          this.setState({
            errors: null,
            curResponse: "",
            curQuestion: this.state.curQuestion + 1
          });
        }
      },
      resp => {
        const errors = resp.responseJSON.errors;
        if (errors) {
          window.scrollTo(0, 0);
          this.setState({ errors: resp.responseJSON.errors });
        } else {
          alert(
            "uh oh, looks like somethings not working right, try again later?"
          );
        }
      }
    );
  }
  render() {
    return (
      <div className="question-wrapper">
        <h5 className="question-title">
          Question <b>{this.state.curQuestion} </b> of <b>5</b>
        </h5>
        <div className="time">
          <Timer 
          startTime = {180}
          submit = {this.handleSubmit.bind(this)}
        />
        </div>
        <hr className="question-hr" />
        <p className="question">{questions[this.state.curQuestion - 1]}</p>
        <textarea
          className="question-response"
          onChange={this.handleChange.bind(this)}
          value = {this.state.curResponse}
        >
        </textarea>
        <button
          className="btn btn-primary"
          onClick={this.handleSubmit.bind(this)}
        >
        Submit
        </button>
      </div>
    );
  }
}
