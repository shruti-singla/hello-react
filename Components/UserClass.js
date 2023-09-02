import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Please remove the commits of api call in code in userClass.js component file",
        location: "dummy loc",
        avatar_url:
          "https://as1.ftcdn.net/v2/jpg/04/34/72/82/1000_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg",
        bio: "dummy bio",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/shruti-singla");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url, bio } = this.state.userInfo;
    return (
      <div className="user-class m-4 p-4 bg-gray-50 rounded-lg flex">
        <img className="image w-52 shadow-lg rounded-md" src={avatar_url} />
        <div className=" m-7" >
          <h2 className="p-2 font-semibold">
            Name : <span className="font-bold">{name}</span>
          </h2>
          <h2 className="p-2 font-semibold">Location : {location}</h2>
          <h4 className="p-2 font-semibold">Bio : {bio}</h4>
          <h4 className="p-2 font-semibold">Contact Info : shruti.singla1622@gmail.com</h4>
        </div>
      </div>
    );
  }
}

export default UserClass;
