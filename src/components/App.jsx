import css from '../styles/app.module.css';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

export const App = () => { 
  const contacts = useSelector(getContacts); 
  const dispatch = useDispatch(); 

  const onSubmit = (evt) => { 
    evt.preventDefault()
    const form = evt.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    if (contacts.filter(el => el.name === name).length > 0) {
      window.alert(`${name} is already in contacts`); 
    } else {
      dispatch(addContact({ name, number }));
      form.reset();
    }
  }

  return (
      <>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onSubmit={onSubmit} />
        <div className={css['contacts-wrapper']}>
          <h2 className={css.title}>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </>
  )
}

 