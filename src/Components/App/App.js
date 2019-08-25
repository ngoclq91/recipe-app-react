import React, { Component } from 'react';

class App extends Component {
    clickMe = () => {
        console.log('clicked me!');
    };

    render() {
        return (
            <div className="App">
                <h1>Hello, World</h1>
                <button onClick={ this.clickMe }>Click Me</button>
            </div>
        )
    }
}

export default App;
