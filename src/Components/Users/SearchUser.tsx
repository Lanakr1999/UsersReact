import React, { Dispatch, SetStateAction } from 'react';

const SearchUser = ({setSearchedValue, searchedValue}: {setSearchedValue: Dispatch<SetStateAction<string>>, searchedValue: string}) => {

  return (
    <div className='container mt-5'>
      <input type='search' className='form-control'
             onChange={(event) => setSearchedValue(event.target.value)}/>
      <h2>{searchedValue}</h2>
    </div>
  );
};

export default SearchUser;