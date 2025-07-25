import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: "Ian",
        bio: "A passionate developer who loves React.",
        imgSrc: "https://via.placeholder.com/150",
        profession: "Software Engineer"
      },
      shows: false,
      intervalSeconds: 0
    };
  }

  componentDidMount() {
    // Start timer on mount
    this.timerID = setInterval(() => {
      this.setState((prevState) => ({
        intervalSeconds: prevState.intervalSeconds + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // Clear the interval when component unmounts
    clearInterval(this.timerID);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, intervalSeconds } = this.state;

    const profileStyle = {
      border: "1px solid #ddd",
      padding: "20px",
      marginTop: "20px",
      width: "300px",
      textAlign: "center",
      borderRadius: "8px",
      boxShadow: "0 0 10px #ccc"
    };

    return (
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <button onClick={this.toggleShow} style={{ padding: "10px 20px", fontSize: "16px" }}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {shows && (
          <div style={profileStyle}>
            <img src={imgSrc} alt={fullName} style={{ borderRadius: "50%", width: "150px" }} />
            <h2>{fullName}</h2>
            <p><em>{profession}</em></p>
            <p>{bio}</p>
          </div>
        )}

        <p style={{ marginTop: "20px", fontStyle: "italic" }}>
          Component mounted since: {intervalSeconds} second{intervalSeconds !== 1 ? "s" : ""}
        </p>
      </div>
    );
  }
}

export default App;
