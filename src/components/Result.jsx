import styled from '@emotion/styled';

const ResultCard = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;

    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
`;

const Text = styled.p`
    font-size: 16px;
    span {
        font-weight: 700;
    }
`;

const Precio = styled.p`
    font-size: 20px;
    span {
        font-weight: 700;
    }
`;

const Image = styled.img`
    display: block;
    width: 100px;
`;

const Result = ({ result }) => {
    
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL ,LASTUPDATE } = result;
    
    return (
        <ResultCard>
            <Image
                src={`https://cryptocompare.com/${IMAGEURL}`}
                alt="Image cripto"
            />
            <div>
                <Precio>El precio es de: <span>{ PRICE }</span></Precio>
                <Text>Precio más alto del día: <span>{ HIGHDAY }</span></Text>
                <Text>Precio más bajo del día: <span>{ LOWDAY }</span></Text>
                <Text>Variación últimas 24 horas: <span>{ CHANGEPCT24HOUR }</span></Text>
                <Text>Última actualización: <span>{ LASTUPDATE }</span></Text>
            </div>
        </ResultCard>
    )
}

export default Result