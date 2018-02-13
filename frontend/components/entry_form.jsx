import React from "react";
import Errors from "./errors";
import {withRouter} from "react-router-dom";


class EntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      race: "",
      age: "",
      gender: "unset",
      education: "",
      language: "",
      tos: false,
      errors: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(type) {
    return e => {
      let value = e.target.value;
      this.setState({ [type]: value });
    };
  }

  handleSubmit(e){
    e.preventDefault();
    $.post({
      url: "/api/users",
      data: {user: this.state}
    })
    .then(
      (resp)=>{
        this.setState({errors: null});
        const userId = resp.user_id;        
        this.props.history.push(`./${userId}/questions`);
      },
      (resp) => {
        const errors = resp.responseJSON.errors;
        if (errors){
          window.scrollTo(0,0);
          this.setState({errors: resp.responseJSON.errors});
        } else{
          alert("uh oh, looks like somethings not working right, try again later?");
        }
      }
    );
  }

  render() {
    return (
      <div className="container">
        <form className="applicant-form">
          <h2> Enter Your Personal Information </h2>
          <Errors errors={this.state.errors} />
          <div className="form-group">
            <label htmlFor="first-name">First Name: </label>
            <input
              className="form-control"
              id="first-name"
              type="text"
              onChange={this.handleChange("first_name")}
            />
          </div>

          <div className="form-group">
            <label htmlFor="last-name">Last Name: </label>
            <input
              className="form-control"
              id="last-name"
              type="text"
              onChange={this.handleChange("last_name")}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input
              className="form-control"
              id="email"
              type="text"
              onChange={this.handleChange("email")}
            />
          </div>

          <h3> Optional </h3>

          <div className="form-group">
            <label htmlFor="race">Race: </label>
            <select
              className="form-control"
              id="race"
              type="text"
              onChange={this.handleChange("race")}
            >
              <option vlaue="white">White</option>
              <option vlaue="black">Black</option>
              <option vlaue="latino">Latino</option>
              <option vlaue="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="age">Age: </label>
            <input
              className="form-control"
              id="age"
              type="number"
              onChange={this.handleChange("age")}
            />
          </div>

          <div className="form-group">
            <label htmlFor="gender">Gender: </label>
            <select
              className="form-control"
              id="gender"
              type="text"
              onChange={this.handleChange("gender")}
            >
              <option value="">-</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="education">Education: </label>
            <select
              className="form-control"
              id="education"
              type="text"
              onChange={this.handleChange("education")}
            >
              <option value="">-</option>
              <option value="hs">Highschool</option>
              <option value="some_college">Some College</option>
              <option value="college">College</option>
              <option value="gs">Graduate School</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="language">Language: </label>
            <select
              className="form-control"
              id="language"
              type="text"
              onChange={this.handleChange("language")}
            >
              <option value="">-</option>
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <input
              className="form-control"
              id="tos"
              type="checkbox"
              onChange={this.handleChange("tos")}
            />
            <label className ="tos-label" htmlFor="tos">Agree to terms of service: </label>
          </div>

          <input
            className="form-control"
            type="submit"
            value="submit"
            onClick={this.handleSubmit.bind(this)}
          />
        </form>
      </div>
    );
  }
}

export default withRouter(EntryForm);