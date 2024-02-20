import React from 'react';

const SearchBox = ({searchChange}) => {
    return(
        <div className='pa2'>
        <input
        onChange = {searchChange} 
        type = "search" 
        placeholder = "search robots" 
        className='pa3 bg-lightest-blue bw2 b-green' />
        </div>
    );
    
}
export default SearchBox;
