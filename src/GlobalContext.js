import React from 'react';
import Hearken from 'hearken';

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

      console.log("Running State = " + this.state.running)

      this.setState({ running: this.state.running = true });


      var second = 1;
      myTimer = () => {
        this.setState({ timer: this.state.timer - 1 });
        second++;
        if (second >= 16) {
          myStopFunction()
        }
      }

      myStopFunction = () => {
        clearInterval(myVar);
        this.setState({ running: this.state.running = false });
      }

      var myVar = setInterval(myTimer, 1000);
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