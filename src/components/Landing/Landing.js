import React, { Component } from 'react'
import NewsSearch from '../NewsSearch/NewsSearch';
import NewsLatest from '../NewsLatest/NewsLatest';
import './Landing.css';
import axios from 'axios';


class Landing extends Component {
 state={
  newsList: []
 }
 componentDidMount(){
  axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=7cK9FpOnC3zgoboP2CPGR3FcznEaYCJv`)
  .then(res=> {
   this.setState({newsList: res.data.results});
  });

 }
 render() {
  // console.log(this.state.newsList);
  return (
   <div className="landing text-center text-white">
    <h1>News Portal</h1>

    <div className="news-search">
      <NewsSearch />
    </div>

    <div className="news-latest">
      <NewsLatest newsList={this.state.newsList}/>
    </div>
   </div>
  )
 }
}
export default Landing;