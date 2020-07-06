import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
constructor(props){
  super(props)

  // this.state = { lat:'LOADING....' };
  this.state = { lat:null , errMessage:'' };
  
  // window.navigator.geolocation.getCurrentPosition(
  //   position =>{
  //     this.setState({lat:position.coords.latitude})
  //   },
  //   err =>{
  //     this.setState({errMessage:err.message})
  //   }
  // );
  }
    // state = { lat:null , errMessage:'' };  
    // we can use state outside the consturctor methode as like in 20th line without using constructor{} mathod

componentDidMount(){
  window.navigator.geolocation.getCurrentPosition(
    position => this.setState({lat:position.coords.latitude}),
    err => this.setState({errMessage:err.message})
    
  );
}
  render(){
      if(this.state.lat && !this.state.errMessage){
       return <div>Latitude : {this.state.lat}</div> 
      }

      if(!this.state.lat && this.state.errMessage){
        return <div> Error : {this.state.errMessage}</div>
      }
     return (
          <Spinner message='please accept Location request'/>
     )

  }
}

ReactDOM.render(
<App/>,
document.querySelector('#root')
)
