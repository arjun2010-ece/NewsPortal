import React, { Component } from 'react'

class NewsLatest extends Component {
 constructor(props){
  super(props);
  this.state = {
           newsTitle:'',
           abstract:'',
           newsUrl:'',
          }
  // this.newsLatest = this.newsLatest.bind(this);
 }
 
 
 newsLatest = (e)=>{
  e.preventDefault();
  const {newsList} = this.props;
  let maxTime = newsList.map(function(o) { 
     return new Date(o.updated_date);  
  });
   let maximumValue = Math.max(...maxTime);
   let latestnews = newsList.filter(function (el) {
        return maximumValue === new Date(el.updated_date).getTime();
        })[0];
   if(latestnews){
     this.setState({newsTitle: latestnews.title});
   }
 }
 render() {
  if(!this.state.newsTitle){
   return null
  }
  return (
   <div>
     <h1 className="text-white">
       {this.newsLatest() && (this.state.newsTitle)}
     </h1>
   </div>
  )
 }
}
export default NewsLatest;