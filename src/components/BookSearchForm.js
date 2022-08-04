import React from 'react';

import Error from './Error';

import '../estilos/BookSearchForm.css';


const BookSearchForm = ({onSubmitHandler, searchTerm, onInputChange, error}) => {

    return (
        <div className="formulario container col-12 mt-5">

            <form className="search-form" onSubmit={onSubmitHandler}>
                <input
                    className="search-bar"
                    type="search" placeholder="ex:. Harry Potter" value={searchTerm}
                    onChange={onInputChange} required/>
                <button type="submit" className="search-button">Procurar</button>

                <Error/>

            </form>

        </div>
    );
};

export default BookSearchForm;