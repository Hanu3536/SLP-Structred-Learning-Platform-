import React from "react";
import { Link, NavLink } from 'react-router-dom';


class Settings extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#">My Topics</Link>
          </li>
          <li>
            <NavLink to="/editprofile">Settings</NavLink>
          </li>
        </ul>
      </div >
    );
  }
}

export default Settings;
