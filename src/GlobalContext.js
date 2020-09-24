import React from 'react';
import Heartbeats from 'heartbeats';

const GlobalContext = React.createContext({});

export class GlobalContextProvider extends React.Component {
  state = {
    beats: 0,
    timer: 15,
    running: false
  }

  resetValues = () => {
    console.log("User hit reset");
    this.setState({ beats: 0 });
    this.setState({ timer: 15 });
    this.setState({ running: false });
    console.log("End of reset function")
  }

  addBeat = () => {
    if (this.state.running == true) {
      this.setState({ beats: this.state.beats + 1 });
    }
    else if (this.state.running == false) {
      this.setState({ beats: this.state.beats + 1 });

      console.log("Running State = " + this.state.running)

      this.setState({ running: this.state.running = true });
      console.log("Running State = " + this.state.running)

      var heart = Heartbeats.createHeart(1000);

      heart.createEvent(1, { countTo: 15 }, (count, last) => {
        var pulse = heart.createPulse();
        pulse.beat(this.setState({ timer: this.state.timer - 1 }));
      })
    }
  }

  render() {
    return (
      <GlobalContext.Provider
        value={{
          ...this.state,
          resetValues: this.resetValues,
          addBeat: this.addBeat
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    )
  }
}

// create the consumer as higher order component
export const withGlobalContext = ChildComponent => props => (
  <GlobalContext.Consumer>
    {
      context => <ChildComponent {...props} global={context} />
    }
  </GlobalContext.Consumer>
);