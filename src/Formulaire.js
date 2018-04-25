import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel,FormGroup, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';
import  Select from 'material-ui/Select';
import Button from 'material-ui/Button';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { withStyles } from 'material-ui/styles';
const styles = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    formControBox: {
        margin: theme.spacing.unit * 3,
        minWidth: 120,
    },
    button: {
        display: 'block',
        marginTop: theme.spacing.unit * 2,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
    bootstrapRoot: {
        padding: 0,
        'label + &': {
            marginTop: theme.spacing.unit * 3,
        },
    },
    bootstrapInput: {
        borderRadius: 4,
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 12px',
        width: 'calc(100% - 24px)',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
    bootstrapFormLabel: {
        fontSize: 18,
    },

});

const ListeNom = (props) => {
/*
    const {persons} =props.stateFromFormulaire;
    const listPersons = persons.map(<div key={persons.id}>
    <li>{persons.nom}</li>
    </div>
    );
    return (<ul>{listPersons}</ul>);
    */
    const {person} =props.stateFromFormulaire;
    return (<div>{person}</div>);
}



class Formulaire extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            genre: 'Mr',
            age: '28',
            open: false,
            isSubmit: false,
            person: "",
            persons:[
                {id: 1, nom: '' },
                {id: 2, nom: ''}
            ],

        }
        ;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }


    handleChange = key => event =>  {

        this.setState({
                [key]: event.target.value,
            });
    };
    handleClose = () => {
        this.setState({ open: false });
    };
    handleSubmit(event) {
        event.preventDefault();
        //  alert('A name was submitted: ' + this.state.value);
        this.setState({
            isSubmit: true
        });

    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    render() {
        const { classes } = this.props;
        let {genre,isSubmit}=this.state;

        return isSubmit?  ( <div><ListeNom stateFromFormulaire={this.state} /></div>)
            :(
            <div className={classes.root}>


                <FormControl component="fieldset" required className={classes.formControl}>
                    <FormLabel component="legend"></FormLabel>

                    <RadioGroup
                        aria-label="gender"
                        name="gender1"
                        className={classes.group}
                        value={this.state.genre}
                        onChange={this.handleChange('genre')}
                    >
                        <FormControlLabel value="Ms" control={<Radio />} label="Femme" />
                        <FormControlLabel value="Mr" control={<Radio />} label="Homme" />
                    </RadioGroup>
                </FormControl>
                <form onSubmit={this.handleSubmit}  >
                <TextField
                    defaultValue=""
                    label={genre}
                    id="bootstrap-input"
                    InputProps={{
                        disableUnderline: true,
                        classes: {
                            root: classes.bootstrapRoot,
                            input: classes.bootstrapInput,
                        },
                    }}
                    InputLabelProps={{
                        shrink: true,
                        className: classes.bootstrapFormLabel,
                    }}
                    value={this.state.person}
                    onChange={this.handleChange('person')}
                />
                    <input type="submit" value="Envoyer" />
                </form>
                <form autoComplete="off">
                    <Button className={classes.button}
                            onClick={this.handleOpen}>
                        Motiv de reclamation
                    </Button>
                    <FormControl className={classes.formControBox}>
                        <InputLabel htmlFor="controlled-open-select"></InputLabel>
                        <Select
                            open={this.state.open}
                            onClose={this.handleClose}
                            onOpen={this.handleOpen}
                            value={this.state.age}
                            onChange={this.handleChange}
                            inputProps={{
                                name: 'age',
                                id: 'controlled-open-select',
                            }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </form>
            </div>
        );
    }
}

Formulaire.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Formulaire);