import React from 'react';

class SinglePost extends React.Component {
  mostrarPost = (props) => {
      if (!this.props.post) return null;
    
      const {title, body, userId} = this.props.post;
      return (
          <React.Fragment>
              <h2>{title}</h2>
              <p><b>Autor:</b> {userId}</p>
              {body}
          </React.Fragment>
      )
  }

  render() {
    return(
        <div className="col-12 col-md-8">
          {this.mostrarPost()}
        </div>
    )
  }
};

SinglePost.propTypes = {
  
};

export default SinglePost;
