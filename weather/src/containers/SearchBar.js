import React, { Component } from 'react';

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  onInputChange = (e) => {
    console.log(e.target.value);
    this.setState({ term: e.target.value });
  }

  onFormSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return(
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five day forecase in your favorite cities"
          className="form-control"
          onChange={this.onInputChange}
          value={this.state.term}
          />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}
