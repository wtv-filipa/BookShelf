import React from 'react';
import './../estilos/bookshelf.css';
import { Link } from 'react-router-dom';
import { myFirebase, db } from "../firebase/firebase";
import prateleira from '../images/prateleira.png'

const favoritos = [];
class Bookshelf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            book_id: [],
            user_uid: [],
            favoritos1: []
        }

    }

    componentDidMount() {
        let currentComponent = this;
        /*buscar o user*/
        myFirebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                currentComponent.setState({
                    user: myFirebase.auth().currentUser
                });
                //console.log(user);
            } else {
                // No user is signed in.
                console.log("não tem user");
            }
        });

    }
    componentDidUpdate() {
        const { user } = this.state;
        console.log(user)
        let currentComponent = this;

        let fav = db.collection('lidos');
        let array = [];

        if (user && favoritos.length === 0) {

            let favorito = fav.get()
                .then(snapshot => {
                    snapshot.forEach(doc => {

                        var data = doc.data();
                        if (data.user_uid === user.uid) {
                            favoritos.push(data);

                            currentComponent.setState({
                                book_id: [data.book_id],
                                user_uid: [data.user_uid]
                            }
                            );
                        }
                    });
                    return favoritos;
                })
                .catch(err => {
                    console.log('Error getting documents', err);
                });
        }


    }
    render() {

        const { user } = this.state;

        if (user != null && favoritos.length != 0) {
            //console.log(user.uid + " e " + user_uid);

            const Books = ({ items }) => (
                items.map(value =>
                    <ListOf image={value.book_img} titulo={value.titulo} id={value.book_id} />
                )
            );

            const ListOf = ({ image, titulo, id }) => (
                <div className="card-group">
                    <div className="card carde">
                        <div className="justify-content-center">
                            <Link to={`/book/${id}`}> <img className="capaLivro mt-3" alt={titulo} className="card-img-top" src={image} /></Link>
                        </div>
                        <div className="card-body">
                            <Link to={`/book/${id}`} className="x text-decoration-none">
                                <h5 style={{ color: "black" }} className="card-title">{titulo}</h5>
                            </Link>
                        </div>
                    </div>
                </div>

            );
            return (
                <div className="container mt-5 justify-content-center books">
                    <h2>Os  meus favoritos</h2>
                    <hr></hr>
                    <div className="card-group">

                        <Books items={favoritos} />
                    </div>
                </div>
            )

        } else {
            return (
                <div className="container mt-5 text-center">
                    <img width="600px" height="auto" className="img-fluid prat" src={prateleira} alt="prateleira" />
                    <br></br>
                    <h3 className="text-center mb-3">Ainda não tens nenhum livro favorito...</h3>
                    <Link className="cor" to="/"><button className="but"> Procurar</button></Link>
                </div>
            )
        }

    }
}

export default Bookshelf;

