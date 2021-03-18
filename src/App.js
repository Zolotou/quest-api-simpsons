import './App.css';
import QuoteCard from './components/QuoteCard'
import React from 'react';
import axios from 'axios';


class  App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };

    this.getQuote = this.getQuote.bind(this);
  }

  componentDidMount(){
    this.getQuote();
  }

  getQuote(){
    this.setState({loading : true})
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then(res => res.data)
    .then(data => {
      this.setState({
        data: data[0],
        loading: false
      })
    } )
    
  }

  render() {
    return (
      <div className="App">
        <h1>Task : Simpsons Quote</h1>
        {this.state.loading ? <img className="img-homer" src="https://cdn.dribbble.com/users/623359/screenshots/15025039/media/64ee8f6074ab1f31070032404b379493.png" /> : <QuoteCard props={this.state.data} />}
        
        <button onClick={this.getQuote}>Get new Quote</button>
      </div>
    );
  }
  
}

export default App;
