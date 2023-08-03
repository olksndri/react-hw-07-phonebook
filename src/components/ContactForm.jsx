import { nanoid } from '@reduxjs/toolkit';
import css from '../styles/app.module.css';
import PropTypes from 'prop-types';

export const ContactForm = ({ onSubmit }) => { 
    const textId = nanoid();
    const numberId = nanoid();

    return ( 
        <form onSubmit={onSubmit} className={css.form}>
        <label htmlFor={textId}>Name</label>
        <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        id={textId}
        required
        />
        <label htmlFor={numberId}>Number</label>
        <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        id={numberId}
        required
        />  
        <button type="submit">Add contact</button>
        </form>
    )
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}
