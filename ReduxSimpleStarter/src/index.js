//go find the library called react and assign it to the variable React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YouTubeSearch from 'youtube-api-search';
//have to give relative path
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyCwXiydBV6h8Glf-Bfn_ou1EveOo9-FPFc';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    };
    YouTubeSearch({key: API_KEY, term: 'surfboards'}, videos => {
      this.setState({videos});
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}



// take the generated HTML and put it on the page
//have to instantiate App before passing it into the DOM
//wrapping it in JSX tags will make it into an instance
ReactDOM.render(<App />, document.querySelector('.container'));
