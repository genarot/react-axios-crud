import React from 'react';
import {Link} from 'react-router-dom';
import swal from 'sweetalert2';

class Post extends React.Component {

  confirmarEliminacion = (id) => {
    swal({
      title: 'Estas seguro?',
      text: "Esta accion no se puede deshacer!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, borrar!'
    }).then((result) => {
      if (result.value) {
        swal(
          'Eliminado!',
          'Tu post ha sido eliminado.',
          'success'
        )
        this.props.borrarPost(id)
      }
    })
  }
  render () {
    const {id, title} = this.props.info;
    return (<tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>
                <Link to={`/post/${id}`} className="btn btn-primary">Ver</Link>
                <Link to={`/editar/${id}`} class="btn btn-info">Editar</Link>
                <button onClick={() => this.confirmarEliminacion(id) } className="btn btn-danger" type="button">Borrar</button>
            </td>
          </tr>)
  }
}

Post.propTypes = {

};

export default Post;