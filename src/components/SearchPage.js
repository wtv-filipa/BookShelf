import React, {useState} from 'react';
import axios from 'axios';

import BookSearchForm from './BookSearchForm';
import Loader from './Loader';
import BooksList from './BooksList';
import Filter from './Filter';
import Error from "./Error";

const SearchPage = () => {

    //Estados
    const [searchTerm, setSearchTerm] = useState('');
    const [books, setBooks] = useState({items: []});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);


    //Filtros
    const [maxResults, setMaxResults] = useState('10');
    const [orderBy, setOrderBy] = useState('relevance');
    const [filter, setFilter] = useState('all');


    //Pedido API
    const fetchBooks = async () => {
        setLoading(true);
        setError(false);

        try {

            const result = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&startIndex=0&maxResults=${maxResults}&printType=${filter}&orderBy=${orderBy}`);

            setBooks(result.data);
            console.log(result.data)
        }
        catch (error) {

            setError(true);
        }

        setLoading(false);
    };


    const onInputChange = e => {
        setSearchTerm(e.target.value);
        console.log(searchTerm);
    };


    const onSubmitHandler = e => {
        e.preventDefault();
        fetchBooks();
    };


    //Filtros
    const order = () => {

        let order = document.getElementById('filtros').value;
        console.log(order);

        setOrderBy(order);
    };

    const resultsNumber = () => {

        let items = document.getElementById('items').value;
        console.log(items);

        setMaxResults(items);
    };

    const bookFilter = () => {

        let bookType = document.getElementById('filters').value;
        console.log(bookType);

        setFilter(bookType);
    };


    return (
        <div>
            <BookSearchForm
                onSubmitHandler={onSubmitHandler}
                onInputChange={onInputChange}
                searchTerm={searchTerm}
                error={error}/>


            <Filter
                order={order}
                resultsNumber={resultsNumber}
                bookFilter={bookFilter}
            />

            <Error
                error={error}/>

            <Loader
                searchTerm={searchTerm}
                loading={loading}
            />


            <BooksList books={books}/>
        </div>
    );
};

export default SearchPage;