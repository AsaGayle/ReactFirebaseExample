import React, { Component } from 'react';
import VideoPlayer from './components/VideoPlayer'
import Speed from './components/Speed'
import './App.css';
import * as firebase from 'firebase';

class App extends Component {
  constructor(){
    super();
    this.state = {
      speed: 10,
      saying: 'Hello',
      imageURL: "",
      videoID: "p4XTMvagQ2Q"
    };
  }
  componentDidMount(){
    const rootRef = firebase.database().ref().child('react');

    // Attaching data to view
    rootRef.child('speed').on('value', snap =>{
        this.setState({
        speed: snap.val(),
      })
    });
    rootRef.child('saying').on('value', snap =>{
        this.setState({
        saying: snap.val()
      });
    });
    rootRef.child('imageURL').on('value', snap =>{
      this.setState({
        imageURL: snap.val()
      });
    });
    rootRef.child('videoID').on('value', snap =>{
      this.setState({
        videoID: snap.val()
      });
    });
  }
    changeTextRef(){
      console.log(this.inputId)
      const sayingRef = firebase.database().ref().child('react').child('saying');
      sayingRef.set(this.inputId.value);
      console.log('WORKING')
    }
  render() {
    let inputId = "id-text";

    return (
      <div className = 'App'>
        <h1>{this.state.speed}</h1>
        <Speed speed={this.state.speed}/>
        <h1>{this.state.saying}</h1>
        <h1>Submit some text</h1>
        <input id='input-id' type="text" ref={(input) => {this.inputId = input}}></input> 
        <br/>
        <h3>{inputId}</h3>
        <button onClick={this.changeTextRef.bind(this, inputId)}>Submit</button> <br/>
        <img src={this.state.imageURL} alt="a pretty girl"/>
        <VideoPlayer videoID={this.state.videoID}/>
      </div>
    );
  }
}

export default App;
