import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Results extends Component {
    constructor() {
        super()
        this.state = {
            name: 'Harsh'
        }
    }
    checkGains() {
      const { percent } = this.props.globalState.totalStatus

      if (this.props.globalState.status == 'gain') {
        return `You made ${percent}% profit`
      } else {
        return `You lost ${percent}% of your initial investment`
      }
    }
    render() {
        const { percent, newCP, newSP } = this.props.globalState.totalStatus;
        return <section id="results">
            <div className="container">
              <div className="col-md-12">
                <div className="ads" />
              </div>
              <div className="col-md-12">
                <h3>Your ${newCP} dollar investment is now </h3>
                <h1>${newSP}</h1>
                <h4>{this.checkGains()}</h4>
                <a href="#" className="main-btn active">Need to keep track? Create an account with us!</a>
                <a href="#" className="main-btn" onClick={this.props.goBack}>Or Check Another Transaction</a>
              </div>
              <div className="col-md-12">
                <div className="ads" />
              </div>
            </div>
          </section>;
    }
}
