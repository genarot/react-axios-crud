import React from 'react';
import {Link} from 'react-router-dom';

const Post = (props) => {
  const {id, title} = props.info;
  return (<tr>
          <td>{id}</td>
          <td>{title}</td>
          <td>
              <Link to={`/post/${id}`} className="btn btn-primary">Ver</Link>
              <button className="btn btn-danger" type="button">Borrar</button>
          </td>
        </tr>)
}

Post.propTypes = {

};

export default Post;