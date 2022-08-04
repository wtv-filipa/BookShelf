import React from 'react';
import {Link} from "react-router-dom";
import '../estilos/BooksList.css';

const BooksList = ({books}) => {

    if (books.items === undefined) {

        return (

            <div className="container justify-content-center card-group books">
                <h5 className="mt-5">Ups, não temos resultados... 😞</h5>
            </div>

        );
    }
    else {

        return (

            <div className="container-fluid justify-content-center card-group books mb-5">

                {books.items.map((book, index) => {

                    return <Book book={book} key={index}/>;
                })}
            </div>
        );
    }
};


const Book = ({book}) => {

    return (
        <div className="card-group">
            <div className="card">
                <div className="justify-content-center">
                <Link to={`/book/${book.id}`}><img
                        className="capaLivro mt-3"
                        alt={`${book.volumeInfo.title} book`}
                        src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                    /> </Link> 
                </div>
                <div className="card-body">
                    <Link to={`/book/${book.id}`} className="x text-decoration-none">
                        <h5 style={{color: "black"}} className="card-title">{book.volumeInfo.title}</h5>
                    </Link>
                    <p className="card-text blockquote-footer">{book.volumeInfo.authors}</p>
                    <p className="card-text">em {book.volumeInfo.publishedDate}</p>
                </div>
            </div>
        </div>
    );
};

export default BooksList;