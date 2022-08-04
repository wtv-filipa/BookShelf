import React from 'react';
import './../estilos/book_detail.css';

const BookDetail = ({ book }) => {


    if (book.volumeInfo.authors === false ||
        book.volumeInfo.publishedDate === false ||
        book.volumeInfo.publisher === false ||
        book.volumeInfo.pageCount === false ||
        book.volumeInfo.description === false ||
        book.saleInfo.saleability === false ||
        book.saleInfo.isEbook === false ||
        book.accessInfo.pdf.isAvailable === false ||
        book.saleInfo.isEbook === false ||
        book.volumeInfo.industryIdentifiers[null] ||
        book.saleInfo.listPrice.amount === null) {

        return (
            <div className="container">

                <div className="row">

                    <div className="col-md-3">
                        <div className="text-center">
                            <img
                                class="container img-fluid float-left col-12 imgBook"
                                alt={`${book.volumeInfo.title} book`}
                                src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                            />
                        </div>
                    </div>


                    <div className="col-md-9 personal-info">
                        <h2>{book.volumeInfo.title}</h2>
                        <p className="texto"> by {book.volumeInfo.authors}</p>
                        <p className="texto">{book.volumeInfo.publisher}, {book.volumeInfo.publishedDate}- {book.volumeInfo.pageCount} páginas </p>

                    </div>
                </div>
                <hr />
                <div className="col-12">
                    <h4 class="mt-3"><strong>Mais informações</strong></h4>
                    <p><strong>Disponível para venda: </strong> {book.saleInfo.saleability};</p>

                    <p><strong>Disponível em <i>Linguagem</i>: </strong>{book.volumeInfo.language}</p>
                </div>

            </div>
        );
    }
    else {

        return (
            <div className="container">

                <div className="row">

                    <div className="col-md-3">
                        <div className="text-center">
                            <img
                                class="container img-fluid float-left col-12 imgBook"
                                alt={`${book.volumeInfo.title} book`}
                                src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                            />
                        </div>
                    </div>


                    <div className="col-md-9 personal-info">
                        <h2> {book.volumeInfo.title}</h2>
                        <p className="texto"> by {book.volumeInfo.authors}</p>
                        <p className="texto">{book.volumeInfo.publisher}, {book.volumeInfo.publishedDate}- {book.volumeInfo.pageCount} páginas </p>

                        <p><strong>Categoria: </strong>{book.volumeInfo.categories};</p>
                        <p><strong>Resumo: </strong>{book.volumeInfo.description};</p>

                    </div>
                </div>
                <hr />
                <div className="col-12">
                    <h4 class="mt-3">Mais informações</h4>
                    <p><strong>Disponível para venda: </strong> {book.saleInfo.saleability};</p>
                    <p><strong>Preço: </strong> {book.saleInfo.listPrice.amount} {book.saleInfo.listPrice.currencyCode};</p>
                    <p><strong>Disponível em <i>E-Book/PDF</i>: </strong>{book.saleInfo.isEbook} {book.accessInfo.pdf.acsTokenLink}</p>
                    <p><strong>Disponível em <i>Linguagem</i>: </strong>{book.volumeInfo.language}</p>
                </div>

            </div>
        );
    }
};

export default BookDetail;