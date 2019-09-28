import React, { Component } from 'react'
import './NewsSearch.css';

class NewsSearch extends Component {
 render() {
  return (
   <div className="input-group mb-3 mt-3">
       <div className="input-group-prepend">
         <span className="input-group-text"><i className="fas fa-search"></i></span>
       </div>
       <input type="text" className="form-control search-news" placeholder="search any news here" />
   </div>
  )
 }
}
export default NewsSearch;