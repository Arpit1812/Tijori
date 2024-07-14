import React, { Component } from "react";
import "../styles/UserInfo.css";

interface UserInfoState {
  username: string;
}

class UserInfo extends Component<{}, UserInfoState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      username: "",
    };
  }

  componentDidMount() {
    this.fetchUsername();
  }

  fetchUsername = () => {
    fetch("https://jsonplaceholder.typicode.com/users/1") // Replace with your actual API endpoint
      .then((response) => response.json())
      .then((data) => this.setState({ username: data.username }))
      .catch((error) => console.error("Error fetching username:", error));
  };

  render() {
    const { username } = this.state;

    return (
      <div className="user-info">
        <h2 className="usernameHeader">WELCOME!</h2>
        <h3 className="userName">{username}</h3>
      </div>
    );
  }
}

export default UserInfo;
