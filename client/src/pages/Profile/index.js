import React, { Component } from "react";
import style from './style.css';

class Profile extends Component {
  state = {
    profile: null,
    error: ""
  };

  componentDidMount() {
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.props.auth.getProfile((profile, error) =>
      this.setState({ profile, error })
    );
  }
 
  render() { 
    const { profile } = this.state;
    if (!profile) return null;
    return ( 
      <> 
        <h2>Profile</h2>
        <p className = "profileName">Hi, {profile.nickname}!</p>
        <img
          className = "profilePic" style={{ maxWidth: 300, maxHeight: 300,}}
          src={profile.picture} 
          alt="profile pic" 
        />
        {/* <pre>{JSON.stringify(profile, null, 2)}</pre> */}
      </>
    );
  }
}

export default Profile;