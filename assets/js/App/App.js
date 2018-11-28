import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import DatePicker from "react-datepicker";
import moment from "moment";
import Home from "./Home";
import Results from "./Results";

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Harsh',
      location: "home",
      date: moment()
    }
    this.routingSystem = this.routingSystem.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
  }

  routingSystem() {
    switch(this.state.location) {
      case "home":
        return <Home handleDateChange = {this.handleDateChange} globalState={this.state}/>
        break;
      case "results":
        return <Results />
        break;
      default:
        return <Home />
        
    }
  }

  handleDateChange(date) {
    this.setState({
      date: date
    });
  }

  render () {
    return (<div className='home'>
        <div className="container">
          <header>
            <div className="logo">
              The Coin Calculator
            </div>
            <nav className="menu">
              <a href="#">Register</a>
            </nav>
          </header>
          {this.routingSystem()}
        </div>
      </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
