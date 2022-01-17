import { useState, useEffect } from 'react';

import styled from '@emotion/styled';
import { coins } from '../data/Coins';
import useSelectMonedas from '../hooks/useSelectMonedas';
import Error from './Error';

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    padding: 1rem;
    color: #FFF;
    font-weight: 700;
    font-size: 1.5rem;
    margin-top: 3rem;
    text-transform: uppercase;
    transition: background-color .2s ease;
    border-radius: 5px;
    width: 100%;

    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`;

const Form = ({ setCoins }) => {

    const [criptos, setCriptos] = useState([]);
    const [error, setError] = useState(false);

    const [ coin, SelectMonedas ] = useSelectMonedas('Elige tu moneda', coins);
    const [ criptomoneda, SelectCriptomoneda ] = useSelectMonedas('Elige tu Criptomoneda', criptos);

    useEffect( () => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=15&tsym=USD';
            const response = await fetch( url );
            const result = await response.json();

            const arrayCriptos = result.Data.map( cripto => {
                const object = {
                    id: cripto.CoinInfo.Name,
                    name: cripto.CoinInfo.FullName
                }
                return object;
            })
            setCriptos( arrayCriptos );
        }
        
        consultarAPI();
    }, []);

    const handleSubmit = e => {
        e.preventDefault();

        if([ coin, criptomoneda ].includes('')) {
            setError(true);
            return;
        }

        setError( false );
        setCoins({
            coin,
            criptomoneda
        })
    }

    return (
        <>
            { error && <Error>Todos los campos son obligatorios</Error> }
            <form 
                onSubmit={ handleSubmit }
            >
                <SelectMonedas />

                <SelectCriptomoneda />

                <InputSubmit
                    type="submit"
                    value="Cotizar"
                />
            </form>
        </>
    )
}

export default Form
