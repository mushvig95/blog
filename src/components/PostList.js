import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    let listCount = 0;
    return this.props.posts.map(e => {
      if(listCount < 10){
        listCount++;
      return (
        <div className="item" key={e.id} style={{"marginBottom":"20px"}}>
          <i className="large middle aligned icon user" />
          <div className='content'>
            <div className='description'>
              <h2>{e.title}</h2>
              <p>{e.body}</p>
            </div>
          </div>
        </div>
      )}
    })
  }

  render() {
    console.log(this.props.posts);
    return <div className='ui relaxed divided list'>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {posts: state.posts};
}

export default connect(
  mapStateToProps,
  { fetchPosts: fetchPosts }
)(PostList);
