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
        <div className="search-bar">
          <input
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)}/>
        </div>
      );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
