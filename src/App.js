import React, { Component } from 'react';
import './App.css';

const Welcome = (props) => {
    let {name,age,condition} = props.personne;
    return (
        <div>
            Hello World {name} de {age}  : {condition}
        </div>


    )
};

class App extends Component{
    render() {

        let person={'name':"Jaime",'age' : "29", 'condition': "bien" }

        return <Welcome className="toto" personne={person}/>

    }
}

export default App;
