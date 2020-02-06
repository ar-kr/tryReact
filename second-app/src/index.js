import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Header(name) {
  var img = new Image();
  if(name==="Beni"){
    console.log(`${process.env.PUBLIC_URL}/Beni.png`);
    return (<img src={`${process.env.PUBLIC_URL}/Beni.png`} alt="Beni_icon" />);
  }else if(name==="Kuninaga.T"){
    console.log(`${process.env.PUBLIC_URL}/Kuninaga.png`);
    return (<img src={`${process.env.PUBLIC_URL}/Kuninaga.png`} alt="tsuru_icon" />);
  }
}

export default Header;

/*
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <img className={'image'} />
      </div>
    );
  }
}
*/

// https://react.keicode.com/basics/react-form-basics.php
class Form1 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      usstate: props.initState,
      desc: 'This is for a text area.',
      path: (`${process.env.PUBLIC_URL}`),
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onTextAreaChange = this.onTextAreaChange.bind(this);
  }

  onChange(e){
    this.setState({ usstate: e.target.value});
    this.setState({ path: e.target.value});
    console.log("onChange");
  }

  onSubmit(e){
    e.preventDefault();
  }

  onTextAreaChange(e){
    this.setState({desc: e.target.value});
  }

  render() {
    var states = [
      { code: "Beni", name: "Beni", imgName: "/Beni.png", ableClapPoint: 100, beClapedPoint: 0 },
      { code: "tsuru", name: "Kuninaga.T", imgName: "/Kuninaga.png", ableClapPoint: 100, beClapedPoint: 0 },
      //{ code: "TX", name: "Texas" },
      //{ code: "WA", name: "Washington" } 
    ];
    var options = states.map(
      (n) => (
        <option key={n.code} value={n.code}>
          {n.name}
        </option>
      )
    );
    
    var path = states.map(
      (n) => (
        <option key={n.code}>
          {this.state.path + n.imgName}
        </option>
        
      )
    );
    

    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <select
            value={this.state.usstate}
            onChange={this.onChange}>
              {options}
          </select>
        </div>
        <textarea
          value={this.state.desc}
          onChange={this.onTextAreaChange}/>
        <div>
          <img
            src={this.state.path + path}
            alt="icon"
          ></img>
          <select>
            {path}
          </select>
          <img src={path} alt="icon2" />
          <button type="submit">OK</button>
        </div>
        <p>
          {Header(this.state.name)}
          {this.state.name}
        </p>
      </form>
    );
  }
}

ReactDOM.render(
  <Form1 initState="tsuru"/>,
  document.getElementById('root')
);
