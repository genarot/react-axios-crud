import React from 'react';

class   Editar extends React.Component {
  static propTypes = {

  }

  tituloRef = React.createRef();
  contenidoRef = React.createRef();

  editarPost = (e) => {
    e.preventDefault();

    const info = {
      title: this.tituloRef.current.value,
      body: this.contenidoRef.current.value,
      userId: this.props.post.userId,
      id: this.props.post.id
    }

    // console.log(this.contenidoRef);
    
    // console.log(info);
    this.props.editarPost(info)
  }

  cargarFormulario = (title, body) => {
    return <form onSubmit={this.editarPost} className="col-8 col-md-12">
            <legend className="text-center">Editar Post</legend>
            <div className="form-group">
              <label>Titulo del Post:</label>
              <input type="text" defaultValue={title} ref={this.tituloRef} className="form-control" placeholder="Titulo del Post"/>
            </div>
            <div className="form-group">
              <label>Contenido:</label>
              <textarea className="form-control" defaultValue={body} ref={this.contenidoRef} placeholder="Contenido.."></textarea>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-success">Guardar cambios</button>
            </div>
          </form>
  }
  render = () => {
    if ( !this.props.post ) return null;
    const {title = '', body = ''} =this.props.post;

    return (
      <React.Fragment>
        {this.cargarFormulario(title,body)}
      </React.Fragment>
    )
  }
}

export default Editar;
