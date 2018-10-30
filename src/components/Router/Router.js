import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../Header';
import Navegation from '../Navigation'
import axios from 'axios';
import Posts from '../Posts/Posts';

class Router extends React.Component {
  state = {
    posts:[]
  }

  componentDidMount() {
    this.obtenerPosts()
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
                          posts={this.state.posts}/>
              }}/>
              <Route exact path="/post/:postId" render={(props) => {
                console.log(props);
                
                let {params} = props.match;
                if ( !params['postId']) return null;
                console.log(params);
                
                return <h3>Hola</h3>;
              }}/>
            </Switch>
          </div>
        </div>
     </BrowserRouter>
  )
}

export default Router;
