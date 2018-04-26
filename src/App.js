import React from 'react';
import Formulaire from "./Formulaire";
import ListNames from "./ListNames";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            names: ['Pierre', 'Jaime'],
        };
        this.addNameToList = this.addNameToList.bind(this);
    }

    addNameToList(name) {
        this.setState(prevState => ({
            names: [...prevState.names,name]
            }))
    }

    render() {
    const {names} = this.state;
        console.log('names' +names);

    return (
            <div>
                <Formulaire addNameToList={this.addNameToList} />
                <ListNames names={names}  />
            </div>
            )
    }
}

export default App;