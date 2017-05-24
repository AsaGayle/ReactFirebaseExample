import React, { Component } from 'react';
import VideoPlayer from './components/VideoPlayer'
import './App.css';
import * as firebase from 'firebase';

class App extends Component {
  constructor(){
    super();
    this.state = {
      saying: 'Hello',
      imageURL: '',
      videoID: 'p4XTMvagQ2Q',
    };
  }

  //Load firebase data on mount
  componentDidMount(){
    const rootRef = firebase.database().ref().child('react');
    // Attaching data to view
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
    //Load first video's ref 
    rootRef.child('videoID').child('vid1').on('value', snap =>{
      this.setState({
        videoID: snap.val()
      });
    });
  }

  //Change text data on database
  changeTextRef(){
    const sayingRef = firebase.database().ref().child('react').child('saying');
    sayingRef.set(this.inputId.value);
  }

  changeVideoRef1(){
    const videoRef = firebase.database().ref().child('react').child('videoID').child('vid1');
    let givenURL = this.videoId1.value;
    let sendURL = this.parseYoutubeURL(givenURL);

      this.setState({
        videoID: sendURL,
      });
  }

  changeVideoRef2(){
    const videoRef = firebase.database().ref().child('react').child('videoID').child('vid2');
    let givenURL = this.videoId2.value;
    let sendURL = this.parseYoutubeURL(givenURL);

    videoRef.set(sendURL);
      this.setState({
        videoID: sendURL,
      });
  }
  
  changeVideoRef3(){
    const videoRef = firebase.database().ref().child('react').child('videoID').child('vid3');
    let givenURL = this.videoId3.value;
    let sendURL = this.parseYoutubeURL(givenURL);

      this.setState({
        videoID: sendURL,
      });
    
  }
  parseYoutubeURL(url){
    if(url.length !== 11){
      return url.substr(url.indexOf('=') + 1);
    } else{
      return url;
    }
  }

render() {
  let inputId = 'id-text';
  let videoId1 = 'video-id1';
  let videoId2 = 'video-id2';
  let videoId3 = 'video-id3';

  return (
    <div className = 'App'>
      <h1>{this.state.saying}</h1>
      <h1>Submit some text</h1>
      <input id='input-id' type="text" ref={(input) => {this.inputId = input}}></input> 
      <button onClick={this.changeTextRef.bind(this, inputId)}>Submit</button> <br/>
      <br/>

      <img src={this.state.imageURL} alt="a pretty girl"/>

      <VideoPlayer videoID={this.state.videoID}/>
      <table id='btn-holder' className='center' width="100%"> 
        <td>
            <button className='margin3px'>1</button>
            <button className='margin3px'>2</button>
            <button className='margin3px'>3</button>
    
            <br/>

            <input id='video-id1' className='margin3px' type="text" ref={(video) => {this.videoId1 = video}}/>
            <button onClick={this.changeVideoRef1.bind(this, videoId1)}>Submit 1</button>

            <input id='video-id2' className='margin3px' type="text" ref={(video) => {this.videoId2 = video}}/>
            <button onClick={this.changeVideoRef2.bind(this, videoId2)}>Submit 2</button>  

            <input id='video-id3' className='margin3px' type="text" ref={(video) => {this.videoId3 = video}}/>
            <button onClick={this.changeVideoRef3.bind(this, videoId3)}>Submit 3</button>
        </td>
      </table>
    </div>
  );
}
}

export default App;
