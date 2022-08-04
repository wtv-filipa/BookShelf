import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { db, myFirebase } from './../firebase/firebase';
import BookDetail from './BookDetail';
import './../estilos/book_detail.css'
import Error from './Error';


const BookDetailPage = ({ match }) => {
    const { params: { bookId }, } = match;
    const [book, setBook] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(false);
    const [favorite, setFavorite] = useState(false);

    useEffect(() => {

        const fetchBook = async () => {
            setLoading(true);
            setError(false);
            try {
                const result = await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
                setBook(result.data);
            } catch (error) {
                setError(true);
            }
            setLoading(false);
        };
        // Call the API
        fetchBook();
        //to get the user from auth
        myFirebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                setUser(myFirebase.auth().currentUser);
                // console.log(user);
            } else {
                // No user is signed in.
                console.log("não tem user");
            }
        });

        retorna();

    }, [bookId]);

     function retorna (){
        let verificar = db.collection('lidos');
        let query = verificar.where('book_id', '==', bookId).get()
            .then(snapshot => {
                if (snapshot.empty) {
                    console.log('No matching documents.');
                    setFavorite(false);
                    return;
                }

                snapshot.forEach(doc => {
                    console.log(doc.id, '=>', doc.data());
                    setFavorite(true);
                });
            })
            .catch(err => {
                console.log('Error getting documents', err);
            });
            
    }

    /*adicionar livro ao favoritos*/
    function favorito(e) {
        console.log("adicionado fav");
        console.log("user" + user.uid);

        let data = {
            book_id: bookId,
            book_img: `http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`,
            titulo: book.volumeInfo.title,
            user_uid: user.uid
        };

        // Add a new document in collection "cities" with ID 'LA'
        let setDoc = db.collection('lidos').doc(book.id + user.uid).set(data);

        console.log(favorite);
        window.location.reload();

    }

    function removeFavorito(e) {
        console.log("user" + user.uid);

        let deleteDoc = db.collection('lidos').doc(book.id + user.uid).delete();
        console.log("removido dos favs");
        
        console.log(favorite);
        window.location.reload();
    }

    if (favorite === false) {
        return (
            <div className="container">
                <br></br>
                <div>
                    <Link to={`/`} className="mt-5 core">Voltar</Link>
                    <h3 onClick={favorito} class="far fa-heart float-right"></h3>
                </div>
                <br></br>
                {loading && (
                    <div style={{ color: `black` }}>
                        A carregar o livro <strong>{bookId}</strong>
                    </div>
                )}
                {error && (
                    <div style={{ color: `red` }}>
                        Ocorreu um erro na extração dos dados da API. <a href="" style={{ textDecoration: "none", color: "red" }}>Por favor tenta novamente.</a>
                    </div>
                )}

                {book && <BookDetail book={book} />}

            </div>
        );
    } else {
        return (
            <div className="container">
                <br></br>
                <div>
                    <Link to={`/`} className="mt-5 core">Voltar</Link>

                    <h3 onClick={removeFavorito} class="fas fa-heart coreee float-right"></h3>
                </div>
                <br></br>
                {loading && (
                    <div style={{ color: `black` }}>
                        A carregar o livro <strong>{bookId}</strong>
                    </div>
                )}
                {error && (
                    <div style={{ color: `red` }}>
                        Ocorreu um erro na extração dos dados da API. <a href="" style={{ textDecoration: "none", color: "red" }}>Por favor tenta novamente.</a>
                    </div>
                )}
                {book && <BookDetail book={book} />}
            </div>
        );
    }
};


export default BookDetailPage;