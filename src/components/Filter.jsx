import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { setSearchFilter } from 'redux/filterSlice';

export const Filter = () => { 
    const filterId = nanoid(); 
    const dispatch = useDispatch(); 

    const onInput = (evt) => {
        const value = evt.target.value; 
        dispatch(setSearchFilter(value)); 
        
    }

    return ( 
        <>
            <label htmlFor={filterId}>Search contacts by name</label>
            <input type="text" id={filterId} onInput={onInput}/>
        </>
    )
}

