import styled from '@emotion/styled';

const TextError = styled.div`
    background-color: #c9184a;
    border-radius: 8px;
    color: #FFF;
    padding: 15px;
    font-family: 'Lato', sans-serif;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
`;

const Error = ({ children }) => {
    return (
        <TextError>
            { children }
        </TextError>
    )
}

export default Error
