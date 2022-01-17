import { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import ImgCriptos from './img/imagen-criptos.png';
import Form from './components/Form';
import Result from './components/Result';
import Spinner from './components/Spinner';

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 8rem;
  margin-bottom: 5rem;
  font-size: 34px;

  &::after {
    content: '';
    width: 10rem;
    height: .5rem;
    background-color: #66A2FE;
    display: block;
    margin: 1rem auto 0 auto;
  }
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

function App() {

  const [coins, setCoins] = useState({});
  const [resultado, setResultado] = useState({});
  const [load, setLoad] = useState(false);

  useEffect( () => {
    if( Object.keys(coins).length > 0 ) {
            
      setLoad(true);
      setResultado({});

      const cotizarCripto = async () => {
        const { coin, criptomoneda } = coins;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${coin}`;
        const response = await fetch(url);
        const result = await response.json();

        setResultado( result.DISPLAY[criptomoneda][coin] );

        setLoad( false );
      }


      cotizarCripto();
    }
  }, [coins]);

  return (
    <Container>
      <Imagen
        src={ ImgCriptos }
        alt="Imagen aluciva"
      />
      <div>
        <Heading>Cotiza criptomonedas al instante</Heading>

        <Form 
          setCoins={ setCoins }
        />
        { load && <Spinner /> }
        { resultado.PRICE && <Result result={ resultado } /> }
      </div>
    </Container>
  )
}

export default App
