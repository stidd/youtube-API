import React, { useState } from 'react';

import { Paper, TextField } from '@material-ui/core';


const SearchBar = ({ onFormSubmit }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            onFormSubmit(searchTerm);
        }
    }


    return (
        <Paper elevation={6} style={{ padding: '25px' }}>

            <TextField fullWidth label="Search..." onChange={handleChange} onKeyPress={onKeyPress} />

        </Paper>
    )
}


// class SearchBar extends React.Component {
//     state = {
//         searchTerm: '',
//     }


//     handleChange = (e) => {
//         this.setState({
//             searchTerm: e.target.value,
//         });
//     }

//     handleSubmit = (e) => {
//         const { searchTerm } = this.state;
//         const { onFormSubmit } = this.props;

//         onFormSubmit(searchTerm);

//         e.preventDefault();



//     }



//     render() {
//         return (
//             <Paper elevation={6} style={{ padding: '25px' }}>
//                 <form onSubmit={this.handleSubmit}>
//                     <TextField fullWidth label="Search..." onChange={this.handleChange} />
//                 </form>
//             </Paper>
//         )
//     }
// }

export default SearchBar;