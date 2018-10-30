import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../Header';
import Navegation from '../Navigation'
import axios from 'axios';
import Posts from '../Posts/Posts';
import SinglePost from '../SinglePost/SinglePost';
import Formulario from '../Formulario/Formulario';
import swal from 'sweetalert2';
import Editar from '../Editar/Editar';

class Router extends React.Component {
  state = {
    posts:[]
  }

  componentDidMount() {
    this.obtenerPosts()
  }
  crearPost = async (info) => {
    console.log(info);
    await axios.post( 'https://jsonplaceholder.typicode.com/posts', {
      ...info
    })
    .then( res => {
      console.log(res);
      if ( res.status === 201 ) {
        swal({
          title:'Post Creado',
          text:'Se creo correctamente!',
          type:'success'
        })
        this.state.posts.push(res.data);
      }
    })
    .catch( err => console.error(err) )
  }

  borrarPost = (idPost) => {
    console.log(`borrando ${idPost}`);
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
    .then(res => {
      if ( res.status === 200 ){
          const posts = [...this.state.posts];
          
          let resultado = posts.filter(post => (
            post.id != idPost
          ));
          this.setState({
            posts: resultado
          })
      } else {
        console.warn('Error eliminando post');
      }
      
    })
    .catch( err => console.error(err) )
  }

  editarPost = (post) => {
    axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`)
    .then( res => {
      if (res.status === 200) {
        const postId = res.data.id;
        const posts = [...this.state.posts];

        swal('Post Actualizado','Se actualizo correctamente', 'success')
        const postEditar = posts.findIndex( function(post) {return postId === post.id});
        posts[postEditar] = post;
        
        this.setState({
          posts:posts
        })
        
      }
      
    })
  }
  obtenerPosts = async () => {
    await axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
      console.log(res);
      this.setState({
        posts: res.data
      })
    }).catch((err) => {
      console.error(err);
      
    });
  }
  static propTypes = {

  }
  render = () => (
      <BrowserRouter>
        <div className="container">
          <div className="row justify-content-center">
            <Header />
            <Navegation />
            <Switch>
              <Route exact path="/" render={() => {
                return <Posts
                          borrarPost = {this.borrarPost}
                          posts={this.state.posts}/>
              }}/>
              <Route exact path="/post/:postId" render={(props) => {
                const posts   = this.state.posts;
                let {params}  = props.match;
                let postId    = Number(params.postId);
                
                if ( !postId) return null;
                
                let filtro;
                filtro = posts.filter( (post) => (
                  postId === post.id
                ))
                
                console.log(filtro);
                
                return <SinglePost post={filtro[0]} />
              }}/>
              <Route  exact path="/crear" render={()=> (
                <Formulario 
                  crearPost= {this.crearPost}/>
              )}/>
              <Route exact path="/editar/:postId" render={(props) => {
                const posts   = this.state.posts;
                let {params}  = props.match;
                let postId    = Number(params.postId);
                
                if ( !postId) return null;
                
                let filtro;
                filtro = posts.filter( (post) => (
                  postId === post.id
                ))
                
                console.log(filtro);
                
                return <Editar post={filtro[0]} editarPost={this.editarPost} />
              }}/>
            </Switch>
          </div>
        </div>
     </BrowserRouter>
  )
}

export default Router;
