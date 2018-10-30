import React from 'react';
import './Posts.css';
import Listado from '../Listado/Listado';

class Posts extends React.Component {
  static propTypes = {

  }
  render = () => (
    // <div className="row">
        <div className="col-12 col-mb-8">
          <h2 className="text-center">Posts</h2>
          <Listado borrarPost={this.props.borrarPost} posts={this.props.posts}/>
        </div>
    // </div>
  )
}

export default Posts;
