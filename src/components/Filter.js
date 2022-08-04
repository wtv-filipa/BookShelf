import React from 'react';

import '../estilos/Filter.css';

const Filter = (props) => {

    return (
        <div className="container justify-content-center selectContainer">
            <span className="col-lg-4 col-sm-12 float-left">
                <select className="form-control" defaultValue="Sort" id="filtros"
                        onChange={props.order}>
                    <option disabled value="Sort">Filtro</option>
                    <option value="Newest">Mais recente</option>
                    <option value="relevance">Relevante</option>
                </select>
            </span>

            <span className="col-lg-4 float-right">
                <select className="form-control" defaultValue="Sort" id="items" onChange={props.resultsNumber}>
                    <option disabled value="Sort">Resultados:</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                </select>
            </span>
            
            <span className="col-lg-4 float-right">
                <select className="form-control" defaultValue="Sort" id="filters"
                        onChange={props.bookFilter}>
                    <option disabled value="Sort">Itens:</option>
                    <option value="all">Tudo</option>
                    <option value="books">Livros</option>
                    <option value="magazines">Revistas</option>
                </select>
            </span>
        </div>
    )
};

export default Filter;