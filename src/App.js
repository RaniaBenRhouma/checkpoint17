import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
     fullName:"Rania Ben Rhouma",
     bio:"je suis diplomée comme ingénieur info indus from ENETCom Sfax",
     imgSrc: "https://www.orthocaremedical.com/wp-content/uploads/person-icon.png",
     profession:"Developpeur",
     show : false
   }
  }
  toggleClick=()=> this.setState({ show: !(this.state.show)});
  componentDidMount(){
    setInterval(() => {this.setState({time:new Date().toString().slice(15,25)})},1000)
  }

  render() { 
    return (  
    <div  style={{ textAlign:"center"}}>
      <h5> {this.state.time}</h5>
      <div className ={this.state.show ? "returned":"none"} >
      <img src={this.state.imgSrc} alt= " profilImg " width="200" />
      <h2>{this.state.fullName}</h2>
      <p>{this.state.bio}</p>
      <h4>{this.state.profession}</h4>
      </div>
    <button onClick= {this.toggleClick}> {this.state.show ? "Hide":"Show"} Profile </button>
    </div>
      

    );
  }
}
 
export default App;
