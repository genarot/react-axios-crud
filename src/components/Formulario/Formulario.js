import React from 'react';

class   Formulario extends React.Component {
  static propTypes = {

  }

  tituloRef = React.createRef();
  contenidoRef = React.createRef();

  crearPost = (e) => {
    e.preventDefault();

    const info = {
      title: this.tituloRef.current.value,
      body: this.contenidoRef.current.value,
      userId: 1
    }

    // console.log(this.contenidoRef);
    
    // console.log(info);
    this.props.crearPost(info)
  }

  render = () => (
    <form onSubmit={this.crearPost} className="col-8 col-md-12">
      <legend className="text-center">Crear Nuevo Post</legend>
      <div className="form-group">
        <label>Titulo del Post:</label>
        <input type="text" ref={this.tituloRef} className="form-control" placeholder="Titulo del Post"/>
      </div>
      <div className="form-group">
        <label>Contenido:</label>
        <textarea className="form-control" ref={this.contenidoRef} placeholder="Contenido.."></textarea>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">Crear</button>
      </div>
    </form>
  )
}

export default Formulario;
