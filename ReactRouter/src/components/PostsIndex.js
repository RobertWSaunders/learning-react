import React, { Componet } from 'react';
import { connnect } from 'react-redux';
import { fetchPosts } from '../actions';


class PostsIndex extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    return (
      <div>
        Hello!
      </div>
    );
  }
}

export default connect(null, { fetchPosts })(PostsIndex);
