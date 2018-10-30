import React from 'react';
import Post from '../Post/Post';

class Listado extends React.Component {
  static propTypes = {

  }
  mostrarPosts =()=> {
    const posts = this.props.posts;
    if ( posts.length === 0 ) return null;

    return (
      <React.Fragment>
        {posts.map( (post, index) => <Post key={index} info={post}/>)}
      </React.Fragment>
    )
  }
  render = () => (
    <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Titulo</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {this.mostrarPosts()}
          </tbody>
      </table>
  )
}

export default Listado;