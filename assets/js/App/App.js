import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import DatePicker from "react-datepicker";
import moment from "moment";
import axios from "axios";
import Home from "./Home";
import Results from "./Results";

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Harsh',
      location: "home",
      date: moment(),
      data: "",
      cryptoAmount: 1
    }
    this.routingSystem = this.routingSystem.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
    this.apiCall = this.apiCall.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
  }
  
  componentWillMount() {
    //clearInterval(this.timerID);
    var self = this;
    axios
      .get(`https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD,EUR&ts=${moment().unix()}&api_key=961d32a441533c3cbd011d28df1297de607a049f6c3181295b46fd247b6c9793`)
      .then(function (response) {
        self.setState({ btcToday: response.data.BTC }, () => {
          console.log(self.state);
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  routingSystem() {
    switch(this.state.location) {
      case "home":
        return <Home handleDateChange = {this.handleDateChange} globalState={this.state} onInputChange={this.onInputChange}/>
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
    }, () => console.log(this.state.date.unix()));
  }

  onInputChange(event) {
    this.setState = ({
      cryptoAmount: event.target.value
    });
  }

  apiCall() {
    /*https://min-api.cryptocompare.com/
    data/pricehistorical?fsym=BTC&tsyms=USD,EUR&ts=1543338706*/
    var self = this;
    axios
      .get("https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD,EUR&ts=1543338706&api_key=961d32a441533c3cbd011d28df1297de607a049f6c3181295b46fd247b6c9793")
      .then(function(response) {
        self.setState({ data: response.data.BTC }, () => {
          console.log(self.state);
          const costPrice = self.state.data.USD;
          var newCostPrice = (1.5 * 100);
          newCostPrice = (newCostPrice * costPrice) / 100;
          const sellingPrice = self.state.btcToday.USD;
          var newSellingPrice = (1.5 * 100);
          newSellingPrice = (newSellingPrice * sellingPrice) / 100;
          if (newCostPrice < newSellingPrice) {
            //Gain
            var gain = newSellingPrice - newCostPrice;
            var gainPercentage = (gain / newCostPrice) * 100;
            gainPercentage = gainPercentage.toFixed(2);
            console.log(`Profit Percentage is ${gainPercentage}%`);
          } else {
            //Loss
            var loss = newCostPrice - newSellingPrice;
            var lossPercentage = (loss / newCostPrice) * 100;
            lossPercentage = lossPercentage.toFixed(2);
            console.log(`Loss Percentage is ${lossPercentage}%`);
          }
        });
      })
      .catch(function(error) {
        console.log(error);
      });

  }

  render () {
    return (<div className='home'>
        <div className="container">
          <header>
            <div className="logo" onClick={this.apiCall}>
            The Coin <span className="logo-calculator">Calculator</span>
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
