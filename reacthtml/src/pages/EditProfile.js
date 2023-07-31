import React from "react";

class EditProfile extends React.Component {
  render() {
    return (
      <div className="container">
        <h3>Edit Profile</h3>
        <form action="/login" method="POST">
          <div className="profile-photo">
            <div className="avatar">N</div>
          </div>

          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>

          <div>
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              required
            />
          </div>

          <div className="option">
            <input type="submit" value="Save Changes" />
            <input type="submit" value="Cancel" />
          </div>
        </form>
      </div>
    );
  }
}

export default EditProfile;
