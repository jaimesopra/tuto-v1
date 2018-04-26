import React from 'react';
import Formulaire from "./Formulaire";
import ListNames from "./ListNames";


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            names: ['Pierre', 'Jaime'],
            countHomme: 2,
            countFemme: 0,
        };
        this.addNameToList = this.addNameToList.bind(this);
        this.addHommes = this.addHommes.bind(this);
    }

    addNameToList(name) {
        this.setState(prevState => ({
            names: [...prevState.names,name]
            }))
    }
    addHommes(countHomme) {
        this.setState(prevState => ({
            countHomme: prevState.countHomme+1,
        }))
    }


    render() {
    const {names,countHomme,countFemme} = this.state;

        console.log('names' +names);

    return (
            <div>
                <Formulaire addNameToList={this.addNameToList} addHommes={this.addHommes} />
                <ListNames countHomme={countHomme} countFemme={countFemme} />
            </div>
            )
    }
}

export default App;