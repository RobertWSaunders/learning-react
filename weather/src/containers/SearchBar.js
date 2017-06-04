import React, { Component } from 'react';
import { fetchWeather } from '../actions/index.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SearchBar extends Component {
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
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
