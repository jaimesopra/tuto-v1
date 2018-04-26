import React from 'react';

const ListNames = (props) => {
    return (
        <div>
            <h2>Liste de noms </h2>
            <ul>
                { props.names.map(x=> <ListItem nameItem={x}/>)}
            </ul>
        </div>
    );
};

const ListItem = (props) =>
            <li>{props.nameItem}</li>
;



export default ListNames;