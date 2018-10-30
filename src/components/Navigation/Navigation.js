import React from 'react';
import {NavLink} from 'react-router-dom'
import './Navigation.css';
const Navigation = () => {
  return  <nav className="col-12 col-mb-8">
              <NavLink to={'/'}>Todos los Posts</NavLink>
              <NavLink to={'/crear'}>Nuevo Post</NavLink>
          </nav>
};

Navigation.propTypes = {

};

export default Navigation;
