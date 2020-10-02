import React, { Component, createContext } from 'react';
import Heartbeats from 'heartbeats';

const GlobalContext = createContext({});

export class GlobalContextProvider extends Component {
  state = {
    beats: 0,
    timer: 15,
    running: false,
    complete: false
  }

  resetValues = () => {
    this.setState({ beats: 0 });
    this.setState({ timer: 15 });
    this.setState({ running: false });
    this.setState({ complete: false });
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

        // console.log(last);

        //This project gives us access to an event called last. The last heartbeat, so the last second that will tick.
        if (last) {
          this.setState({ complete: true });
          this.setState({ timer: "Done! Tap to continue..." });
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