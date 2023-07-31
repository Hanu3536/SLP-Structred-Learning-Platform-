import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <NavLink to="/" exact style={{textDecoration: 'none', color: 'inherit'}}>
        <h1>SLP- Structured Learning Platform</h1>
        </NavLink>
        
        <div className="header-controls">
          <form className="search-form" action="#" method="GET">
            <input type="text" name="search" placeholder="Search" />
            <button type="submit">Search</button>
          </form>
          <div className="login-signup">
            <button type="button" onClick={this.handleLogin}>
              <NavLink to="/login" exact style={{textDecoration: 'none', color: 'inherit'}}>
                Login
              </NavLink>

            </button>
            <button type="button" onClick={this.handleSignUp}>
              <NavLink to="/signup" exact style={{textDecoration: 'none', color: 'inherit'}}>
                Sign Up
              </NavLink>
            </button>
          </div>
        </div>
      </header>
    );
  }

  handleLogin = () => {
    // Handle login button click event
    // Add your logic here
  };

  handleSignUp = () => {
    // Handle sign up button click event
    // Add your logic here
  };
}

export default Header;
