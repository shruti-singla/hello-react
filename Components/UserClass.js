import React from "react";


class UserClass extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      count: 0,
      count2: 2,
    };

  }
 

  render() {
    const {name, location } = this.props;
    return (
      <div className="user-class">
        <h1>count : {this.state.count}</h1>
        <button
        onClick={() => {
          this.setState({
            count: this.state.count + 1,
          });
        }}
      >
        Increase count
      </button>
        <h2>Name : {name}</h2>
        <h2>location : {location}</h2>
        <h2>contact info : @shruti-singla</h2>
      </div>
    );
  }
}

export default UserClass;