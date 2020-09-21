import React from 'react';

const GlobalContext = React.createContext({});

export class GlobalContextProvider extends React.Component {
  state = {
    beats: 0,
    timer: 15
  }

  resetValues = () => {
    this.setState({ beats: 0 });
    this.setState({ timer: 15 });
  }

  switchToOffline = () => {
    this.setState({ isOnline: false });
  }

  render () {
    return (
      <GlobalContext.Provider
        value={{
          ...this.state,
          resetValues: this.resetValues,
          switchToOffline: this.switchToOffline
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
      context => <ChildComponent {...props} global={context}  />
    }
  </GlobalContext.Consumer>
);