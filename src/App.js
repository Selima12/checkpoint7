import React from 'react';

import './App.css';
export default class App extends React.Component{
componentDidMount(){
  setTimeout(function (){ alert("Hello"); }, 2000);
}
componentWillMount(){
  alert ("Goodbye");

}

render(){
  return(
    <div></div>
  )

}


}






