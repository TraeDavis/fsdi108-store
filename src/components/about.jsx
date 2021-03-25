import React, { Component } from "react";
import "./about.css";

class About extends Component {
  state = {
      infoVisible: false,

  };
  render() {
    return (
      <div className="about-page">
        <div className="jumbotron">
          <h1 className="display-4">About us</h1>
          <p className="lead">
          At Organika, we pride ourselves on our unwavering commitment to providing our customers with friendly, knowledgeable and engaging service to support them on their healthy living journeys each and every day. Our commitment to friendly service doesn’t stop at our stores. We pledge to be a good neighbor in every community we serve through volunteer work and local event support. Each year, our direct and in-kind donations help local nonprofit organizations, food banks and service groups touch millions of lives to help make our world a better place.
          </p>
          <hr className="my-4" />

          {this.getPersonalInfo()}
          
          <p className="lead-btn">
            <button onClick={this.handleButtonClick} className="btn btn-primary btn-lg">
              More about us
            </button>
          </p>
        </div>
      </div>
    );
  }

  getPersonalInfo = () => {
    if(this.state.infoVisible){
        return(
            <div className="contact-info">
            Contact us at:
            <br/>
            <a href="mailto:">Email: info@organika.com</a>
            <br/>
            <a href="tel:+1234567890">Phone: 123-456-7890</a>
          </div>
        );
    }else {
       return ( <label>Click the button to get more info</label>);
    }
  };

  handleButtonClick = () => {
      console.log("more info");
    if(this.state.infoVisible === false){
        this.setState({infoVisible: true})
    }else{
        this.setState({infoVisible: false})
    }
      
  };
}

export default About;
