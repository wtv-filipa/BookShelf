import React from 'react';

import '../estilos/BookSearchForm.css'

const Error = ({error}) => {

    return(
        <div className="erro">
            {error && (
                <div>
                    <span className="erro text-center">Ocorreu um erro na extração dos dados da API. Por favor tenta novamente.</span>
                </div>
            )}
        </div>
    )
};

export default Error;