import React from 'react';
import { connect } from 'react-redux';

const ListNames = (props) => {
    return (
        <div>
            <h2>Liste de noms </h2>
            <ul>
                { props.names.map(x=> <ListItem nameItem={x}/>)}
            </ul>
            <p>Il y a {props.countHomme} hommes</p>
            <p>Il y a {props.countFemme} femmes</p>
        </div>
    );
};




const ListItem = (props) =>
            <li>{props.nameItem}</li>
;
const mapStateToProps=(state)=>{
    return {names: state};
    };


export default connect(mapStateToProps)(ListNames);