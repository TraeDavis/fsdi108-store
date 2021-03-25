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
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-4" />

          {this.getPersonalInfo()}
          
          <p className="lead">
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
