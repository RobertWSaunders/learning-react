import React, { Component } from 'react';

//components that are not classes are called functional components
//normally use functional components for components that only return HTML
class SearchBar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  render() {
      return (
        //pass new state object into state, always use setState
        <div>
          <input
            value={this.state.term}
            onChange={event => this.setState({term: event.target.value })}/>
        </div>
      );
  }
}

export default SearchBar;
