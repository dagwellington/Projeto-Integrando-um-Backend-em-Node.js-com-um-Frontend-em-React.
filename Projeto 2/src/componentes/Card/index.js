import { useState } from 'react';

const Card = () => {

    const [valor, setValor]  useState(0)

    function Adicionar (){
        setValor(valor + 1)
    }
    function Remover (){
        setValor(valor - 1)
    }

    return(
        <div className="card">
            <div className="card-header">
                Meu primeiro card
            </div>
            <div className="card-body">
            <button
                type="button"
                className="btn btn-sucess"
                onClick={Adicionar}
            > 
                Adicionar 
            </button>      
            <button 
                type="button" 
                classname="btn btn-danger"
                onClick={Remover}
            >     
                Remover
            </button>
            <p>{valor}</p>
        </div>
    )    
}