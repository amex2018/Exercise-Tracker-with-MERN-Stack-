
import React, { Component } from 'react';
import { items } from '../MenuItems';
import '../Navbar.css';
import { Menu } from '@material-ui/icons';
import { Button } from '@material-ui/core';

class CreateExercise extends Component {

  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">React NavBars</h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fa fa-times' : 'fa fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {
            items.map((item, index) => {
              return (
                <li key={index}>
                  <a className='nav-link' href={item.url}>{item.title}</a>
                </li>
              )
            })}

        </ul>
        <Button className='button' variant='contained' color='primary'>Register</Button>
      </nav>
    )
  }


}

export default CreateExercise;