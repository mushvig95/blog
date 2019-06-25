import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import User from './User';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map(e => {
      return (
        <div className="item" key={e.id} style={{"marginBottom":"20px"}}>
          <i className="large middle aligned icon user" />
          <div className='content'>
            <div className='description'>
              <h2>{e.title}</h2>
              <p>{e.body}</p>
              <p>{e.userId}</p>
            </div>
          </div>
          <User userId={e.userId} />
        </div>
      )
    })
  }

  render() {
    return <div className='ui relaxed divided list'>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
      posts: state.posts
    };
}

export default connect(
  mapStateToProps,
  { fetchPosts: fetchPosts }
)(PostList);
