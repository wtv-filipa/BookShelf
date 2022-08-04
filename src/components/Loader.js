import React from 'react';
import load from '../img/ajax-loader.gif';

import "../estilos/Loader.css"

const Loader = ({ loading, searchTerm }) => {

    return (
        <>
            {loading && (
                <div style={{ color: `green` }} className="loader">
                    <img className="loaderImagem" src={load}/>
                    <span className="fraseLoad">Procurando por {searchTerm}...</span>
                </div>
            )}
        </>
    );
};

export default Loader;