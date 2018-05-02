import React from 'react';
import{ connect } from 'react-redux';
import Button from 'material-ui/Button';
import {removeNameToList} from '../actions/action';


const ListNames = (props) => {

    return (
        <div>
            <h2>Liste de noms </h2>
            <ul>
                { props.persons.map(x=> <ListItem nameItem={x.name} genre={x.genre} removeNameToList={props.removeNameToList}/>)}

            </ul>
            <p>Il y a {props.countHomme} hommes</p>
            <p>Il y a {props.countFemme} femmes</p>
        </div>
    );
};



const ListItem = (props) =>

        <li>
            <Button  onClick={props.removeNameToList(props.nameItem)} type="submit"  color="primary" >
                Effacer
            </Button>
            {`${props.genre} ${props.nameItem}`}


        </li>
    ;


const mapStateToProps=(state)=>{
    return {
        names: state.names,
        persons: state.persons,
    };
};




const mapDispatchToProps=(dispatch)=>({


        removeNameToList: name =>event=> {
            event.preventDefault();
            dispatch(removeNameToList(name));
        }
    }
);



export default connect(mapStateToProps,mapDispatchToProps)(ListNames);