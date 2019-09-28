import React, { Component } from 'react'
import './App.css';
// import NewsArticlesList from './components/NewsArticlesList/NewsArticlesList';
import Landing from './components/Landing/Landing';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Landing />
      </div>
    )
  }
}

export default App;