import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name : "dummy name",
        location : "dummy loc",
        avatar_url : "dummy",
        bio:"dummy bio",
      }
     

    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/shruti-singla");
    const json =  await data.json();
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url, bio } = this.state.userInfo;
    return (
      <div className="user-class">
        <img src={avatar_url} />
        <h2>Name : {name}</h2>
        <h2>location : {location}</h2>
        <h4>bio : {bio}</h4>
        <h4>contact info : shruti.singla1622@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
