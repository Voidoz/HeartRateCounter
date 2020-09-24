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
    this.setState({ beats: 0 });
    this.setState({ timer: 15 });
    this.setState({ running: false });
  }

  addBeat = () => {
    if (this.state.running == true) {
      this.setState({ beats: this.state.beats + 1 });
    }
    else if (this.state.running == false) {
      this.setState({ beats: this.state.beats + 1 });
      this.setState({ running: this.state.running = true });
      var heart = Heartbeats.createHeart(1000);
      heart.createEvent(1, { countTo: 15 }, (count, last) => {
        var pulse = heart.createPulse();
        if (this.state.running === false) {
          heart.kill();
        } else {
          pulse.beat(this.setState({ timer: this.state.timer - 1 }));
        }
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